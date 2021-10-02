import React from "react";
import { Link } from "react-router-dom";

const AllJobPosts = ({ allJobPosts }) => {
    console.log(allJobPosts);

    const renderAllJobPosts = () => {
        if (allJobPosts.loading) {
            return (
                <h1 className="ui header teal center aligned">Loading...</h1>
            );
        } else {

            if (!allJobPosts.data.length) {
                return (
                    <div>
                        <h4>There are currently no active Job posts.</h4>

                        <i className="huge meh outline icon" />

                        <h4>Take a look another day...</h4>
                    </div>
                );
            } else {
                return (
                    allJobPosts.map(post => {
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
                    })
                );
            }

        }
    }


    return (
        <div className="ui celled list">
            {renderAllJobPosts()}
        </div>
    );
}

export default AllJobPosts;