import React from "react";
import axios from "axios";

const HomePage = () => {

    return (
        <div className="Sticky_footer_Content_wrapper">
            <h1>HomePage</h1> or All Jobs Page
            <div className="ui fluid three item menu">
                <div className="item">All Jobs</div>
                <div className="item active">Fresh Job posts</div>
                <div className="item">Expired Job posts</div>
            </div>
        </div>
    );
}

export default HomePage;