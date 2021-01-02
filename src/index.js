import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

 var appInterceptorsRequest = axios.interceptors.request.use(request=>{
    console.log(request);
    return request;
},error=>{
console.log("i m in error from interceptors");
return Promise.reject(error);
});

axios.interceptors.request.eject(appInterceptorsRequest);

 var appInterceptorsResponse=axios.interceptors.response.use(response=>{
    console.log(response);
    return response;
},error=>{
console.log("i m in error response from interceptors");
return Promise.reject(error);
});
axios.interceptors.response.eject(appInterceptorsResponse);



ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
