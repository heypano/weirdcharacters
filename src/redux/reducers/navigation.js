import { navBarToggle } from "../actions/navigation";

const initialState = {
    navBarOpen: true
};

export default (state = initialState, action) => {
    switch (action.type) {
        // Toggle the nav bar on/off (only matters on mobile)
        case navBarToggle().type:
            return {
                ...state,
                navBarOpen: !state.navBarOpen
            };
        default:
            return state;
    }
};
