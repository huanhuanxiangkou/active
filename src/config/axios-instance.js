import axios from 'axios'
import { baseURL } from '@/config/env'

let baseAxios = axios.create({
  baseURL: baseURL,
  changeOrigin:true
});
// baseAxios.interceptors.request.use(config => {

//   config.headers.Authorization = getLocalStore(CONNEXT_PAAS_TOKEN);

//     return config;
//   },
//   err => {
//     return Promise.reject(err);
//   });
export {
  baseAxios,
}
