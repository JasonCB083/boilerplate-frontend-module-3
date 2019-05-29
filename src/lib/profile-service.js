import axios from "axios";
const baseURL = process.env.REACT_APP_API_URL;

class Profile {
  constructor() {
    this.profile = axios.create({
      baseURL: process.env.REACT_APP_API_URL+"/user",

      withCredentials: true
    });
  }

  getAll() {
    return this.profile.get("/").then(response => response.data);
  }

  getOne(id) {
    return this.profile.get(`/${id}`).then(response => response.data);
  }

  editOne(username, email, city, image, id) {
    return this.profile.put('/edit',{ username, email, city, image, id}).then(response => response.data);
  }

  imageUpload(file) {
    return this.profile.post('/edit', file)
    .then(({data}) => data)
  }
}
const profile = new Profile();

export default profile;
