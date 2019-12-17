/**
 * Decode the html entities in a string
 * @param str
 * @returns {*}
 */
export const decode = str => {
    return str.replace(/&#(\d+);/g, (match, dec) => {
        return String.fromCharCode(dec);
    });
};
