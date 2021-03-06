import React from "react";
import "./RegisterPage.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchAllSkills } from "../../../actions";
// components
import UserRegistration from "./UserRegistration/UserRegistration";
import CompanyRegistration from "./CompanyRegistration/CompanyRegistration";

class RegisterPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: true
        };
    }

    componentDidMount() {
        this.props.fetchAllSkills();
    }

    onClickUser = () => {
        if (this.state.selected) {
            return null
        } else {
            this.setState({ selected: true })
        };
    }
    onClickCompany = () => {
        if (!this.state.selected) {
            return null
        } else {
            this.setState({ selected: false })
        };
    }

    // ovde ce ComponentDidMount{ fetchAllSkills ---> i prikazi react-select meni, 
    // ako nema fetch data, onda: Msg: Fetching skills... }
    render() {
        return (
            <div className="Sticky_footer_Content_wrapper">
                <div className="ui middle aligned center aligned grid">

                    <div className="column">
                        <h2 className="ui teal image header">
                            {/* <img src="" alt="logo.img" className="image" /> */}
                            <div className="content">
                                Register as:
                            </div>
                        </h2>

                        <div className="ui two item pointing menu">
                            <div onClick={this.onClickUser} className={`item ${this.state.selected && 'active'}`}>
                                User
                            </div>
                            <div onClick={this.onClickCompany} className={`item ${!this.state.selected && 'active'}`}>
                                Company
                            </div>
                        </div>

                        {this.state.selected ? <UserRegistration allSkills={this.props.allSkills} /> : <CompanyRegistration />}
                        
                        <div className="ui message">
                            Go back to <Link to="/login">Login</Link>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state.skills.allSkills, '[mapStateToProps]')
    return {
        allSkills: state.skills.allSkills
    };
};

export default connect(mapStateToProps, { fetchAllSkills })(RegisterPage);