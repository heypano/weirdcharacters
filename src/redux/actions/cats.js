// Toggle the nav bar on/off (only matters on mobile)
export const allCatsLoaded = (response) => ({
    type: 'navigation/NAV_BAR_TOGGLE',
    payload: response
});
