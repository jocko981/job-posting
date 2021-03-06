import React, { useState } from "react";
import { Link } from "react-router-dom";
import { accountLogin } from "../../../helpers/auth";

const LoginPage = () => {
    const [loginValues, setLoginValues] = useState({ email: "", password: "" });
    const [loginErr, setLoginErr] = useState(null);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setLoginValues((prevValue) => {
            return {
                ...prevValue,
                [name]: value
            };
        });
    }
    const onLoginSubmit = (e) => {
        e.preventDefault();

        if (loginValues) {
            accountLogin(loginValues);
            setLoginErr(null);
        } else {
            setLoginErr("Kao neki Err ako je Password < 8 chars")
        }

        setLoginValues({ email: "", password: "" });
    }

    return (
        <div className="Sticky_footer_Content_wrapper">
            <div className="ui middle aligned center aligned grid">

                <div className="column">

                    <h2 className="ui teal image header">
                        {/* <img src="" alt="logo.img" className="image" /> */}
                        <div className="content">
                            Log-in to your account
                        </div>
                    </h2>

                    <form onSubmit={onLoginSubmit} className="ui large form">
                        <div className="ui stacked segment">
                            <div className="field">
                                <div className="ui left icon input">
                                    <i className="user icon" />
                                    <input
                                        type="text"
                                        name="email"
                                        placeholder="E-mail address"
                                        onChange={handleChange}
                                        maxLength="199"
                                    />
                                </div>
                            </div>
                            <div className="field">
                                <div className="ui left icon input">
                                    <i className="lock icon" />
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                        onChange={handleChange}
                                        maxLength="199"
                                    />
                                </div>
                            </div>
                            <button className="ui fluid large teal submit button">Login</button>
                        </div>
                    </form>

                    <div className="error_msg_backround">
                        <div className="">{loginErr}</div>
                    </div>

                    <div className="ui message">
                        New to us? <Link to="/register" >Sign Up</Link>
                    </div>
                    <div className="ui message">
                        Forgot password? <a href="/">Click here (will go to home page)</a>
                    </div>

                </div>
                
            </div>
        </div>
    );
}

export default LoginPage;