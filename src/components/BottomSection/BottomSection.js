import React, {Component} from 'react'
import Faqs from "./Faqs/Faqs";

export default class BottomSection extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let languageManager = this.props.languageManager();
        return (
            <div className='BottomSection'>

                <Faqs languageManager={this.props.languageManager}/>

                <section className="footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="">
                                    <p>{languageManager.footerCopyright}</p>
                                    <p>
                                        {languageManager.footerCopyright2}
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="textright">
                                    <p className="footer-links">
                                        {
                                            languageManager.footerMenuItems.map((item, index) => {
                                                return(
                                                    <a href="#" key={index}>{item.name} <span>|</span></a>
                                                )
                                            })
                                        }
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        )
    }
}


