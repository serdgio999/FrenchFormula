import React, {Component} from 'react'

import blueTick from './images/bluetick.png'

export default class Table extends Component {
    constructor(props) {
        super(props);
        var random = this.rand();
        this.state = {
            random: random,
            tableArr: []
        }
    }

    rand() {
        const random = Math.floor(Math.random() * 26);
        return random;
    }
    componentDidMount() {
        //let checkIterations = 0;
        let languageManager = this.props.languageManager();
        var testArr = [];
        testArr.push(languageManager.tableList);

        const _this = this;
        this.timer = setInterval(function(){
            // checkIterations++;
            // if(checkIterations === 26) {
            //     checkIterations = 0;
            //     testArr = [];
            //     testArr.push(languageManager.tableList);
            //     _this.rand()
            //     clearInterval(this.timer)
            // }

            var random = _this.rand();
            testArr[0].unshift(testArr[0][random]);
            testArr[0].length = 27;
            _this.setState({
                tableArr: testArr[0],
                random: random
            })
        },3500)
    }
    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        let languageManager = this.props.languageManager();

        return(
            <div className="Table verified-results">
                <div className="arrow-cus container">
                    <div className="verified-results-inner">
                        <h3 id="live_results">Résultats éprouvés par des tiers !</h3>
                        <div className="table-responsive">
                            <table className="table table-striped">
                                <thead>
                                    <tr className="tr-header">
                                    {
                                        languageManager.tableMenuItems.map((item, index) => {
                                            return(
                                                <th key={index}>{item.name}</th>
                                            )
                                        })
                                    }
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                    this.state.tableArr.map((item, index) => {
                                        return(
                                            <tr className="trow" key={index}>
                                                <td className="bold-td">
                                                    <span className="red-txt">{item.name} </span>
                                                    {item.descr}
                                                </td>
                                                <td><span className="currency">{item.price}</span></td>
                                                <td>{item.date}</td>
                                                <td>{item.currency}</td>
                                                <td>
                                                    <img src={blueTick} width="20"/>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}