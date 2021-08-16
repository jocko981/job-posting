import React from "react";
import "./LoginPage.css";

const LoginPage = () => {


    return (
        <div className="Sticky_footer_Content_wrapper">
            <h1>LoginPage</h1>
            <div className="ui middle aligned center aligned grid">
                <div className="column">

                    <h2 className="ui teal image header">
                        {/* <img src="" alt="logo.img" className="image" /> */}
                        <div className="content">
                            Log-in to your account
                        </div>
                    </h2>

                    <form className="ui large form">
                        <div className="ui stacked segment">
                            <div className="field">
                                <div className="ui left icon input">
                                    <i className="user icon" />
                                    <input type="text" name="email" placeholder="E-mail address" />
                                </div>
                            </div>
                            <div className="field">
                                <div className="ui left icon input">
                                    <i className="lock icon" />
                                    <input type="password" name="password" placeholder="Password" />
                                </div>
                            </div>
                            <div className="ui fluid large teal submit button">Login</div>
                        </div>
                    </form>

                    <div className="error_backround">
                        <div className="">Error message here</div>
                    </div>

                    <div className="ui message">
                        New to us? <a>Sign Up</a>
                    </div>
                    <div className="ui message">
                        Forgot password? <a>Click here</a>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default LoginPage;