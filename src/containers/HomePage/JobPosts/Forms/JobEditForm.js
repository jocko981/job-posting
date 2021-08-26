import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
// import { fetchUser, editUser } from "../../../actions";
import JobForm from "./JobForm";

class UserEditForm extends Component {
    componentDidMount() {
        const { id } = this.props.match.params;
        // this.props.fetchUser(id);
    }

    onSubmit = (formValues) => {
        const { id } = this.props.match.params;
        this.props.editJobPost(id, formValues);
    };


    render() {
        if (!this.props.user) {
            return (
                '123 ajde ako nema fetch user pusti Loader'
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

const mapStateToProps = (state, ownProps) => {

    return {
        // user: Object.values(state.users).find(item => item.id.toString() === ownProps.match.params.id)
    };
}

export default connect(mapStateToProps, {  })(UserEditForm);