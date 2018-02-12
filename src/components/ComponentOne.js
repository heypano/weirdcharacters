import React from 'react';

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
        // We do not need to pass the properties we are not changing
        this.setState({
            myStateValue: "New State Value: " + Math.random()
        });
    }

    /**
     * Render the component based on the state and props (will be called every time state changes with setState)
     * @returns {*}
     */
    render () {
        let valuePassedAsAProp = this.props.valuePassedAsAProp || "No value for valuePassedAsAProp passed in the props";
        let stateValue = this.state.myStateValue || "No value for myStateValue passed in the state";
        console.log(this.props, this.state);

        return (
            <div className="componentOne">
                <h1>This is ComponentOne</h1>
                <div>Current State: "{stateValue}"</div>
                <button className="thisButton" onClick={this.onButtonClick}>{valuePassedAsAProp}</button>
            </div>
        );
    }
}

export default ComponentOne;
