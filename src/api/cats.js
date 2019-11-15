import service from "../util/service";

export function getCats() {
    return service.get("cats");
}
export function getCats2() {
    return service.get("cats2");
}
export function getCats3() {
    return service.get("cats3");
}

export default {
    getCats: getCats,
    getCats2: getCats2,
    getCats3: getCats3
};
