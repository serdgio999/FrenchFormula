import React, { Component } from 'react'

import IntlTelInput from 'react-intl-tel-input'
import 'react-intl-tel-input/dist/main.css'
import logo from '../Header/images/logo.png'
import {NavLink, Redirect} from "react-router-dom";
import divWithClassName from "react-bootstrap/esm/utils/divWithClassName";

export default class Regform extends Component {
    constructor(props) {
        super(props);
        this.state = {
            form: {
                first_name: '',
                email: '',
            },
            redirect: false,

            check: false,

        };

        this.saveData = this.saveData.bind(this)
        this.sendData = this.sendData.bind(this)
    }

    updateValue(value, key) {
        let obj = {},
            tempForm = this.state.form
        obj[key] = value
        Object.assign(tempForm, obj)
        console.log(value);
        this.setState({
            form: tempForm,
        })
    }

    componentDidMount() {
        if (this.props.location) this.setState({form: Object.assign(this.state.form, this.props.location.state)})
    }


    saveData() {
        let form = this.state.form
        let checkParams = this.props.validateParams(form)
        if (checkParams.success) this.setState({errors: {}}, () => {
            this.props.setLeadData(form).then(this.props.handleLeadStep).then(this.setState({redirect: true}))
        })
        else this.setState({errors: checkParams.errors})
    }

    sendData() {
        let form = this.state.form,
            checkParams = this.props.validateParams(form)

        if (checkParams.success) this.setState({errors: {}}, () => {
            this.props.setLeadData(form).then(this.props.handleSubmit).then(res => {if (!res.success) this.props.handleStep(this.props.step + 1)})
        })
        else this.setState({errors: checkParams.errors})
    }

    componentDidUpdate() {
        let forms = [...document.querySelectorAll('.Regform')];
        forms.map(form => {
            let steps = [...form.querySelectorAll('.form-wrapper')];
            steps.map((step, index) => {
                if (index+1 === this.props.step-1) {
                    step.classList.add('step');
                }
            })
        })
    }

    handleToggle = () => {
        const { agree_1 } = this.state;
        this.setState(({ agree_1 }) => ({
            agree_1: !agree_1,
        }));
    }

    render() {
        let languageManager = this.props.languageManager();
        let errorMsgs = (this.state.errors) ? Object.keys(this.state.errors).map(key => { if (this.state.errors[key].messages) return this.state.errors[key].messages }).find(value => value) : []
        const errorMsgsValid = errorMsgs ? errorMsgs : [];
        console.log(errorMsgs);

        if(this.props.location.pathname === '/') {
            return (
                <div className={"Regform startFrom" + (this.props.class ? this.props.class : '')} ref={this.setTextInputRef}>
                    <div className='inner'>
                        <div className='form-wrapper one'>
                            {errorMsgsValid.length > 0 && errorMsgsValid.map((error, index)=>{
                                return(<div style={{color: '#ff3215'}} key={index}>{error}</div>)
                            })}
                            {this.props.inputs.map((input)=> {
                                return (
                                    <input key={input} className={`inputfield ${input}`} type="text" name={input} placeholder={languageManager[input]} onChange={ (e) => this.updateValue(e.target.value, input)}/>
                                )
                            })}
                            <div className="btnBBox form-group">
                                {/*<NavLink to={{ pathname: '/secondpage', search: this.props.location.search, state: this.state.form}} onClick={this.saveData} className="btncustms btncustms1">{languageManager.buttonSubmit}</NavLink>*/}
                                <button onClick={this.saveData} className='start'>{languageManager.buttonSubmit}</button>
                                <span className="limittime">{languageManager.underSubmitBtn}</span>
                            </div>
                            <div className="form-group" style={{color: '#666666'}}>
                                <input type="checkbox" required="" checked={this.state.agree_1} name="agree1" onChange={() => this.handleToggle()}/>
                                {languageManager.agreeTerms}
                            </div>
                        </div>
                        <div className={'form-wrapper two' + ((this.props.location.pathname === '/secondpage') ? ' step' : ' ')}>
                            {errorMsgsValid.length > 0 && errorMsgsValid.map((error, index)=>{
                                return(<div style={{color: '#ff3215'}} key={index}>{error}</div>)
                            })}
                            <div className="startFrom reg">
                                <div className="site_form">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <input type="text" className="form-control" name="first_name" id="first_name" placeholder="First Name" onChange={ (e) => this.updateValue(e.target.value)} />
                                        </div>
                                        <div className="col-sm-6">
                                            <input type="text" className="form-control" id="last_name" name="last_name"  placeholder="Last Name"/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <input type="email" className="form-control" name="email" id="email" placeholder="Email"/>
                                        </div>
                                    </div>
                                    <IntlTelInput
                                        preferredCountries={[this.props.countryCode]}
                                        containerClassName="intl-tel-input"
                                        inputClassName="inputfield tel"
                                        autoPlaceholder={true}
                                        separateDialCode={true}
                                        autoComplete="nope"
                                        onSelectFlag={this.handleSelectFlag}
                                        placeholder="Phone"
                                        defaultCountry={this.context.countryCode}
                                        onPhoneNumberChange={(status, value, countryData, number, id) => {
                                            if(value.length<15) {
                                                this.setState({
                                                    phone_country_prefix: `+${countryData.dialCode}`,
                                                    dynamicNum: value.replace(/[^0-9]/g, '')
                                                })
                                                this.context.getCountryCode(countryData.iso2);
                                            }
                                        }}
                                        value = {this.state.dynamicNum}
                                    />
                                </div>
                            </div>
                            <button className="submit sign-up">{languageManager.mainbuttonSubmit}</button>
                        </div>
                    </div>
                </div>
            )
        } else { return <Redirect to={{ pathname: '/secondpage', search: this.props.location.search, state: this.state.form}}/> }

    }
}