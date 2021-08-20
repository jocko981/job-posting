import React from "react";

const Footer = () => {

    return (
        <div className="Footer_div">
            <footer>
                <div className="ui inverted segment">
                    <div className="ui container">

                        <div className="ui stackable grid">

                            <div className="three wide column">
                                <h4 className="">Network</h4>
                                <div className="ui link list">
                                    <a>Neki link 3</a> <br />
                                    <a>Neki link 6</a> <br />
                                    <a>Neki link 9</a>
                                </div>
                            </div>


                            <div className="three wide column">
                                <h4 className="">Network</h4>
                                <div className="ui link list">
                                    <a>Neki link 33</a> <br />
                                    <a>Neki link 666</a> <br />
                                    <a>Neki link 999</a>
                                </div>
                            </div>

                            <div className="five wide right floated column">
                                <h4>Help Preserve This Project</h4>
                                <p> Support for the continued development of Semantic UI comes directly from the community.</p>
                                <button type="submit" className="ui inverted blue button">Donate Today</button>
                            </div>

                        </div>

                    </div>

                    {/* <div class="ui inverted divider"></div> */}
                    <h4 className="ui horizontal inverted divider">Job Posts</h4> {/* this was className: 'section' devider */}

                    <div className="ui center aligned inverted container">
                        <div className="ui horizontal small divided link list">
                            <a className="" href="https://semantic-ui.com/" target="_blank">Free &amp; Open Source - Semantic UI CSS</a>
                        </div>
                    </div>

                    <div className="ui horizontal inverted divider"> </div> {/* this was className: 'section' devider */}
                </div>
            </footer>
        </div>
    );
}

export default Footer;