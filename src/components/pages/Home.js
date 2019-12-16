import React from "react";
import { Jumbotron, Button } from "reactstrap";
import { Link } from "react-router-dom";
import { getCats, getCats2, getCats3 } from "../../api/cats";
import { connect } from "react-redux";
import _ from "lodash";
import { allCatsLoaded } from "../../redux/actions/cats";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.bindMethods();
    }

    /**
     * Bind the various handlers to make sure they are attached to this class
     */
    bindMethods() {}

    /**
     * Render the component based on the state and props (will be called every time state changes with setState)
     * @returns {*}
     */
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col"></div>
                </div>
            </div>
        );
    }
}

/**
 * mapStateToProps returns the parts of the state that will be available as props
 * @param state
 * @returns {{navigation: *}}
 */
const mapStateToProps = state => {
    const { navigation, cats } = state;
    return {
        navigation,
        cats
    };
};

export default connect(mapStateToProps)(Home);
