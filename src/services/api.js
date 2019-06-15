import axios from 'axios'

const api = axios.create({
  //  baseURL: 'https://rocketseat-node.herokuapp.com/api'
 // baseURL: 'http://192.168.10.102:8080/lancamentos'
 baseURL: 'http://192.168.10.103:3333' 
 
});

export default api;