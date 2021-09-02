import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSelectedJobPost, fetchAllSkills, editJobPost } from "../../../../actions";
import JobForm from "./JobForm";

class UserEditForm extends Component {
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.fetchSelectedJobPost(id);
        this.props.fetchAllSkills();
    }

    onSubmit = (formValues) => {
        const { id } = this.props.match.params;
        this.props.editJobPost(id, formValues);
    };

    renderEditJobForm() {
        if (this.props.selectedJobPost.status === 404) {
            return (
                <h1 className="ui header teal center aligned">This Job post doesn't exist...</h1>
            );
        } else {
            if (!this.props.selectedJobPost.data) {
                return (
                    <h1 className="ui header teal center aligned">Loading...</h1>
                );
            } else {
                return (
                    <JobForm
                        initialValues={_.pick(this.props.selectedJobPost.data.ad, 'title', 'description')}
                        onSubmit={this.onSubmit}
                        allSkills={this.props.allSkills}
                        selectedJobPost={this.props.selectedJobPost.data}
                    />
                );
            }
        }
    }

    render() {
        return (
            <div className="Sticky_footer_Content_wrapper">
                <h1 className="ui header teal center aligned">Edit Job Post</h1>

                {this.renderEditJobForm()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state.jobPosts.selectedJobPost, '[mapStateToProps]')
    return {
        selectedJobPost: state.jobPosts.selectedJobPost,
        allSkills: state.skills.allSkills
    };
};

export default connect(mapStateToProps, { fetchSelectedJobPost, fetchAllSkills, editJobPost })(UserEditForm);