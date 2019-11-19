import React from 'react'
import ReactQueryParams from 'react-query-params'
import WOW from 'wowjs'

import Header from "./components/TopSection/Header/Header";
import HeaderSecond from "./components/TopSection/Header/HeaderSecond";
import TopSection from './components/TopSection/TopSection'
import MidSection from './components/MidSection/MidSection'
import SecondMidSection from './components/SecondMidSection/SecondMidSection'
import BottomSection from './components/BottomSection/BottomSection'

import withQueryString from './components/withQueryString'
import {Route, Switch, withRouter} from 'react-router-dom'

class App extends ReactQueryParams {
    constructor(props) {
        super(props)
        this.state = {
            step: 1
        }
    }

    componentDidMount() {
        new WOW.WOW().init();
        if (window.location.pathname === '/secondpage') {
            this.setState({
                step: 2
            })
        }
    }
    handleStep = (step) => {
        this.setState({step})
    };

    render() {
        return (
            <div className='App'>
                <Switch>
                    <Route exact path='/' render={() =>
                        <div>
                            <Header languageManager={this.props.languageManager}/>
                            <TopSection {...this.props}
                                        handleStep={this.handleStep}
                                        step={this.state.step}/>
                            <MidSection {...this.props}
                                        handleStep={this.handleStep}
                                        step={this.state.step}/>
                            <BottomSection {...this.props}
                                           handleStep={this.handleStep}
                                           step={this.state.step}/>
                        </div>
                    }
                    />

                    <Route path='/secondpage' render={() =>
                        <div>
                            <HeaderSecond languageManager={this.props.languageManager}/>
                            <TopSection{...this.props}
                                       handleStep={this.handleStep}
                                       step={this.state.step}/>
                            <SecondMidSection {...this.props}
                                              handleStep={this.handleStep}
                                              step={this.state.step}/>
                            <BottomSection {...this.props}
                                           handleStep={this.handleStep}
                                           step={this.state.step}/>
                        </div>
                    }
                    />
                </Switch>
            </div>
        )
    }
}

export default withRouter(withQueryString(App))