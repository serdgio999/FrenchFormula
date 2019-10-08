import React, {Component} from 'react'

import norbert from './images/luccy.jpg'
import jacques from './images/james.jpg'
import denis from './images/will.jpg'

export default class Customers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clearBoth: 'clear: both;',
            facebook_images: {
                norbert,
                jacques,
                denis
            }
        }
    }
    render() {
        let languageManager = this.props.languageManager();
        return(
            languageManager.customerList.map((item,index) => {
                return(
                    <div className="col-sm-4" key={index}>
                        <div className="checkBooxx">
                            <div className="boxImg">
                                <img src={this.state.facebook_images[item.img]} alt=""/>
                            </div>
                            <h4 className="name">{item.name}</h4>
                            <h6>Date d'inscription :</h6>
                            <h5>19 Mars 2018</h5>
                            <h6>Profits générés à ce jour :</h6>
                            <h4 className="redtext">212 450,00€</h4>
                            <div className="btnCheck">
                                <a className="btncustms open-modal" href="#" data-index="2">Cliquer ici pour voir mon compte en direct</a>
                            </div>
                        </div>
                    </div>
                )
            })
        )
    }
}