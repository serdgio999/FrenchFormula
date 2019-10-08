import React, {Component} from 'react'
import Faqs from "./Faqs/Faqs";
import SocialLine from "./SocialLine/SocialLine";
import Table from "./Table/Table";

export default class BottomSection extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let languageManager = this.props.languageManager();
        return (
            <div className='BottomSection'>

                <SocialLine languageManager={this.props.languageManager}/>
                <Table  languageManager={this.props.languageManager}/>
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


