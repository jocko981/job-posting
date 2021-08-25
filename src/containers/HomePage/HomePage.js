import React from "react";
import { connect } from "react-redux";
import { fetchAllJobPosts } from "../../actions";
//
import AllJobPosts from "./JobPosts/AllJobPosts";

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // selected: true
        };
    }

    componentDidMount() {
        this.props.fetchAllJobPosts();
    }

    render() {
        return (
            <div className="Sticky_footer_Content_wrapper">

                <h1 className="ui header teal center aligned">Home Page</h1>
                <div className="ui fluid two item menu">
                    <div className="item active">All Jobs</div>
                    <div className="item">Expired Job posts</div>
                </div>

                <AllJobPosts allJobPosts={this.props.allJobPosts.data} />

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    // console.log(state.allJobPosts.data ? state.allJobPosts.data.data : [], '[mapStateToProps]')
    return {
        allJobPosts: state.allJobPosts.data ? state.allJobPosts.data : []
    };
};

export default connect(mapStateToProps, { fetchAllJobPosts })(HomePage);