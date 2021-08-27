import React from "react";
import { Field, formValues, reduxForm } from "redux-form";
import Select from 'react-select';

class JobPostForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // selected: true
            selectedSkills: []
        };
        let skillz = [];
        // NOTE: data for react-select MUST have keyValues: 'label' and 'value'
        this.renderSkillsDropdown = () => {
            if (!this.props.allSkills.data) {
                console.log(props.allSkills)
                return (
                    <div>
                        <h3 className="ui header teal center aligned">Loading...</h3>
                    </div>
                );
            } else {
                if (this.props.allSkills.data.length > 0) {
                    skillz = this.props.allSkills.data.map(item => {
                        return { value: item.id, label: item.name }
                    });
                } else {
                    const skillzRezerva = [{ id: 1, name: 'php' }, { id: 2, name: 'laravel' },
                    { id: 3, name: 'javascript' }, { id: 4, name: 'java' },
                    { id: 5, name: 'nodejs' }, { id: 6, name: 'python' }]
    
                    skillz = skillzRezerva.map(item => {
                        return { value: item.id, label: item.name }
                    });
                }
    
            }
    
            return (
                <div className="skills_select_list">
                    {/* <div className="ui divider"></div> */}
                    <h4>Select your skills:</h4>
                    <Select
                        className="dropdown"
                        placeholder="Your skills..."
                        value={skillz.filter(obj => this.state.selectedSkills.includes(obj.value))} // set selected values
                        options={skillz} // set list of the data
                        onChange={this.handleChangeSkills} // assign onChange function
                        isMulti
                        isClearable
                        isSearchable
                        closeMenuOnSelect={false}
                    />
                </div>
            );
        }
        
    }

    // handle onChange event of the dropdown
    handleChangeSkills = (event) => {
        this.setState({
            selectedSkills: Array.isArray(event) ? event.map(x => x.value) : []
          });
        // this.setState.selectedSkills(Array.isArray(event) ? event.map(x => x.value) : []);
    }

    // REDUX-FORM CODE -->
    renderError({ error, submitFailed }) {
        if (submitFailed && error) {
            return (
                <div className="ui error message">
                    <div className="">{error}</div>
                </div>
            );
        }
    }

    renderInputTitle = ({ input, label, meta, type }) => {
        const className = `field ${meta.error && meta.touched ? "error" : ""}`;

        return (
            <div className={className}>
            <label>{label}</label>
                <input {...input} type={type} autoComplete="off" />
                <div>{this.renderError(meta)}</div>
            </div>
        );
    }
    renderInputDescription = ({ input, label, meta, type }) => {
        const className = `field ${meta.error && meta.submitFailed ? "error" : ""}`;

        return (
            <div className={className}>
            <label>{label}</label>
                <textarea {...input} type={type} autoComplete="off" />
                <div>{this.renderError(meta)}</div>
            </div>
        );
    }

    onSubmit = (formValues) => {
        this.props.onSubmit(formValues);

    }
    
    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">

                <Field name="title" component={this.renderInputTitle} label="Enter job title: " />
                <Field name="description" component={this.renderInputDescription} label="Enter job description: " />
                {this.renderSkillsDropdown()}

                {/* <Field name="date_start_&_end" component={''} label="Required skills: " /> */}

                <button className="ui button primary">Submit</button>
            </form>
        );
    }
    
}

const validate = (formValues) => {
    const errors = {};
    const msg = "You must enter this.";

    if (!formValues.title) {
        errors.title = msg;
    }

    if (!formValues.description) {
        errors.description = msg;
    }
    // if (formValues.description && formValues.description < 30) {
    //     errors.description = "Job description must have more then 30 characters.";
    // }

    return errors;
}


export default reduxForm({ 
    form: "jobForm",
    validate: validate
})(JobPostForm);