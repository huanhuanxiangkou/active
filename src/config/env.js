let  baseURL =  ''
if(process.env.NODE_ENV == 'development'){

  baseURL ="http://192.168.199.133:8080"
}else{

}
export {
  baseURL,
}