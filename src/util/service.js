export function get(url){
    return fetch(url).then(onSuccess, onError);
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
