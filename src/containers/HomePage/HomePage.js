import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchAllJobPosts } from "../../actions";

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: true
        };
    }

    componentDidMount() {
        this.props.fetchAllJobPosts();
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

    renderAllJobPosts() {
        return (
            <div className="ui celled list">
                {this.props.allJobPosts.map(post => {
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
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }

    render() {
        return (
            <div className="Sticky_footer_Content_wrapper">

                <h1 className="ui header teal center aligned">Home Page</h1>
                <div className="ui fluid two item menu">
                    <div className="item active">All Jobs</div>
                    <div className="item">Expired Job posts</div>
                </div>

                {this.renderAllJobPosts()}

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    // console.log(state.allJobPosts.data ? state.allJobPosts.data.data : [], '[mapStateToProps]')
    return {
        allJobPosts: state.allJobPosts.data ? state.allJobPosts.data.data : []
    };
};

export default connect(mapStateToProps, { fetchAllJobPosts })(HomePage);