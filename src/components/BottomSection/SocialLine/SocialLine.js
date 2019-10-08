import React, {Component} from 'react'

//Facebook images
import Marion from "./images/Marion.jpg";
import Titouan from "./images/Titouan.jpg";
import Baptisle from "./images/Baptisle.jpg";

//Twitter images
import Gabriel from "./images/Gabriel.jpg";
import Manon from "./images/Manon.jpg";
import LeYasmine from "./images/LeYasmine.jpg";
import Corentin from "./images/Corentin.jpg";
import Mathis from "./images/Mathis.jpg";
import Maeva from "./images/Maeva.jpg";

export default class SocialLine extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clearBoth: 'clear: both;',
            facebook_images: {
                Marion,
                Titouan,
                Baptisle
            },
            twitter_images: {
                Gabriel,
                Manon,
                LeYasmine,
                Corentin,
                Mathis,
                Maeva
            },
        }
    }

    render() {
        let languageManager = this.props.languageManager();
        return (
            <section className="get-updates">
                <div className="arrow-cus container">
                    <h4 className="text-center" id="feeds">{languageManager.socialTitle}</h4>
                    <div className="row">
                        {/*Facebook*/}
                        <div className="col-sm-5 col-sm-offset-1">
                            <div className="fb-updates  text-center">
                                <button className="example facebook">{languageManager.facebookTitle}</button>
                                <div className="posts">
                                    {
                                        languageManager.facebookList.map((item, index) => {
                                            return (
                                                <div id="fb_feed_name" key={index}>
                                                    <img src={this.state.facebook_images[item.img]} height="40"/>
                                                    <p>
                                                       <span className="fb_name">
                                                           <strong>{item.name}</strong>
                                                       </span><br/>
                                                        <span id="fb_curr_time_1" className="fb_ctime" sec="240">
                                                           {item.timeAgo}
                                                       </span>
                                                    </p>
                                                    <div style={{clear: 'both'}}></div>
                                                    <div id="fb_data">
                                                        {item.descr}
                                                    </div>
                                                    <div className="fb_comment">
                                                        {item.comment}
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>

                        {/*Twitter*/}
                        <div className="col-sm-5">
                            <div className="tw-updates  text-center">
                                <button className="example twitter">{languageManager.twitterTitle}</button>
                                <div className="posts">
                                    {
                                        languageManager.twitterList.map((item, index) => {
                                            return (
                                                <div id="tw_feed_name" key={index}>
                                                    <img src={this.state.twitter_images[item.img]} height="40"/>
                                                    <p>
                                                        <span className="tw_name">
                                                            <strong>{item.name}</strong>
                                                        </span>
                                                        <span id="tw_curr_time_4" className="tw_ctime" sec="240">{item.timeAgo}</span>
                                                    </p>
                                                    <p className="contents">
                                                        {item.descr}
                                                    </p>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="arrow-down"></div>
                </div>
            </section>
        )
    }
}