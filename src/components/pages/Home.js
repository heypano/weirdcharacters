import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import {Link} from "react-router-dom";
import ComponentOne from "../ComponentOne";
import ComponentTwo from "../ComponentTwo";
import {getCats, getCats2, getCats3} from "../../api/cats";
import {connect} from "react-redux";
import _ from "lodash";
import {allCatsLoaded} from "../../redux/actions/cats";


class Home extends React.Component {
    constructor(props) {
        super(props);

        this.bindMethods();
        Promise.all([
            getCats(),
            getCats2(),
            getCats3(),
        ]).then(responses => {
            const allCats = [
                ...responses[0].cats,
                ...responses[1].cats,
                ...responses[2].cats,
            ].sort((a,b) => a.name.localeCompare(b.name));

            this.props.dispatch(allCatsLoaded(allCats));
            console.log("All done", allCats);
        }).catch(error => {
            console.log("Error", error)
        });
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
        return (
            <div>
                <Jumbotron>
                    <h1 className="display-3">Cats!</h1>
                    {/*<Link to="c1" >C1</Link><br />*/}
                    {/*<Link to="c2" >C2</Link><br />*/}

                    <Cats cats={this.props.cats}/>
                </Jumbotron>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <ComponentOne/>
                        </div>
                        <div className="col">
                            <ComponentTwo/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

/**
 * Render the list of cats (stateless component)
 * @param props
 * @returns {*}
 * @constructor
 */
function Cats(props){
    const {cats} = props;
    if(cats.allCatsLoaded && cats.cats.length){
        return (<div>
            {cats.cats.map((c) => (<div key={c.name}>
                <i className="fa fa-cat"></i>&nbsp;<strong>{c.name}</strong>: {c.description}
            </div>))}
        </div>);
    } else {
        return null;
    }
}
/**
 * mapStateToProps returns the parts of the state that will be available as props
 * @param state
 * @returns {{navigation: *}}
 */
const mapStateToProps = (state) => {
    const {navigation, cats} = state;
    return {
        navigation,
        cats
    };
};

export default connect(mapStateToProps)(Home);
