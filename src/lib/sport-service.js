import axios from "axios";

class Sport {
  constructor() {

    this.sport = axios.create({
      baseURL: process.env.REACT_APP_API_URL+"/sport",
      withCredentials: true
    });
  }

  getSports() {
    return this.sport.get(`/`).then(response => response.data);
  }

  addSport(type) {
    return this.sport.post("/", {type }).then(response => response.data);
  }

  deleteSport(id) {
    return this.sport.delete(`/${id}`).then(response => response.data);
  }

}

const sport = new Sport();

export default sport;
