/**
 *
 * @param {Boolean} debug - is this a debug
 */
export default function getBaseUrl(debug){
    // Could also do this based on GET param
    if (debug) {
        return "http://localhost:3001/";
    } else {
        return "/";
    }
}
