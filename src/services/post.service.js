import {axiosService} from "./axios.service";
import {urls} from "./axios.service"

const postService={
    getById:(userId)=>axiosService.get(`${urls.posts}/?userId=${userId}`)
}

export {postService}