import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchCompanyJobPosts } from "../../../actions";

class CompanyJobPosts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // selected: true
        };
    }

    componentDidMount() {
        this.props.fetchCompanyJobPosts();
    }

    renderCompanyJobPosts = () => {
        if (!this.props.companyJobPosts.data) {
            return (
                <h1 className="ui header teal center aligned">Loading...</h1>
            );
        } else {
            
            if (!this.props.companyJobPosts.data.data.length) {
                return (
                    <div>
                        <h4>Your company has no Job posts...</h4>

                        <button className="ui blue button">Create Job Post</button>
                    </div>
                );
            } else {
                return (
                    <div className="ui celled list">
                        {this.props.companyJobPosts.data.data.map(post => {
                            return (
                                <div className="item" key={post.id}>

                                    {/* {this.renderAdminEdit(post)} */}

                                    <i className="large middle aligned icon bullhorn" />

                                    <div className="content">
                                        <Link to={`/ads/${post.id}`} className="header">{post.title}</Link>
                                        <div className="description">
                                            Description: {post.description}
                                        </div>
                                        <div className="description">
                                            Skills: {post.skills}
                                        </div>
                                        <div className="description">
                                            Date: {post.skills}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )
            };
        }
    }

    render() {
        return (
            <div className="Sticky_footer_Content_wrapper" >
                {this.renderCompanyJobPosts()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    // console.log(state.jobPosts.companyJobPosts, '[mapStateToProps]')
    console.log(state, '[STATE - mapStateToProps]')
    return {
        companyJobPosts: state.jobPosts.companyJobPosts
    };
};

export default connect(mapStateToProps, { fetchCompanyJobPosts })(CompanyJobPosts);