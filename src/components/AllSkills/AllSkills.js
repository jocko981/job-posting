import React from "react";
import { connect } from "react-redux";
import { fetchAllSkills } from "../../actions";

class AllSkills extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // selected: true
        };
    }

    componentDidMount() {
        this.props.fetchAllSkills();
    }

    renderAllSkills() {
        return (
            <div className="ui celled list">
                {this.props.skills.map((skill) => {
                    return (
                        <div className="item" key={skill.id}>

                            <i className="large middle aligned icon thumbtack" />

                            <div className="content">
                                {skill.name}
                            </div>

                        </div>
                    );
                })}
            </div>
        );
    }

    render() {
        return (
            <div className="Sticky_footer_Content_wrapper">
                <h1>All skills</h1>
                {this.renderAllSkills()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    // console.log(state, '[mapStateToProps]')
    return {
        skills: state.skills.data ? state.skills.data : []
    };
};

export default connect(mapStateToProps, { fetchAllSkills })(AllSkills);