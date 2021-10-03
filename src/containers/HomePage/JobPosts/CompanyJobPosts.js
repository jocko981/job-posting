import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchCompanyJobPosts } from "../../../actions";

class CompanyJobPosts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loadingText: "Loading..."
        };
    }

    // renderAdminEdit(post) {
    //     return (
    //         <div className="right floated content">
    //             <Link to={`/ads/${post.ID}`} className="ui button primary">
    //                 Edit
    //             </Link>
    //             <Link to={`/ads/${post.ID}`} className="ui button negative">
    //                 Delete
    //             </Link>
    //         </div>
    //     );
    // }

    componentDidMount() {
        this.props.fetchCompanyJobPosts();

        this.timer = setTimeout(() => {
            if (this.props.companyJobPosts.loading) {
                this.setState({ loadingText: "Error fetching data :(" })
            }
        }, 3900);
    }

    componentWillUnmount() {
        clearTimeout(this.timer);
    }

    renderCompanyJobPosts = () => {
        if (this.props.companyJobPosts.loading) {
            return (
                <h1 className="ui header teal center aligned">{this.state.loadingText}</h1>
            );
        } else {

            if (!this.props.companyJobPosts.data.length) {
                return (
                    <div>
                        <h4>Your company has no Job posts...</h4>

                        <button className="ui blue button">Create Job Post</button>
                    </div>
                );
            } else {
                return (
                    <div className="ui celled list">
                        {this.props.companyJobPosts.data.map(post => {
                            return (
                                <div className="item" key={post.id}>

                                    {/* {this.renderAdminEdit(post)} */}

                                    <i className={`large middle aligned icon audio description ${post.active ? "blue" : "grey"}`} />
                                    {/* BUG IN BACKEND, for every jobpost (active = 0) 😟 */}

                                    <div className="content">
                                        <Link to={`/ads/${post.id}`} className="header">{post.title}</Link>
                                        <div className="description">
                                            Description: {post.description}
                                        </div>
                                        <div className="description">
                                            Skills: \ {post.skills && (post.skills.length > 0 ? post.skills.map((skill, index) => { return <span key={index}> {skill.name} \ </span> }) : "No skills required.")}
                                        </div>
                                        <div className="description">
                                            Start Date: {post.start_date}
                                        </div>
                                        <div className="description">
                                            End Date: {post.end_date}
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
    console.log(state.jobPosts.companyJobPosts, '[mapStateToProps]')
    return {
        companyJobPosts: state.jobPosts.companyJobPosts
    };
};

export default connect(mapStateToProps, { fetchCompanyJobPosts })(CompanyJobPosts);