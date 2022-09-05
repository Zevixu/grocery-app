import axios from 'axios'
import { Message, Loading } from 'element-ui';
import router from './router'

let loading  //define variable loading

function startLoading() {     //Using Element loading-start
    loading = Loading.service({
        lock: true,
        text: '加载中...',
        background: 'rgba(0, 0, 0, 0.7)'
    })
}
function endLoading() {
    loading.close()
}

//request interceptor, set header
axios.interceptors.request.use(config => {
    // loading
    startLoading()
    if (localStorage.eleToken)
        config.headers.Authorization = localStorage.eleToken
    return config
}, error => {
    return Promise.reject(error)
})

//response interceptor,deal with 401(token expiration)
axios.interceptors.response.use(response => {
    endLoading()
    return response
}, error => {
    // error promt
    endLoading()
    Message.error(error.response.data)

    const { status } = error.response
    if (status == 401) {
        Message.error('The token value is invalid, please log in again!')
        // delete token
        localStorage.removeItem('eleToken')

        // redirecting
        router.push('/login')
    }

    return Promise.reject(error)
})

export default axios