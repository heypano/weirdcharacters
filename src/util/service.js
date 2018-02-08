import getBaseUrl from '../api/baseUrl';

const debug = (window.location.hostname === "localhost");
const baseUrl = getBaseUrl(debug);

export function get(url){
    const urlToFetch = baseUrl + url;
    return fetch(urlToFetch).then(onSuccess, onError);
}

function onSuccess(response){
    return response.json();
}

function onError(error){
    console.log("error", error);
}

export default {
    get: get
};
