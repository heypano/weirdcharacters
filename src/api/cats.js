import service from '../util/service';

export function getCats(){
    return service.get("/cats");
}
