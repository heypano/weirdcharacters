import _ from "lodash";

export const getSymbolSearchValue = state => {
    return _.get(state, "navigation.searchValue", "");
};
