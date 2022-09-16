import {axiosService} from "./axios.service";

import {urls} from "../constants/urls";

const userService = {
    getUsers:()=> axiosService.get(urls.users),
    getById:(id)=> axiosService.get(`${urls.users}/${id}`)
}
export {userService}