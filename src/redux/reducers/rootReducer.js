import {combineReducers} from "redux";
import navigation from './navigation';

// https://redux.js.org/api/combinereducers
// https://redux.js.org/recipes/structuring-reducers/using-combinereducers

const rootReducer = combineReducers({
    navigation: navigation
});

export default rootReducer;
