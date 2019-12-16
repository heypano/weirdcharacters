import { navBarToggle } from "../actions/navigation";

const initialState = {
    navBarOpen: true,
    searchValue: ""
};

export default (state = initialState, action) => {
    switch (action.type) {
        // Toggle the nav bar on/off (only matters on mobile)
        case navBarToggle().type:
            return {
                ...state,
                navBarOpen: !state.navBarOpen
            };
        case "navigation/SEARCH":
            return {
                ...state,
                searchValue: action.payload
            };
        default:
            return state;
    }
};
