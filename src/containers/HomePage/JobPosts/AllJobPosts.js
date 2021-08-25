import React from "react";
import { Link } from "react-router-dom";

const AllJobPosts = ({ allJobPosts }) => {

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

    return (
        <div className="ui celled list">
                {allJobPosts.map(post => {
                    return (
                        <div className="item" key={post.id}>

                            {/* {this.renderAdminEdit(post)} */}

                            <i className="large middle aligned icon bullhorn" />

                            <div className="content">
                                <Link to={`/admin/games/${post.id}`} className="header">{post.title}</Link>
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
    );
}

export default AllJobPosts;