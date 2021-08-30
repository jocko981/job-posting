import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
    const dropdownAdmin = () => {
        return (
            <div className="ui simple dropdown item" tabIndex="0">
                Dropdown <i className="dropdown icon" />

                <div className="menu" tabIndex="-1">
                    <div className="ui teal header">Navigate:</div>
                    <Link to="/skills"><div className="item">Skills</div></Link>
                    <Link to="/users-skills"><div className="item">Users Skills</div></Link>

                    <div className="divider"></div>

                    <div className="ui teal header">My special options:</div>
                    <Link to="/ads/new"><div className="item">New Job Post</div></Link>
                    <Link to="/company-ads"><div className="item">Company Job Posts</div></Link>
                </div>
            </div>
        );
    }

    const dropdownUser = () => {
        return (
            '123 Ovde Users Dropdown'
        );
    }

    return (
        <div className="Navbar_div">
            <div className="ui inverted menu">

                {/* <div className="header item"><i class="bordered inverted teal users icon"></i></div> */}

                <Link to="/" className="item"><i className="large teal caret square left outline icon" />Home</Link>

                <div className="item">---</div>

                {dropdownAdmin()}

                <div className="right menu">
                    <div className="item">
                        <div className="ui action left icon input">
                            <i className="search icon" />
                            <input type="text" placeholder="Search" />
                            <button className="ui button">Submit</button>
                        </div>
                    </div>

                    <div className="item">
                        <Link to="/login"><button className="ui inverted blue button">Za Login/Logout</button></Link>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Navbar;