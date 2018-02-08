/**
 *
 * @param {Boolean} debug - is this a debug
 */
export default function getBaseUrl(debug){
    if (debug) {
        return "http://localhost:3001/";
    } else {
        return "/";
    }
}
