import getBaseUrl from '../api/baseUrl';

const debug = (window.thisEnvironmentType === "PROD");
console.log("Debug: ", debug);
const baseUrl = getBaseUrl(debug);

/**
 * Tries to figure out the appropriate URL to request for a service
 * If a URL starts with http, https or // we will assume it is an external URL
 */
function getURLToFetch(url){
    let externalURLRegex = /^http|^https|^\/\//;
    let urlToFetch;

    // Do not edit external URLs
    if(externalURLRegex.test(url)){
        urlToFetch = url;
    } else {
        urlToFetch = baseUrl + url;
    }

    return urlToFetch;
}

/**
 * Initiate a GET request
 * @param {string} url
 * @returns {Promise<Response>}
 */
function get(url){
    const urlToFetch = getURLToFetch(url);
    return fetch(urlToFetch).then(onSuccess, onError);
}

/**
 * Initiate a POST request
 * @param {string} url
 * @param data
 */
function post(url, data){
    const urlToFetch = getURLToFetch(url);
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
    if (response.ok) {
        return response.json();
    } else {
        return response.json().then(result => {
            let errors = result.errors;
            if (errors) {
                return Promise.reject(errors);
            } else {
                return Promise.reject(response.statusText);
            }
        });
    }
}

/**
 * Primary error handler
 * @param error
 */
function onError(error){
    return Promise.reject(error);
}

/**
 * Import all of service
 */
export default {
    get: get,
    post: post
};
