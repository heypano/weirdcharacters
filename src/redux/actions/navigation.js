// Toggle the nav bar on/off (only matters on mobile)
export const navBarToggle = () => ({
    type: "navigation/NAV_BAR_TOGGLE"
});

// Search for a symbol
export const symbolSearch = value => ({
    type: "navigation/SEARCH",
    payload: value
});
