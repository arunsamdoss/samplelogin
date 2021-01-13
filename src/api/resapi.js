import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)


const service = axios.create({

})


service.interceptors.request.use(
    request => request,
    error => {
        return Promise.reject(error)
    }
)

service.interceptors.response.use(
    response => response,
    error => {
        return Promise.reject(error)
    }
)

export default service