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
        if (!this.props.skills.data) {
            return (
                <div>
                    <h1 className="ui header teal center aligned">Loading...</h1>
                    {console.log('h1 se render')}
                </div>
            );
        } else {
            return (
                <div>
                    <h1 className="ui header teal center aligned">All skills</h1>

                    <div className="ui celled list">
                        {this.props.skills.data.map((skill) => {
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
                </div>
            );
        }
    }

    render() {
        return (
            <div className="Sticky_footer_Content_wrapper">
                {this.renderAllSkills()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    // console.log(state.skills, '[mapStateToProps]')
    return {
        skills: state.skills ? state.skills : []
    };
};

export default connect(mapStateToProps, { fetchAllSkills })(AllSkills);