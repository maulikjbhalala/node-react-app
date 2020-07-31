
import React from 'react';
import './validate.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
class FormValidate extends React.Component {


    constructor(props) {
        super(props)

        this.state = {
            userData: {},
            erros: {}
        }
        this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }


    submituserRegistrationForm = (e) => {
        e.preventDefault();

        const userData = this.state.userData
        this.setState({
            userData: userData
        })
        toast.success('Form Added succesfully')
    }

    validateForm() {

        let userData = this.state.userData;
        let errors = {};
        let formIsValid = true;

        if (!userData["username"]) {
            formIsValid = false;
            errors["username"] = "*Please enter your username.";
        }


        // if (typeof userData["username"] !== String) {
        //     formIsValid = false;
        //     errors["username"] = "Please enter string only.";
        // }

        if (typeof userData["username"] !== "undefined") {
            if (!userData["username"].match(/^[a-zA-Z ]*$/)) {
                formIsValid = false;
                errors["username"] = "*Please enter alphabet characters only.";
            }
        }

        if (!userData["emailid"]) {
            formIsValid = false;
            errors["emailid"] = "*Please enter your email-ID.";
        }

        if (typeof userData["emailid"] !== "undefined") {
            //regular expression for email validation
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(userData["emailid"])) {
                formIsValid = false;
                userData["emailid"] = "*Please enter valid email-ID.";
            }
        }

        if (!userData["mobileno"]) {
            formIsValid = false;
            errors["mobileno"] = "*Please enter your mobile no.";
        }

        if (typeof userData["mobileno"] !== "undefined") {
            if (!userData["mobileno"].match(/^[0-9]{10}$/)) {
                formIsValid = false;
                errors["mobileno"] = "Please enter valid mobile no.";
            }
        }

        if (!userData["password"]) {
            formIsValid = false;
            errors["password"] = "Please enter your password.";
        }

        if (typeof userData["password"] !== "undefined") {
            if (!userData["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
                formIsValid = false;
                errors["password"] = "Please enter secure and strong password.";
            }
        }

        this.setState({
            errors: errors
        });
        return formIsValid;


    }


    handleChange = (e) => {
        e.preventDefault()
        let userData = this.state.userData;
        userData[e.target.name] = e.target.value;
        this.setState({
            userData
        });

        // toast.success('Form Added succesfully')


    }

    render() {
        const reg = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        const { emailid, username, password, mobileno } = this.state.userData;
        const { emailId, userName, pass, mobileNo } = this.state.erros
        return (
            <div id="main-registration-container">
                <div id="register">
                    <h3>Registration page</h3>
                    <form method="post" name="userRegistrationForm" onSubmit={this.submituserRegistrationForm} >
                        <label>Name</label>
                        <input type="text" name="username" value={username} onChange={this.handleChange} />
                        <div className="errorMsg">
                            {username === null || username === undefined ? <span style={{ color: 'red' }}>please enter username</span> : <div className='sucessMsg'> </div>}
                        </div>
                        <br>
                        </br>

                        <label>Email ID:</label>
                        <input type="text" name="emailid" value={emailid} onChange={this.handleChange} />
                        <div className="errorMsg">
                            {!reg.test(emailid) ? <span style={{ color: 'red' }}>Invalid email id</span> : ''}
                        </div>
                        <label>Mobile No:</label>
                        <input type="text" name="mobileno" value={mobileno} onChange={this.handleChange} />
                        <div className="errorMsg">
                            {typeof (mobileno) !== Number ? <div style={{ color: 'red' }}>
                                Mobile no. should be in number format only
                        </div> : ''}
                        </div>
                        <div className="errorMsg">
                            {mobileno === undefined ? <div style={{ color: 'red' }}>
                                Mobile no. should not be empty
                        </div> : ''}
                        </div>

                        <br>
                        </br>
                        <label>Password</label>
                        <input type="password" name="password" value={password} onChange={this.handleChange} />
                        <div className="errorMsg">{pass}</div>
                        <input type="submit" className="button" value="Register" />
                        <ToastContainer />
                    </form>
                </div>
            </div>

        );
    }
};


export default FormValidate;