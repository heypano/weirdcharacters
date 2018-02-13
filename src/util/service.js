import getBaseUrl from '../api/baseUrl';

const debug = (window.thisEnvironmentType === "PROD");
console.log("Debug: ", debug);
const baseUrl = getBaseUrl(debug);

/**
 * Initiate a GET request
 * @param {string} url
 * @returns {Promise<Response>}
 */
function get(url){
    const urlToFetch = baseUrl + url;
    return fetch(urlToFetch).then(onSuccess, onError);
}

/**
 * Initiate a POST request
 * @param {string} url
 * @param data
 */
function post(url, data){
    const urlToFetch = baseUrl + url;
    const fetchConfig = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    };
    if(data){
        fetchConfig.body = JSON.stringify(data)
    }
    return fetch(urlToFetch, fetchConfig).then(onSuccess, onError);
}


/**
 * First step to the response here - actual response is in the next then (), response handler defined elsewhere
 * @param response
 */
function onSuccess(response){
    return response.json();
}

/**
 * Primary error handler
 * @param error
 */
function onError(error){
    console.log("error", error);
}

/**
 * Import all of service
 */
export default {
    get: get,
    post: post
};
