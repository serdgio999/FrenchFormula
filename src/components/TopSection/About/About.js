import React, {Component} from 'react'
import certificateImg from './images/sigimgg2.png'

export default class About extends Component {
    render() {
        let languageManager = this.props.languageManager();

        return (
            <section className="whoIAm">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-5">
                            <div className="personimg"></div>
                        </div>
                        <div className="col-sm-7">
                            <div className="personInfo" id="who_am_i">
                                <p>
                                    {languageManager.about[0].info_1}
                                    <strong> {languageManager.about[0].strong_1} </strong>
                                    {languageManager.about[0].info_2}
                                    <strong> {languageManager.about[0].strong_2} </strong>
                                </p>
                                <p>
                                    {languageManager.about[1].info}
                                </p>
                                <p>
                                    {languageManager.about[2].info}
                                </p>
                                <h5>{languageManager.about[2].title}</h5>
                                <p>
                                    {languageManager.about[2].info}
                                </p>
                                <a href="#" className="open_guarantee_seal">
                                    <img src={certificateImg} alt=""/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

