import React, {Component} from 'react'

import Header from './Header/Header'
import Regform from './Regform/Regform'
import About from "./About/About";
import Gallery from "./Gallery/Gallery";

//Images
import firstIcon from './images/spon1.png'
import secondIcon from './images/spon2.png'
import thirdIcon from './images/spon3.png'


export default class TopSection extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let languageManager = this.props.languageManager();

        return (
            <div className='TopSection'>
                <Header languageManager={this.props.languageManager}/>

                <section className="mainsec">
                    <div className="container ">
                        <div className="row ">
                            <div className="col-lg-8">
                                <div className="videoWrapper" id="how_it_works">
                                    <div className="embed-responsive embed-responsive-16by9">
                                        <iframe
                                            src="https://player.vimeo.com/video/360067406?title=0&amp;byline=0&amp;portrait=0&amp;transparent=0&amp;autoplay=1&amp;sidedock=0&amp;controls=0"
                                            width="100%" height="100%" frameBorder="0"></iframe>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="startFrom">
                                    <h4>
                                        {languageManager.formTitle}
                                    </h4>
                                    <h6>
                                        {languageManager.formSubtitle}
                                    </h6>
                                    <Regform
                                        handlePassSync={this.props.handlePassSync}
                                        form={this.props.form}
                                        pageHandler={this.props.pageHandler}
                                        countryCode={this.props.countryCode}
                                        languageManager={this.props.languageManager}
                                        handleStep={this.props.handleStep}
                                        handleForward={this.props.handleForward}
                                        handleSubmit={this.props.handleSubmit}
                                        step={this.props.step}
                                        validateParams={this.props.validateParams}/>

                                    <div className="startImages">
                                        <img src={firstIcon} alt=""/>
                                        <img src={secondIcon} alt=""/>
                                        <img src={thirdIcon} alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <About languageManager={this.props.languageManager}/>

                <Gallery languageManager={this.props.languageManager}/>

            </div>
        )
    }
}
