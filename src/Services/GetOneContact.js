import http from "./BaseUrl";

export function GetOneContact(id){
    return http.get(`/list/${id}`);
}