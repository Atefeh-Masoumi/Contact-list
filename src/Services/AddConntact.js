import http from "./BaseUrl";

export function AddOneContact(data){
    return http.post('/list', data);
}