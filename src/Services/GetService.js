import http from "./BaseUrl";

export function getCntc(){
    return http.get('/list');
}

 