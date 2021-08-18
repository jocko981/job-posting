import React, { useState } from "react";
import axios from "axios";

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

    // Skillz - svaki skill element da ima{ display: inline-block; }
    const skillz = [{ id: 1, name: 'Project Management' }, { id: 2, name: 'JavaScript' },
    { id: 3, name: 'Php' }, { id: 4, name: 'Design' },
    { id: 5, name: 'Quality Assurance' }, { id: 6, name: 'Manager' }, { id: 7, name: 'Testing' }]

    const renderList = () => {
        return (
            <div className="skills_select_list">
                {skillz.map((item, index) => {
                    return (
                        <div key={index} className="item">
                            <div className="content">
                                <div className="header">{item.name}</div>
                            </div>
                        </div>
                    );
                })}
            </div>
        );
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

                    i ovde Skillz da izabere
                        {renderList()}

                    <button className="ui fluid large teal submit button">Submit</button>
                </div>
            </form>

            <div className="error_msg_backround">
                <div className="">{registerErr}</div>
            </div>

        </>
    );
}

export default UserRegistration;