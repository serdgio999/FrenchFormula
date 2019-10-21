import React, { Component } from 'react'

import IntlTelInput from 'react-intl-tel-input'
import 'react-intl-tel-input/dist/main.css'
import logo from '../Header/images/logo.png'
import {NavLink} from "react-router-dom";

var localName  = "",
    localEmail = "";

export default class Regform extends Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: "",
            last_name: "",
            email: "",
            check: false,
            password: "",
            tel: "",
            agree_1: false,
            agree_2: true,
            phone_country_prefix: "",
            errorIndexes: [0,1,2,3],
            errors: [],
        };
    }

    handleSelectFlag = (num, country) => {
        this.setState({
            phone_country_prefix: '+' + country.dialCode
        });

    }

    phoneValidate = (value) => {
        return !/[^0-9\-\/]/.test(value);
    }

    handleForward(e) {
        let form = e.target.parentElement;
        let paramsToValidate = {};

        if(this.props.step === 1) {
            paramsToValidate = {
                email: this.state.email,
                first_name: this.state.first_name,
                agree_2: this.state.agree_1
            };
            let submitResponse = this.props.validateParams(paramsToValidate);
            if (submitResponse.success) {
                this.props.handleForward(paramsToValidate);
                this.props.handleStep(this.props.step + 1);
                //Set Object to localstorage
                localStorage.setItem('paramsToValidate', JSON.stringify(paramsToValidate));
                //Get Items from LocalStorage
                let data = JSON.parse(localStorage.getItem("paramsToValidate"));
                localName = data.first_name;
                localEmail = data.email;
            } else {
                e.preventDefault();
                this.setState({
                    errors: submitResponse.errors
                })
            }
        }
        // Step 2
        else if (this.props.step === 2) {
            let submitResponse = this.props.validateParams(paramsToValidate);
            let tel = form.querySelector('.tel'),
                phone_number = tel.value;

            paramsToValidate = {
                first_name: this.state.first_name,
                last_name: this.state.last_name,
                email: this.state.email,
                phone_number: phone_number,
                phone_country_prefix: this.state.phone_country_prefix
            };
            //console.log(paramsToValidate);

            if(phone_number.length > 3 ) {
                if (submitResponse.success) {
                    this.props.handleStep(this.props.step + 1);
                    this.props.handleSubmit(paramsToValidate);
                }
            } else if(!this.phoneValidate(phone_number)) {
                this.setState({
                    errors: ["Enter only numbers"]
                })
                return this.state.errors
            }
        }
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

    handleStepChange = (name, value) => {
        let errors = null;
        //this.setState({[name]: value, errors});
        this.setState({[name]: value.replace(/^\s+|\s/g, ''), errors})
    };

    handleToggle = () => {
        const { agree_1 } = this.state;
        this.setState(({ agree_1 }) => ({
            agree_1: !agree_1,
        }));
    }

    render() {
        const {
            first_name,
            last_name,
            email,
        } = this.state;

        let languageManager = this.props.languageManager();

        if (this.props.step <= 2) {
            return (
                <div className={"Regform startFrom" + (this.props.class ? this.props.class : '')} ref={this.setTextInputRef}>
                    <div className='inner'>
                        <div className='form-wrapper one'>
                            {this.state.errors && <div style={{color: '#ff3215'}}>
                                {this.state.errors[0]}
                            </div>}
                            <input className="inputfield fname" type="text" name="first_name" value={first_name} placeholder={languageManager.fname} onChange={(e) => this.handleStepChange(e.target.name, e.target.value)}/>
                            <input className="inputfield email" type="text" name="email" value={email} placeholder={languageManager.email} onChange={(e) => this.handleStepChange(e.target.name, e.target.value)}/>
                            <div className="btnBBox form-group">
                                <NavLink to="/secondpage" onClick={this.handleForward.bind(this)} className="btncustms btncustms1">{languageManager.buttonSubmit}</NavLink>
                                <span className="limittime">{languageManager.underSubmitBtn}</span>
                            </div>
                            <div className="form-group">
                                <input type="checkbox" required="" name="agree1" onChange={() => this.handleToggle()}/>
                                {languageManager.agreeTerms}
                            </div>
                        </div>
                        <div className='form-wrapper two'>
                            {this.state.errors && <div style={{color: '#ff3215'}}>
                                {this.state.errors[0]}
                            </div>}
                            <div className="startFrom reg">
                                <div className="site_form">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <input type="text" className="form-control" name="first_name" id="first_name" placeholder="First Name" defaultValue={localName} onChange={(e) => this.handleStepChange(e.target.name, e.target.value)}/>
                                        </div>
                                        <div className="col-sm-6">
                                            <input type="text" className="form-control" id="last_name" name="last_name" placeholder="Last Name" value={last_name} onChange={(e) => this.handleStepChange(e.target.name, e.target.value)}/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <input type="email" className="form-control" name="email" id="email" placeholder="Email" defaultValue={localEmail} onChange={(e) => this.handleStepChange(e.target.name, e.target.value)}/>
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
                                        onPhoneNumberChange={(status, value, countryData, number, id) => {
                                            if(value.length <=15) {
                                                this.setState({
                                                    phone_country_prefix: `${countryData.dialCode}`,
                                                    dynamicNum: value.replace(/\s\s/, '')
                                                })
                                            }
                                        }}
                                        value = {this.state.dynamicNum}
                                    />
                                </div>
                            </div>
                            <button onClick={this.handleForward.bind(this)} className="submit sign-up">{languageManager.mainbuttonSubmit}</button>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="Regform last-step">
                    <div className="inner">
                        <div className='form-wrapper three last-step-logo'>
                            <img src={logo} className="logo" alt=""/>
                        </div>
                    </div>
                </div>

            )
        }
    }
}