import React, {Component} from 'react'

export default class Steps extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    }
    render() {
        let languageManager = this.props.languageManager();
        return (
            <div className="MidSection">
                <section className="stepsAll">
                    <div className="container">
                        <div className="row bs-wizard">
                            {
                                languageManager.stepsMidSection.map((item, index) => {
                                    return(
                                        <div className="col-xs-4 bs-wizard-step complete" key={index}>
                                            <div className="text-center bs-wizard-stepnum"></div>
                                            <div className="progress">
                                                <div className="progress-bar"></div>
                                            </div>
                                            <a href="#" className="bs-wizard-dot">{index+1}</a>
                                            <div className="bs-wizard-info text-center">
                                                <h4>{item.title}</h4>
                                                <p>
                                                    <strong>{item.strong}</strong>
                                                    {item.descr}
                                                </p>
                                            </div>
                                        </div>
                                    )
                                })
                            }


                        </div>
                    </div>
                </section>
            </div>
        )
    }
}