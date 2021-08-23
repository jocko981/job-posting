import React, { useState } from "react";
import Select from 'react-select';

const UserRegistration = ({ skills }) => {
    const [registerValues, setRegisterValues] = useState({ email: "", password: "", password_confirmation: "" });
    const [selectedSkills, setSelectedSkills] = useState([]);
    // for User POST req we need - { ...registerValues, skills: selectedSkills }
    const [registerErr, setRegisterErr] = useState(null);

    console.log(selectedSkills, 'selectedSkills')
    console.log({...registerValues, skills: selectedSkills }, 'selectedSkills and Register values')

    const registerPasswordValidation = (registerPassword) => {
        return registerPassword.match(/^(?=.*\d).{8,}$/)
        // A be ovo treba za Registration! samo da ima min 8 chars
    }

    const handleChange = (event) => {
        const { name, value } = event.target;

        setRegisterValues((prevValue) => {
            return {
                ...prevValue,
                [name]: value
            };
        });
    }

    // NOTE: data MUST have keyValues: 'label' and 'value'
    const skillz = [{ value: 1, label: 'Project Management' }, { value: 2, label: 'JavaScript' },
    { value: 3, label: 'Php' }, { value: 4, label: 'Design' },
    { value: 5, label: 'Quality Assurance' }, { value: 6, label: 'Manager' }, { value: 7, label: 'Testing' }]

    // handle onChange event of the dropdown
    const handleChangeSkills = (event) => {
        setSelectedSkills(Array.isArray(event) ? event.map(x => x.value) : []);
    }

    const onLoginSubmit = (e) => {
        e.preventDefault();

        // axios.post('/auth/login', loginValue)
        // .then( res => console.log(res) )
        // .catch( err => console.log(err) )

        if (registerPasswordValidation(registerValues.password)) {
            setRegisterErr(null);
            console.log("Succesfully logged in test");
        } else {
            setRegisterErr("Kao neki Err ako je Password < 8 chars")
        }
    }

    return (
        <>
            <form onSubmit={onLoginSubmit} className="ui large form">
                <div className="ui stacked segment">
                    <div className="field">
                        <div className="ui left icon input">
                            <i className="user icon" />
                            <input
                                required
                                type="email"
                                name="email"
                                placeholder="E-mail address"
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="field">
                        <div className="ui left icon input">
                            <i className="lock icon" />
                            <input
                                required
                                type="password"
                                name="password"
                                placeholder="Password"
                                onChange={handleChange}
                                maxLength="199"
                            />
                        </div>
                    </div>
                    <div className="field">
                        <div className="ui left icon input">
                            <i className="lock icon" />
                            <input
                                required
                                type="password"
                                name="password_confirmation"
                                placeholder="Confirm Password"
                                onChange={handleChange}
                                maxLength="199"
                            />
                        </div>
                    </div>

                    <div className="skills_select_list">
                        {/* <div className="ui divider"></div> */}
                        <h4>Select your skills:</h4>
                        <Select
                            className="dropdown"
                            placeholder="Your skills..."
                            value={skillz.filter(obj => selectedSkills.includes(obj.value))} // set selected values
                            options={skillz} // set list of the data
                            onChange={handleChangeSkills} // assign onChange function
                            isMulti
                            isClearable
                            isSearchable
                            closeMenuOnSelect={false}
                        />
                    </div>

                    <button className="ui fluid large teal submit button">Submit</button>
                </div>
            </form>

            <div className="error_msg_backround">
                <div className="">err ako fejla POST ili sl.{registerErr}</div>
            </div>

        </>
    );
}

export default UserRegistration;