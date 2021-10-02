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

    componentDidMount() {
        this.props.fetchCompanyJobPosts();
    }

    // renderAdminEdit(game) {
    //     return (
    //         <div className="right floated content">
    //             <Link to={`/admin/games/edit/${game.ID}`} className="ui button primary">
    //                 Edit
    //             </Link>
    //             <Link to={`/admin/games/delete/${game.ID}`} className="ui button negative">
    //                 Delete
    //             </Link>
    //         </div>
    //     );
    // }

    renderLoadingText = () => {
        if (this.props.companyJobPosts.loading) {
            setInterval(() => {
                this.setState({ loadingText: "Error fetching data :(" })
            }, 3900);
        }

        return this.state.loadingText;
    }

    renderCompanyJobPosts = () => {
        if (this.props.companyJobPosts.loading) {
            return (
                <h1 className="ui header teal center aligned">{this.renderLoadingText()}</h1>
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
                        {this.props.companyJobPosts.data.data.map(post => {
                            return (
                                <div className="item" key={post.id}>

                                    {/* {this.renderAdminEdit(post)} */}

                                    <i className={`large middle aligned icon audio description ${post.active ? "blue" : "grey"}`} />

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
    // console.log(state.jobPosts.companyJobPosts, '[mapStateToProps]')
    return {
        companyJobPosts: state.jobPosts.companyJobPosts
    };
};

export default connect(mapStateToProps, { fetchCompanyJobPosts })(CompanyJobPosts);