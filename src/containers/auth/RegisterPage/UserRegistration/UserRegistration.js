import React, { useState } from "react";
import Select from 'react-select';
import { userRegistration } from "../../../../helpers/auth";

const UserRegistration = ({ allSkills }) => {
    const [registerValues, setRegisterValues] = useState({ name: "", email: "", password: "", password_confirmation: "" });
    const [selectedSkills, setSelectedSkills] = useState([]);
    const [registerErr, setRegisterErr] = useState(null);

    const registerPasswordValidation = (registerPassword) => {
        return registerPassword.match(/^(?=.*\d).{8,}$/)
        // A be ovo treba za Registration! samo da ima min 8 chars
    }

    const handleChangeInputs = (event) => {
        const { name, value } = event.target;

        setRegisterValues((prevValue) => {
            return {
                ...prevValue,
                [name]: value
            };
        });
    }

    // NOTE: data for react-select MUST have keyValues: 'label' and 'value'
    let skillz = [];
    const renderSkillsDropdown = () => {
        if (!allSkills.data) {
            return (
                <div>
                    <h3 className="ui header teal center aligned">Loading...</h3>
                </div>
            );
        } else {
            if (allSkills.data.length > 0) {
                skillz = allSkills.data.map(item => {
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
                    value={skillz.filter(obj => selectedSkills.includes(obj.value))} // set selected values
                    options={skillz} // set list of the data
                    onChange={handleChangeSkills} // assign onChange function
                    isMulti
                    isClearable
                    isSearchable
                    closeMenuOnSelect={false}
                />
            </div>
        );

    }

    // handle onChange event of the dropdown
    const handleChangeSkills = (event) => {
        setSelectedSkills(Array.isArray(event) ? event.map(x => x.value) : []);
    }

    const onLoginSubmit = (e) => {
        e.preventDefault();
        if (selectedSkills.length < 1) {
            setRegisterErr("You need to possess at least one skill")
        } else if (registerPasswordValidation(registerValues.password)) {
            // for User POST req we need - { ...registerValues, skills: selectedSkills }
            userRegistration({ ...registerValues, allSkills: selectedSkills });
            setRegisterErr(null);
        } else {
            setRegisterErr("Check if you typed everything well, password must be 8 chars")
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
                                type="text"
                                name="name"
                                placeholder="Your name"
                                onChange={handleChangeInputs}
                                maxLength="199"
                            />
                        </div>
                    </div>

                    <div className="field">
                        <div className="ui left icon input">
                            <i className="envelope icon" />
                            <input
                                required
                                type="email"
                                name="email"
                                placeholder="E-mail address"
                                onChange={handleChangeInputs}
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
                                name="password"
                                placeholder="Password"
                                onChange={handleChangeInputs}
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
                                onChange={handleChangeInputs}
                                maxLength="199"
                            />
                        </div>
                    </div>

                    {renderSkillsDropdown()}

                    <button className="ui fluid large teal submit button">Submit</button>
                </div>
            </form>

            <div className="error_msg_backround">
                <div className="">{registerErr}</div>
            </div>

        </>
    );
}

export default UserRegistration;