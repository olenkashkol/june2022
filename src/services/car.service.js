import {axiosService} from "./axios.service";
import {urls} from "../constants/urls";

const carService = {
    getAll: () => axiosService.get(urls.cars),
    getById: (id) => axiosService.get(`${urls.cars}/${id}`),
    create:(car)=>axiosService.post(urls.cars,car),
    deleteById:(id)=>axiosService.delete(`${urls.cars}/${id}`),
    updateById:(id,newCar)=>axiosService.put(`${urls.cars}/${id}`,newCar)
}

export {carService}