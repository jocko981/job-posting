import React, { useState } from "react";
import "./RegisterPage.css";
import axios from "axios";
import UserRegistration from "./UserRegistration/UserRegistration";
import CompanyRegistration from "./CompanyRegistration/CompanyRegistration";

const RegisterPage = () => {
    const [selected, setSelected] = useState(true);

    const onClickUser = () => {
        if (selected) {
            return null
        } else setSelected(true);
    }
    const onClickCompany = () => {
        if (!selected) {
            return null
        } else setSelected(false);
    }

    // ovde ce ComponentDidMount{ fetchAllSkills ---> i prikazi react-select meni, 
    // ako nema fetch data, onda: Msg: Fetching skills... }

    return (
        <div className="Sticky_footer_Content_wrapper">
            <div className="ui middle aligned center aligned grid">

                <div className="column">
                    <h2 className="ui teal image header">
                        {/* <img src="" alt="logo.img" className="image" /> */}
                        <div className="content">
                            Register as:
                        </div>
                    </h2>

                    <div className="ui two item pointing menu">
                        <div onClick={onClickUser} className={`item ${selected && 'active'}`}>
                            User
                        </div>
                        <div onClick={onClickCompany} className={`item ${!selected && 'active'}`}>
                            Company
                        </div>
                    </div>

                    {selected ? <UserRegistration /> : <CompanyRegistration />}

                    <div className="ui message">
                        Go back to <a>Login</a>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default RegisterPage;