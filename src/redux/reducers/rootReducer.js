import {combineReducers} from "redux";
import navigation from './navigation';
import cats from "./cats";

// https://redux.js.org/api/combinereducers
// https://redux.js.org/recipes/structuring-reducers/using-combinereducers

const rootReducer = combineReducers({
    navigation: navigation,
    cats: cats
});

export default rootReducer;
