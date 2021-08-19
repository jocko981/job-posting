import React, { useState } from "react";
import SkillsDropdown from "./SkillsDropdown";

const UserRegistration = () => {
    const [registerValue, setRegisterValue] = useState({ email: "", password: "", password_confirmation: "", skills: [] });
    const [registerErr, setRegisterErr] = useState(null);

    const registerPasswordValidation = (registerPassword) => {
        return registerPassword.match(/^(?=.*\d).{8,}$/)
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

        if (registerPasswordValidation(registerValue.password)) {
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
                                type="email"
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

                    <SkillsDropdown />

                    <button className="ui fluid large teal submit button">Submit</button>
                </div>
            </form>

            <div className="error_msg_backround">
                <div className="">err ako fejla POST ili sl.{registerErr}</div>
            </div>

        </>
    );
}

export default UserRegistration;