import axios from 'axios';

export default class API {

  ajax = axios.create({
    baseURL: `http://localhost:5000`,
    headers: {'CORS': true},
  });
  pokemon = {};
  types = {};
  generations = {};

  constructor(){
    
    this.pokemon.get = (id) => {return this.getResource('pokemon/', id)};
    this.pokemon.getAll = () => {return this.getResource('pokemon/')};

    this.types.get = (id) => {return this.getResource('types/', id)};
    this.types.getAll = () => {return this.getResource('types/')};
    
    this.generations.get = (id) => {return this.getResource('generations/', id)};
    this.generations.getAll = () => {return this.getResource('generations/')};
  }

  getResource = (endpoint, id = undefined) => {
    if(id){
      return this.get(endpoint, { id: id });
    }
    return this.get(endpoint);
  }

  get = (endpoint, data = {}) => {
    return axios.get('http://localhost:5000/' + endpoint,  { params: data });
  }
}

