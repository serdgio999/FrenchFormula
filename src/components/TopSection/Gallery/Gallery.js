import React, {Component} from 'react'

//Images
import firstImage from './images/sucimg1.jpg'
import secondImage from './images/sucimg2.jpg'
import thirdImage from './images/sucimg3.jpg'
import forthImage from './images/sucimg4.jpg'
import fifthImage from './images/sucimg5.jpg'
import sixthImage from './images/sucimg6.jpg'
import seventhImage from './images/sucimg7.jpg'

export default class About extends Component {
    render() {
        let languageManager = this.props.languageManager();

        return (
            <section className="success-stories2 ">
                <div className="arrow-cus container">
                    <h4 id="success_stories">{languageManager.galleryTitle}</h4>
                    <div className="success-stories-inner2 text-center">
                        <div className="row">
                            <div className="col-xs-4 col-sm-4">
                                <img className="img-responsive" src={firstImage} alt=""/>
                            </div>
                            <div className="col-xs-4 col-sm-4">
                                <img className="img-responsive" src={secondImage} alt=""/>
                                </div>
                            <div className="col-xs-4 col-sm-4">
                                <img className="img-responsive" src={thirdImage} alt=""/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-6 col-sm-6">
                                <img className="img-responsive" src={forthImage} alt=""/>
                            </div>
                            <div className="col-xs-6 col-sm-6">
                                <img className="img-responsive" src={fifthImage}  alt=""/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-6 col-sm-6">
                                <img className="img-responsive" src={sixthImage}  alt=""/>
                                </div>
                            <div className="col-xs-6 col-sm-6">
                                <img className="img-responsive" src={seventhImage}  alt=""/>
                            </div>
                        </div>
                        <div className="arrow-down"></div>
                    </div>
                </div>
            </section>
        )
    }
}