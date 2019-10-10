import React, {Component} from 'react'

//Components
import About from "./About/About";
import Gallery from "./Gallery/Gallery";

export default class MidSection extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let languageManager = this.props.languageManager();
        return (
            <div className="MidSection">
                <About languageManager={this.props.languageManager}/>
                <Gallery languageManager={this.props.languageManager}/>

            </div>
        )
    }
}
