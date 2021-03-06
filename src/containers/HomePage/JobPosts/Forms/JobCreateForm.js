import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAllSkills, createJobPost } from "../../../../actions";
import JobForm from "./JobForm";

class JobCreateForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // selected: true
        };
    }
    
    componentDidMount() {
        this.props.fetchAllSkills();
    }

    onSubmit = (formValues) => {
        this.props.createJobPost(formValues);
        // console.log('formValues ', formValues)
    }

    render() {
        return (
            <div className="Sticky_footer_Content_wrapper">
                <h1 className="ui header teal center aligned">New Job Post</h1>

                <JobForm allSkills={this.props.allSkills} onSubmit={this.onSubmit} />
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    // console.log(state.skills.allSkills, '[mapStateToProps]')
    return {
        allSkills: state.skills.allSkills
    };
};

export default connect(mapStateToProps, { createJobPost, fetchAllSkills })(JobCreateForm);