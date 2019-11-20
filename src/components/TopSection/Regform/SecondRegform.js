import React, { Component } from 'react'
import IntlTelInput from 'react-intl-tel-input'
import logo from '../Header/images/logo.png'
import { Redirect } from 'react-router-dom'
import 'react-intl-tel-input/dist/main.css'

export default class SecondRegform extends Component {
    constructor(props) {
        super(props)

        this.state = {
            form: {
                first_name: '',
                last_name: '',
                //password: '',
                email: '',
                phone_number: ''
            },
        }

        this.sendData = this.sendData.bind(this)
    }

    componentDidMount() {
        if (this.props.location) this.setState({form: Object.assign(this.state.form, this.props.location.state)})
    }

    sendData() {
        let form = this.state.form,
            checkParams = this.props.validateParams(form)

        if (checkParams.success) this.setState({loading: true, errors: {}}, () => {
            this.props.setLeadData(form).then(this.props.handleSubmit).then(res => {if (!res.success) this.setState({redirect: true})})
        })
        else this.setState({errors: checkParams.errors, loading: false})
    }

    render() {
        let languageManager = this.props.languageManager(),
            errorMsgs = (this.state.errors) ? Object.keys(this.state.errors).map(key => { if (this.state.errors[key].messages) return this.state.errors[key].messages }).filter(value => value) : []

        if (!this.state.redirect) {
            return (
                <div className="SecondRegform Regform startFrom">
                    <div className="inner">
                        {
                            (!this.state.loading) ?
                                <div className={'form-wrapper two'}>
                                    {errorMsgs.map(arr => arr.map(error => <div key={error} className="errors">{error}</div>))}
                                    <div className="startFrom reg">
                                        <div className="site_form">
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <input type="text" defaultValue={this.state.form.first_name}
                                                           className="form-control" name="first_name"
                                                           id="first_name" placeholder="First Name"
                                                           onChange={(e) => this.setState({form: this.props.updateValue(this.state.form, e.target.value, 'first_name')})}/>
                                                </div>
                                                <div className="col-sm-6">
                                                    <input type="text" defaultValue={this.state.form.last_name}
                                                           className="form-control" id="last_name" name="last_name"
                                                           placeholder="Last Name"
                                                           onChange={(e) => this.setState({form: this.props.updateValue(this.state.form, e.target.value, 'last_name')})}/>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-12">
                                                    <input type="email" defaultValue={this.state.form.email}
                                                           className="form-control" name="email" id="email"
                                                           placeholder="Email"
                                                           onChange={(e) => this.setState({form: this.props.updateValue(this.state.form, e.target.value, 'email')})}/>
                                                </div>
                                            </div>
                                            <IntlTelInput
                                                fieldName="phone_number"
                                                preferredCountries={[this.props.countryCode]}
                                                containerClassName="intl-tel-input"
                                                inputClassName="inputfield tel small-input"
                                                defaultCountry={this.props.countryCode}
                                                autoPlaceholder={true}
                                                separateDialCode={true}
                                                value={this.state.form.phone_number}
                                                format={true}
                                                onPhoneNumberChange={(a, value, b) => {value = value.replace(/\D/g,''); this.setState({form: this.props.updateValue(this.state.form, value, 'phone_number')})}}
                                            />
                                        </div>
                                    </div>
                                    <button onClick={this.sendData} className="submit sign-up">{languageManager.mainbuttonSubmit}</button>
                                </div> : <img src={logo} alt="loading" className="loading"/>
                        }
                    </div>

                </div>)

        } else { return <Redirect to={{ pathname: '/', search: this.props.location.search, state: this.state.form}}/> }

    }
}
