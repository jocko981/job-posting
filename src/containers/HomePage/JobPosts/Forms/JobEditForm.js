import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSelectedJobPost, } from "../../../../actions";
import JobForm from "./JobForm";

class UserEditForm extends Component {
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.fetchSelectedJobPost(id);
    }

    onSubmit = (formValues) => {
        const { id } = this.props.match.params;
        this.props.editJobPost(id, formValues);
    };


    render() {
        alert('FALI edit Job ACTION funkcija')
        if (!this.props.user) {
            return (
                <div className="Sticky_footer_Content_wrapper">
                    <h1 className="ui header teal center aligned">Edit -'123 ajde ako nema fetch user pusti Loader'</h1>

                </div>
            );
        }

        return (
            <div className="Sticky_footer_Content_wrapper">

                <h1 className="ui header teal center aligned">Edit Job Post</h1>

                <JobForm
                    initialValues={_.pick(this.props.user, 'name', 'id', 'password', 'role')}
                    onSubmit={this.onSubmit}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state.jobPosts.selectedJobPost, '[mapStateToProps]')
    return {
        selectedJobPost: state.jobPosts.selectedJobPost
    };
};

export default connect(mapStateToProps, { fetchSelectedJobPost })(UserEditForm);