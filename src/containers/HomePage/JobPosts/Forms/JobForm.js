import React from "react";
import { Field, formValues, reduxForm } from "redux-form";
import Select from 'react-select';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class JobPostForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // selected: true
            selectedSkills: [],
            startDate: null,
            endDate: null
        };

    }

    // NOTE: data for react-select MUST have keyValues: 'label' and 'value'
    renderSkillsDropdown = () => {
        let skillz = [{ id: 1, name: 'php' }, { id: 2, name: 'laravel' },
        { id: 3, name: 'javascript' }, { id: 4, name: 'java' },
        { id: 5, name: 'nodejs' }, { id: 6, name: 'python' }, { id: 7, name: 'REZERVA' }];

        if (this.props.allSkills.data && this.props.allSkills.data.length > 0) {
            skillz = this.props.allSkills.data.map(item => {
                return { value: item.id, label: item.name }
            });
        }

        return (
            <div className="skills_select_list">
                {/* <div className="ui divider"></div> */}
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
            </div>
        );
    }
    // handle onChange event of the dropdown
    handleChangeSkills = (event) => {
        this.setState({
            selectedSkills: Array.isArray(event) ? event.map(x => x.value) : []
        });
    }

    renderStartEndDate = () => {
        return (
            <div className="two fields">
                <div className="field">
                    <DatePicker
                        placeholderText="Start date"
                        selected={this.state.startDate}
                        onChange={date => this.setState({ startDate: date })}
                        // this.setState({ startDate: date })
                        dateFormat="dd/MM/yyyy"
                        minDate={new Date()}
                    />
                </div>
                <div className="field">
                    <DatePicker
                        placeholderText="End date"
                        selected={this.state.endDate}
                        onChange={date => this.setState({ endDate: date })}
                        dateFormat="dd/MM/yyyy"
                        minDate={new Date()}
                    />
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
        if (this.state.startDate && this.state.endDate) {
            const dd_start = String(this.state.startDate.getDate()).padStart(2, '0');
            const mm_start = String(this.state.startDate.getMonth() + 1).padStart(2, '0'); //January is 0!
            const yyyy_start = this.state.startDate.getFullYear();

            const dd_end = String(this.state.endDate.getDate()).padStart(2, '0');
            const mm_end = String(this.state.endDate.getMonth() + 1).padStart(2, '0'); //January is 0!
            const yyyy_end = this.state.endDate.getFullYear();

            const job_start = dd_start + '-' + mm_start + '-' + yyyy_start;
            const job_end = dd_end + '-' + mm_end + '-' + yyyy_end;

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

            const job_start = dd_start + '-' + mm_start + '-' + yyyy_start;

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

            job_start = dd_start + '-' + mm_start + '-' + yyyy_start;
            const job_end = dd_end + '-' + mm_end + '-' + yyyy_end;

            this.props.onSubmit({
                ...formValues,
                skills: this.state.selectedSkills,
                start_date: job_start,
                end_date: job_end
            });
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