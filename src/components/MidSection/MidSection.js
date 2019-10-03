import React, {Component} from 'react'

//Components
import SocialLine from "./SocialLine/SocialLine"
import Table from "./Table/Table"

export default class MidSection extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    }
    render() {
        let languageManager = this.props.languageManager();
        return (
            <div className="MidSection">
                <SocialLine languageManager={this.props.languageManager}/>
                <Table  languageManager={this.props.languageManager}/>
            </div>
        )
    }
}
