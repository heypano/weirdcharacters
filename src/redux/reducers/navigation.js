const initialState = {
    navBarOpen: true
};

export default (state = initialState, action) => {
    switch(action.type){
        // Toggle the nav bar on/off (only matters on mobile)
        case "navigation/NAV_BAR_TOGGLE":
            return {
                navBarOpen: !state.navBarOpen
            };
        default:
            return state;
    }
}
