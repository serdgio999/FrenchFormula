import React, {Component} from 'react'
import Steps from "./Steps/Steps";
import Customers from "./Customers/Customers";

import NathanProfileImg from "./images/checkuptt2.jpg"

export default class SecondMidSection extends Component {

    render() {
        let languageManager = this.props.languageManager();
        return (
            <div className="MidSection">
                <Steps languageManager={this.props.languageManager}/>

                <section className="checkOut">
                    <div className="container">
                        <h4>{languageManager.checkoutMidSectionTitle}</h4>
                        <a href="#" className="open-modal" data-index="1">
                            <img src={NathanProfileImg} alt=""/>
                        </a>
                        <div className="chekOuStep" id="customers">
                            <h4 id="members_account">{languageManager.customerMidSectionTitle}</h4>
                            <div className="row">
                                <Customers languageManager={this.props.languageManager}/>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        )
    }
}