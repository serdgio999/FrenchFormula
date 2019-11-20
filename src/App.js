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

    render() {
        return (
            <div className='App'>
                <Switch>
                    <Route exact path='/' render={() =>
                        <div>
                            <Header languageManager={this.props.languageManager}/>
                            <TopSection {...this.props}/>
                            <MidSection {...this.props}/>
                            <BottomSection {...this.props} />
                        </div>
                    }
                    />

                    <Route path='/secondpage' render={() =>
                        <div>
                            <HeaderSecond languageManager={this.props.languageManager}/>
                            <TopSection{...this.props}/>
                            <SecondMidSection {...this.props} />
                            <BottomSection {...this.props} />
                        </div>
                    }
                    />
                </Switch>
            </div>
        )
    }
}

export default withRouter(withQueryString(App))