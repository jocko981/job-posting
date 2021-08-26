
import React, { Component } from "react";
import { connect } from "react-redux";
import { createJobPost } from "../../../../actions";
import JobForm from "./JobForm";

class GameCreateForm extends Component {

    onSubmit = (formValues) => {
        // this.props.createJobPost(formValues);

        console.log('formValues ', formValues)
    }

    render() {
        return (
            <div className="Sticky_footer_Content_wrapper">
                <h1 className="ui header teal center aligned">New Job Post</h1>

                <JobForm onSubmit={this.onSubmit} />
            </div>
        );
    }

}

export default connect(null, { createJobPost })(GameCreateForm);