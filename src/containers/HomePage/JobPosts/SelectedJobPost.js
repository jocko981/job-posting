import React from "react";
import { connect } from "react-redux";
import { fetchSelectedJobPost } from "../../../actions";

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // selected: true
        };
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.fetchSelectedJobPost(id);
    }

    renderJobPost() {
        if (!this.props.selectedJobPost.ad) {
            return (
                <h1 className="ui header teal center aligned">Loading...</h1>
            );
        } else {
            const { title, description, skills, start_date, end_date } = this.props.selectedJobPost.ad;
            // skills - is Array (should be Array of strings)
            return (
                <div>
                    <h1 className="ui header teal center aligned">{title}</h1>
                    <p>description: {description}</p>
                    <p>skills: {skills > 0 ? skills.map(skill => skill) : "No skills required."}</p>
                    <p>start_date: {start_date}</p>
                    <p>end_date: {end_date}</p>
                </div>
            );
        }
    }

    render() {
        return (
            <div className="Sticky_footer_Content_wrapper">
                {this.renderJobPost()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    // console.log(state.allJobPosts.data ? state.allJobPosts.data : [], '[mapStateToProps]')
    return {
        selectedJobPost: state.allJobPosts.data ? state.allJobPosts.data : []
    };
};

export default connect(mapStateToProps, { fetchSelectedJobPost })(HomePage);