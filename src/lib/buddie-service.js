import axios from "axios";

class Buddie {
  constructor() {

    this.buddie = axios.create({
      baseURL: process.env.REACT_APP_API_URL+"/buddies",
      withCredentials: true
    });
  }

  getBuddies() {
    return this.buddie.get(`/`).then(response => response.data);
  }

  addBuddie(userId, buddieId) {
    console.log('SERVICE ', {userId, buddieId})
    return this.buddie.post("/", {userId, buddieId }).then(response => response.data);
  }

  deleteBuddie(id) {
    return this.buddie.delete(`/${id}`).then(response => response.data);
  }

}

const buddie = new Buddie();

export default buddie;
