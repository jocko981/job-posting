import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="Navbar_div">
            <div className="ui inverted menu">
                <div className="header item">Brand</div>
                <Link to="/" className="active item">Home</Link>
                <div className="ui dropdown item" tabIndex="0">
                    Dropdown
                    <i className="dropdown icon" />
                    <div className="menu transition hidden" tabIndex="-1">
                        <div className="item">Action</div>
                        <div className="item">Another Action</div>
                        <div className="item">Something else here</div>
                        <div className="divider"></div>
                        <div className="item">Separated Link</div>
                        <div className="divider"></div>
                        <div className="item">One more separated link</div>
                    </div>
                </div>

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