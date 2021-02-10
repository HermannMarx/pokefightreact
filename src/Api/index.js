import axios from "axios";

const baseUrl = "https://wbsgroup4pokefight.herokuapp.com/pokemon";

const Api = {
  getAll: () => axios.get(baseUrl),
  getById: (id) => axios.get(`${baseUrl}/${id}`),
  getInfo: (id, info) => axios.get(`${baseUrl}/${id}/${info}`),
};

export default Api;
