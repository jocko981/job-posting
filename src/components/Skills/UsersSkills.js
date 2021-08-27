import React from "react";
import { connect } from "react-redux";
import { fetchUsersSkills } from "../../actions";
import ReactApexChart from "react-apexcharts";

class UsersSkills extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // selected: true
        };
    }

    componentDidMount() {
        this.props.fetchUsersSkills();
    }

    renderAllSkills() {
        if (!this.props.usersSkills.data) {
            return (
                <div>
                    <h1 className="ui header teal center aligned">Loading...</h1>
                </div>
            );
        } else {
            const series = Object.values(this.props.usersSkills.data);
            const options = {
                labels: Object.keys(this.props.usersSkills.data)
            }

            return (
                <div>
                    <h1 className="ui header teal center aligned">All skills</h1>

                    <ReactApexChart options={options} series={series} type="pie" height={450} />
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
    // console.log(state.skills.usersSkills, '[mapStateToProps]')
    return {
        usersSkills: state.skills.usersSkills
    };
};

export default connect(mapStateToProps, { fetchUsersSkills })(UsersSkills);