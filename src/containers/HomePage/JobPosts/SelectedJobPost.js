import React from "react";
import { connect } from "react-redux";
import { fetchSelectedJobPost } from "../../../actions";

class SelectedJobPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loadingText: "Loading..."
        };
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.fetchSelectedJobPost(id);
    }

    renderLoadingText = () => {
        setTimeout(() => {
            if (this.props.selectedJobPost.loading) {
                this.setState({ loadingText: "Error fetching data :(" });
            }
        }, 3900);

        return this.state.loadingText;
    }

    renderJobPost() {
        if (this.props.selectedJobPost.loading) {
            return (
                <h1 className="ui header teal center aligned">{this.renderLoadingText()}</h1>
            );
        } else {

            if (!this.props.selectedJobPost.data) {
                return (
                    <h1 className="ui header teal center aligned">This Job post doesn't exist...</h1>
                );
            } else {
                const { title, description, skills, start_date, end_date } = this.props.selectedJobPost.data.ad;
                // skills - is Array (should be Array of strings)
                return (
                    <div>
                        <h1 className="ui header teal center aligned">{title}</h1>
                        <p><b>description:</b> {description}</p>
                        <p><b>skills:</b> \ {skills && (skills.length ? skills.map((skill, index) => { return <span key={index}> {skill.name} \ </span> }) : "No skills required.")}</p>
                        <p><b>start_date:</b> {start_date}</p>
                        <p><b>end_date:</b> {end_date}</p>
                    </div>
                );
            }
        }



        // if (this.props.selectedJobPost.status === 404) {
        //     return (
        //         <h1 className="ui header teal center aligned">This Job post doesn't exist...</h1>
        //     );
        // } else {

        //     if (!this.props.selectedJobPost.data) {
        //         return (
        //             <h1 className="ui header teal center aligned">{this.renderLoadingText()}</h1>
        //         );
        //     } else {
        //         const { title, description, skills, start_date, end_date } = this.props.selectedJobPost.data;
        //         // skills - is Array (should be Array of strings)
        //         return (
        //             <div>
        //                 <h1 className="ui header teal center aligned">{title}</h1>
        //                 <p><b>description:</b> {description}</p>
        //                 <p><b>skills:</b> \ {skills && (skills.length > 0 ? skills.map((skill, index) => { return <span key={index}> {skill.name} \ </span> }) : "No skills required.")}</p>
        //                 <p><b>start_date:</b> {start_date}</p>
        //                 <p><b>end_date:</b> {end_date}</p>
        //             </div>
        //         );
        //     }
        // }

    }

    render() {
        return (
            <div className="Sticky_footer_Content_wrapper">
                {this.renderJobPost()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state.jobPosts.selectedJobPost, '[mapStateToProps]')
    return {
        selectedJobPost: state.jobPosts.selectedJobPost
    };
};

export default connect(mapStateToProps, { fetchSelectedJobPost })(SelectedJobPost);