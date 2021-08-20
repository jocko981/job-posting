import React, { useEffect, useState } from "react";
import Select from 'react-select';

const SkillsDropdown = ({ skills }) => {
    const [selectedSkills, setSelectedSkills] = useState([]);
    console.log(selectedSkills)
    console.log(skills)

    // NOTE: data MUST have keyValues: 'label' and 'value'
    const skillz = [{ value: 1, label: 'Project Management' }, { value: 2, label: 'JavaScript' },
    { value: 3, label: 'Php' }, { value: 4, label: 'Design' },
    { value: 5, label: 'Quality Assurance' }, { value: 6, label: 'Manager' }, { value: 7, label: 'Testing' }]

    useEffect(() => {
        //  od skills props
    },[])
    
    // handle onChange event of the dropdown
    const handleChangeSkills = (event) => {
        setSelectedSkills(Array.isArray(event) ? event.map(x => x.value) : []);
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

            {/* {selectedSkills && 
            <div style={{ marginTop: 20, lineHeight: '25px' }}>
                <div><b>Selected Value: </b> {JSON.stringify(selectedSkills, null, 2)}</div>
            </div>} */}

        </div>
    );
}

export default SkillsDropdown;