import React, { useState } from "react";
import { companyRegistration } from "../../../../helpers/auth";

const CompanyRegistration = () => {
    const [registerValues, setRegisterValues] = useState({ name: "", email: "", password: "", password_confirmation: "" });
    const [registerErr, setRegisterErr] = useState(null);

    const registerPasswordValidation = (registerPassword) => {
        return registerPassword.match(/^(?=.*\d).{8,}$/)
        // A be ovo treba za Registration! samo da ima min 8 chars
    }

    const handleChangeInputs = (event) => {
        const { name, value } = event.target;

        setRegisterValues((prevValue) => {
            return {
                ...prevValue,
                [name]: value
            };
        });
    }

    const onRegisterSubmit = (e) => {
        e.preventDefault();

        if (registerPasswordValidation(registerValues.password)) {
            companyRegistration(registerValues); // post request function
            setRegisterErr(null);
        } else {
            setRegisterErr("Check if you typed everything well, password must be 8 chars")
        }
        
        setRegisterValues({ name: "", email: "", password: "", password_confirmation: "" })
    }

    return (
        <>
            <form onSubmit={onRegisterSubmit} className="ui large form">
                <div className="ui stacked segment">

                    <div className="field">
                        <div className="ui left icon input">
                            <i className="user icon" />
                            <input
                                required
                                type="text"
                                name="name"
                                placeholder="Company Name"
                                onChange={handleChangeInputs}
                                maxLength="199"
                            />
                        </div>
                    </div>

                    <div className="field">
                        <div className="ui left icon input">
                            <i className="envelope icon" />
                            <input
                                required
                                type="email"
                                name="email"
                                placeholder="E-mail address"
                                onChange={handleChangeInputs}
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
                                name="password"
                                placeholder="Password"
                                onChange={handleChangeInputs}
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
                                onChange={handleChangeInputs}
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