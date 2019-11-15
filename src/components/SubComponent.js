import React from "react";
import { Link } from "react-router-dom";
import { UncontrolledTooltip as Tooltip } from "reactstrap";
import { navBarToggle } from "../redux/actions/navigation";
import { connect } from "react-redux";

class SubComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    /**
     * Render the component based on the state and props (will be called every time state changes with setState)
     * @returns {*}
     */
    render() {
        const className = this.props.navigation.navBarOpen ? "" : "d-none";
        return (
            <div className={className}>
                <h1>Nav Bar</h1>
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
    const { navigation } = state;
    return {
        navigation
    };
};

export default connect(mapStateToProps)(SubComponent);
