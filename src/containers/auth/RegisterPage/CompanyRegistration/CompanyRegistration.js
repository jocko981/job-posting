import React, { useState } from "react";
import axios from "axios";

const CompanyRegistration = () => {
    const [registerValue, setRegisterValue] = useState({ email: "", password: "", password_confirmation: "" });
    const [registerErr, setRegisterErr] = useState(null);

    const registerPasswordValidation = (loginVal) => {
        return registerValue.password.match(/^(?=.*\d).{8,}$/)
        // A be ovo treba za Registration! samo da ima min 8 chars
    }

    const handleChange = (event) => {
        const { name, value } = event.target;

        setRegisterValue((prevValue) => {
            return {
                ...prevValue,
                [name]: value
            };
        });
    }
    const onLoginSubmit = (e) => {
        e.preventDefault();

        // axios.post('/auth/login', loginValue)
        // .then( res => console.log(res) )
        // .catch( err => console.log(err) )

        if (registerPasswordValidation(registerValue)) {
            setRegisterErr(null);
            console.log("Succesfully logged in test");
        } else {
            setRegisterErr("Kao neki Err ako je Password < 8 chars")
        }
    }

    return (
        <>

            <form onSubmit={onLoginSubmit} className="ui large form">
                <div className="ui stacked segment">
                    <div className="field">
                        <div className="ui left icon input">
                            <i className="user icon" />
                            <input
                                required
                                type="text"
                                name="email"
                                placeholder="E-mail address"
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="field">
                        <div className="ui left icon input">
                            <i className="lock icon" />
                            <input
                                required
                                type="password"
                                name="password"
                                placeholder="Password"
                                onChange={handleChange}
                                maxLength="199"
                            />
                        </div>
                    </div>
                    <div className="field">
                        <div className="ui left icon input">
                            <i className="lock icon" />
                            <input
                                required
                                type="password"
                                name="password_confirmation"
                                placeholder="Confirm Password"
                                onChange={handleChange}
                                maxLength="199"
                            />
                        </div>
                    </div>
                    <button className="ui fluid large teal submit button">Submit</button>
                </div>
            </form>

            <div className="error_msg_backround">
                <div className="">{registerErr}</div>
            </div>

        </>
    );
}

export default CompanyRegistration;