import { allCatsLoaded } from "../actions/cats";

const initialState = {
    allCatsLoaded: false,
    cats: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        // Toggle the nav bar on/off (only matters on mobile)
        case allCatsLoaded().type:
            return {
                ...state,
                allCatsLoaded: true,
                cats: action.payload
            };
        default:
            return state;
    }
};
