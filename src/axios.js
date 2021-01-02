import axios from 'axios';


const instance = axios.create({
baseURL :"https://jsonplaceholder.typicode.com"
});

instance.interceptors.request.use(request=>{
 console.log("from axios.js" );
    console.log(request);
    return request;
},error=>{
console.log("i m in axios.js error from interceptors");
return Promise.reject(error);
});

instance.defaults.headers.common['Authorization']='AUTH TOKEN1';

export default instance;