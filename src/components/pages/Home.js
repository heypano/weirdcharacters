import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import {Link} from "react-router-dom";
import Footer from '../Footer';
import AddTodo from '../../containers/AddTodo';
import VisibleTodoList from '../../containers/VisibleTodoList';


class Home extends React.Component {
    constructor(props) {
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
    bindMethods() {
        this.onButtonClick = this.onButtonClick.bind(this);
    }

    /**
     * Button click handler
     * @param {SyntheticEvent} e - Look at https://reactjs.org/docs/events.html
     */
    onButtonClick(e) {
        // This is how we redirect in code
        this.props.history.push('/c2');
    }

    /**
     * Render the component based on the state and props (will be called every time state changes with setState)
     * @returns {*}
     */
    render() {
        let stateValue = this.state.myStateValue || "No value for myStateValue passed in the state";
        console.log("props", this.props, "state", this.state);
        return (
            <div>
                <Jumbotron>
                    <h1 className="display-3">Hello, world!</h1>
                    <Link to="c1" >C1</Link><br />
                    <Link to="c2" >C2</Link><br />
                    <i className="fab fa-firefox"></i>
                    <p className="lead">
                        <Button color="primary">Learn More</Button>
                    </p>
                </Jumbotron>
                <div>
                    <AddTodo />
                    <VisibleTodoList />
                    <Footer />
                </div>
            </div>
        );
    }
}

export default Home;
