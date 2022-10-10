import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";

const allService={
    getToDosAll:()=>axiosService.get(urls.todos),
    getToDoById:(id)=>axiosService.get(`${urls.todos}/${id}`),

    getAlbumsAll:()=>axiosService.get(urls.albums),
    getAlbumById:(id)=>axiosService.get(`${urls.albums}/${id}`),

    getCommentsAll:()=>axiosService.get(urls.comments),
}

export {allService}