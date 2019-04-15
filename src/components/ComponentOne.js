import React from 'react';
import {Link} from 'react-router-dom';
import {UncontrolledTooltip as Tooltip} from 'reactstrap';

class ComponentOne extends React.Component {
    constructor (props) {
        super(props);

        this.bindMethods();

        this.state = {
            myStateValue: "Default State Value",
            myOtherStateValue: "Update to myStateValue won't change or delete this"
        }
    }

    /**
     * Bind the various handlers to make sure they are attached to this class
     */
    bindMethods () {
        this.onButtonClick = this.onButtonClick.bind(this);
    }

    /**
     * Button click handler
     * @param {SyntheticEvent} e - Look at https://reactjs.org/docs/events.html
     */
    onButtonClick (e) {
        // This is how we redirect in code
        this.props.history.push('/c2');
    }

    /**
     * Render the component based on the state and props (will be called every time state changes with setState)
     * @returns {*}
     */
    render () {
        let stateValue = this.state.myStateValue || "No value for myStateValue passed in the state";
        console.log("props",this.props,"state", this.state);

        return (
            <div className="componentOne">
                <h1>This is ComponentOne </h1>
                <div>with a bootstrap tooltip <span id="TooltipExample">here</span></div>
                <Tooltip target="TooltipExample">
                    Hello world!
                </Tooltip>
                <div>Current State: &quot;{stateValue}&quot;</div>
                <Link to="" >HOME</Link><br />
                <Link to="c2" >C2</Link><br />
                <button className="thisButton" onClick={this.onButtonClick}>Boop</button>
            </div>
        );
    }
}

export default ComponentOne;
