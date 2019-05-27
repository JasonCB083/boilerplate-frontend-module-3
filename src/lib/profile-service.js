import axios from "axios";

class Profile {
  constructor() {
    this.profile = axios.create({
      baseURL: "http://localhost:5000/user",
      withCredentials: true
    });
  }

  getAll() {
    return this.profile.get("/").then(response => response.data);
  }

  getOne(id) {
    return this.profile.get(`/${id}`).then(response => response.data);
  }

  editOne(username, email, city,  id) {
    return this.profile.put('/edit',{ username, email, city, id}).then(response => response.data);
  }

  // imageUpload(file) {
  //   return this.profile.post('/edit', file)
  //   .then(({data}) => data)
  // }
}
const profile = new Profile();

export default profile;
