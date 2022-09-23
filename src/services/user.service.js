import {axiosService} from "./axios.service";

import {urls} from "./axios.service"

const userService={
    getAll:()=>axiosService.get(urls.users),
    getById:(id)=>axiosService.get(`${urls.users}/${id}`),
    create:(user)=>axiosService.post(urls.users,user)
}

export {userService}