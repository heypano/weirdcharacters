import React from "react";
import { Link } from "react-router-dom";
import { UncontrolledTooltip as Tooltip } from "reactstrap";
import { navBarToggle } from "../redux/actions/navigation";
import { connect } from "react-redux";
import SubComponent from "./SubComponent";

class ComponentOne extends React.Component {
    constructor(props) {
        super(props);

        this.bindMethods();
    }

    /**
     * Bind the various handlers to make sure they are attached to this class
     */
    bindMethods() {
        this.onButtonClick = this.onButtonClick.bind(this);
    }

    /**
     * Button click handler
     * @param {SyntheticEvent} e - Look at https://reactjs.org/docs/events.html
     */
    onButtonClick(e) {
        // This is how we redirect in code
        this.props.dispatch(navBarToggle());
    }

    /**
     * Render the component based on the state and props (will be called every time state changes with setState)
     * @returns {*}
     */
    render() {
        return (
            <div className="componentOne">
                <h1>
                    Nav bar is{" "}
                    {this.props.navigation.navBarOpen ? "Open" : "Closed"}{" "}
                </h1>
                <div>
                    with a bootstrap tooltip{" "}
                    <span id="TooltipExample">here</span>
                </div>
                <Tooltip target="TooltipExample">Hello world!</Tooltip>
                <Link to="">HOME</Link>
                <br />
                <Link to="c2">C2</Link>
                <br />
                <button className="thisButton" onClick={this.onButtonClick}>
                    Toggle thing in subcomponent{" "}
                </button>
                <SubComponent />
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

export default connect(mapStateToProps)(ComponentOne);
