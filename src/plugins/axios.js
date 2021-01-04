import axios from 'axios'
import Vue from 'vue'

const instance = createInstance('https://vms.bkav.com:20002/huyntd/')
// const instance = createInstance('http://10.2.27.49:2899/api/')

function createInstance (baseURL) {
  return axios.create({
    baseURL
    // headers: {
    //     'x-access-token' : token
    // },
    // withCredentials: true
  })
}
instance.interceptors.request.use(function (config) {
//   const token = localStorage.getItem('access_token')
//   config.headers['x-access-token'] = token
  return config
})

const instanceUpload = createInstanceUpload('https://vms.bkav.com:20002/huyntd/')
// const instanceUpload = createInstanceUpload('http://10.2.27.49:2899/api/')
function createInstanceUpload (baseURL) {
  return axios.create({
    baseURL
    // headers: {
    // 'x-access-token' : token,
    // 'Content-Type' : 'multipart/form-data'
    // },
    // withCredentials: true
  })
}

instanceUpload.interceptors.request.use(function (config) {
//   const token = localStorage.getItem('access_token')
//   config.headers['x-access-token'] = token
  config.headers['Content-Type'] = 'multipart/form-data'
  return config
})

const defaultInstance = axios.create()
defaultInstance.interceptors.request.use(function (config) {
  // const token = localStorage.getItem('access_token')
  // config.headers['x-access-token'] = token
  config.headers['Content-Type'] = 'application/json'
  return config
})

export default {
  install () {
    Vue.prototype.$http = instance
    Vue.prototype.$httpUpload = instanceUpload
    Vue.prototype.$defaultHttp = defaultInstance
  },
  instance: instance,        
  instanceUpload: instanceUpload,
  defaultInstance: defaultInstance
}
