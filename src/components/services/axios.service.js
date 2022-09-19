import axios from "axios";

const baseURL='https://jsonplaceholder.typicode.com';

const urls={
    users:'/users',
    posts:'/posts',
    comments:'/comments'
}
const axiosService=axios.create({baseURL})

export {axiosService,urls}