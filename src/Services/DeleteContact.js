import http from "./BaseUrl";

export function deleteOneContact(id){
    return http.delete(`/list/${id}`);
}