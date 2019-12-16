// Toggle the nav bar on/off (only matters on mobile)
export const navBarToggle = () => ({
    type: "navigation/NAV_BAR_TOGGLE"
});

// Search for a symbol
export const symbolSearch = (value, history) => {
    history.push(`/${encodeURIComponent(value)}`);
    return {
        type: "navigation/SEARCH",
        payload: value
    };
};
