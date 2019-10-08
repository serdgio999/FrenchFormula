import React, {Component} from 'react'
import logo from './images/logo.png'
import NathanLauren from './images/wilsnpng3.png'

export default class HeaderSecond extends Component {
    render() {
        let languageManager = this.props.languageManager();
        return (
            <section className="topbar" id="top">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xs-6 col-sm-6">
                            <div className="logo mem">
                                <img src={logo} alt=""/>
                            </div>
                        </div>
                        <div className="col-xs-6 col-sm-6">
                            <div className="imgtoprit rit2">
                                <img src={NathanLauren} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="bigmenu">
                    <div className="container">
                        <ul>
                            {
                            languageManager.menu_items_2.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <a href={item.link}>{item.name}</a>
                                    </li>
                                )
                            })

                            }
                        </ul>
                    </div>
                </section>
            </section>
        )
    }
}
