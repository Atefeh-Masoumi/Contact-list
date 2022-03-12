import http from "./BaseUrl";

export function PutOneContact(id, data){
    return http.put(`/list/${id}`, data);
}