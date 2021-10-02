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

        // axios.get('/auth/user-profile')
        // .then( res => console.log(res, '/auth/user-profile') )
        // .catch(err => console.log(err, '/auth/user-profile'))
    }

    render() {
        return (
            <div className="Sticky_footer_Content_wrapper">

                <div className="ui fluid two item menu">
                    <div className="item active">All Jobs</div>
                    <div className="item">Expired Job posts</div>
                </div>

                <AllJobPosts allJobPosts={this.props.allJobPosts} />

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    // console.log(state, '[mapStateToProps]')
    return {
        allJobPosts: state.jobPosts.allJobPosts
    };
};

export default connect(mapStateToProps, { fetchAllJobPosts })(HomePage);