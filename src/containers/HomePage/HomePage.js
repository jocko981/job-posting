import React from "react";

const HomePage = () => {

    return (
        <div className="Sticky_footer_Content_wrapper">
            <h1>HomePage</h1>
            <div className="ui fluid three item menu">
                <div className="item">All Jobs</div>
                <div className="item active">Fresh Job posts</div>
                <div className="item">Expired Job posts</div>
            </div>
        </div>
    );
}

export default HomePage;