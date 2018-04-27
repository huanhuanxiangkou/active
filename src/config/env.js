let  baseURL =  ''
if(process.env.NODE_ENV == 'development'){

  baseURL ="http://localhost:8090"
}else{

}
export {
  baseURL,
}