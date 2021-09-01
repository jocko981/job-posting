import React from "react";
import { Field, formValues, reduxForm } from "redux-form";
import Select from 'react-select';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import _ from "lodash";

class JobPostForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // selected: true
            selectedSkills: props.selectedJobPost.ad ? props.selectedJobPost.ad.skills.map(item => { return item.id }) : [],
            startDate: null,
            endDate: null,
            selectedSkillsError: null
        };
        console.log(props.selectedJobPost.ad, props.allSkills, ' props ')
    }

    // NOTE: data for react-select MUST have keyValues: 'label' and 'value'
    renderSkillsDropdown = () => {
        let skillz = [{ value: 1, label: 'php' }, { value: 2, label: 'laravel' },
        { value: 3, label: 'javascript' }, { value: 4, label: 'java' },
        { value: 5, label: 'nodejs' }, { value: 6, label: 'python' }, { value: 7, label: 'REZERVA' }];

        if (this.props.allSkills.data && this.props.allSkills.data.length > 0) {
            skillz = this.props.allSkills.data.map(item => {
                return { value: item.id, label: item.name }
            });
        }

        return (
            <div className="skills_select_list">
                {/* <div className="ui divider"></div> */}
                <div className="field">
                    <h4>Select required skills:</h4>
                    <Select
                        className="dropdown"
                        placeholder="Skills"
                        value={skillz.filter(obj => this.state.selectedSkills.includes(obj.value))} // set selected values
                        options={skillz} // set list of the data
                        onChange={this.handleChangeSkills} // assign onChange function
                        isMulti
                        isClearable
                        isSearchable
                        closeMenuOnSelect={false}
                    />
                    <div>
                        <div className="ui error message">
                            {this.state.selectedSkillsError}
                        </div>
                    </div>

                </div>
            </div>
        );
    }
    // handle onChange event of the dropdown
    handleChangeSkills = (event) => {
        this.setState({
            selectedSkills: Array.isArray(event) ? event.map(x => x.value) : [],
            selectedSkillsError: null
        });

    }

    renderStartEndDate = () => {
        return (
            <div>
                <h4>Date:</h4>
                <div className="two fields">
                    <div className="field">
                        <DatePicker
                            placeholderText="Start date"
                            selected={this.state.startDate}
                            onChange={date => this.setState({ startDate: date })}
                            // this.setState({ startDate: date })
                            dateFormat="dd/MM/yyyy"
                            minDate={new Date()}
                            isClearable
                        />
                    </div>
                    <div className="field">
                        <DatePicker
                            placeholderText="End date"
                            selected={this.state.endDate}
                            onChange={date => this.setState({ endDate: date })}
                            dateFormat="dd/MM/yyyy"
                            minDate={new Date()}
                            isClearable
                        />
                    </div>
                </div>
            </div>
        );
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
                <textarea {...input} type={type} autoComplete="off" maxLength="3000" />
                <div>{this.renderError(meta)}</div>
            </div>
        );
    }

    onSubmit = (formValues) => {
        if (!this.state.selectedSkills.length) {
            this.setState({ selectedSkillsError: "Your job must require at least 1 skill." })
        } else {
            this.setState({ selectedSkillsError: null })

            if (this.state.startDate && this.state.endDate) {
                const dd_start = String(this.state.startDate.getDate()).padStart(2, '0');
                const mm_start = String(this.state.startDate.getMonth() + 1).padStart(2, '0'); //January is 0!
                const yyyy_start = this.state.startDate.getFullYear();

                const dd_end = String(this.state.endDate.getDate()).padStart(2, '0');
                const mm_end = String(this.state.endDate.getMonth() + 1).padStart(2, '0'); //January is 0!
                const yyyy_end = this.state.endDate.getFullYear();

                const job_start = yyyy_start + '-' + mm_start + '-' + dd_start;
                const job_end = yyyy_end + '-' + mm_end + '-' + dd_end;

                this.props.onSubmit({
                    ...formValues,
                    skills: this.state.selectedSkills,
                    start_date: job_start,
                    end_date: job_end
                });
            } else if (this.state.startDate) {
                const dd_start = String(this.state.startDate.getDate()).padStart(2, '0');
                const mm_start = String(this.state.startDate.getMonth() + 1).padStart(2, '0'); //January is 0!
                const yyyy_start = this.state.startDate.getFullYear();

                const job_start = yyyy_start + '-' + mm_start + '-' + dd_start;

                this.props.onSubmit({
                    ...formValues,
                    skills: this.state.selectedSkills,
                    start_date: job_start,
                    end_date: this.state.endDate
                });
            } else if (this.state.endDate) {
                let job_start = new Date();

                const dd_start = String(job_start.getDate()).padStart(2, '0');
                const mm_start = String(job_start.getMonth() + 1).padStart(2, '0'); //January is 0!
                const yyyy_start = job_start.getFullYear();

                const dd_end = String(this.state.endDate.getDate()).padStart(2, '0');
                const mm_end = String(this.state.endDate.getMonth() + 1).padStart(2, '0'); //January is 0!
                const yyyy_end = this.state.endDate.getFullYear();

                job_start = yyyy_start + '-' + mm_start + '-' + dd_start;
                const job_end = yyyy_end + '-' + mm_end + '-' + dd_end;

                this.props.onSubmit({
                    ...formValues,
                    skills: this.state.selectedSkills,
                    start_date: job_start,
                    end_date: job_end
                });
            } else {

                this.props.onSubmit({
                    ...formValues,
                    skills: this.state.selectedSkills,
                    start_date: this.state.startDate,
                    end_date: this.state.endDate
                });
            }

        }

    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">

                <Field name="title" component={this.renderInputTitle} label="Enter job title: " />
                <Field name="description" component={this.renderInputDescription} label="Enter job description: " />

                {this.renderSkillsDropdown()}
                {this.renderStartEndDate()}

                {/* <Field name="date_start_&_end" component={''} label="Required skills: " /> */}

                <button className="ui button primary">Submit Job Post</button>
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
    } else if (formValues.description.length < 10) {
        errors.description = "Must be at leat 10 characters long.";
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