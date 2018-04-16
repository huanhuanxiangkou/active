let  baseURL =  ''
if(process.env.NODE_ENV == 'development'){

  baseURL ="http://172.17.19.239:8080"
}else{

}
export {
  baseURL,
}