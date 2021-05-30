/** @format */

import http from "../http-common";

class CakeDataService {
  getAll(page = 0) {
    return http.get(`?page=${page}`);
  }

  get(id) {
    return http.get(`/id/${id}`);
  }

  find(query, by = "name", page = 0) {
    return http.get(`?${by}=${query}&page=${page}`);
  }

  // createCake(data) {
  //   return http.post("/admin", data);
  // }

  updateCake(data) {
    return http.put("/admin", data);
  }

  // deleteCake(id, adminId) {
  //   return http.delete(`/admin?id=${id}`, { data: { admin_id: adminId } });
  // }

  getFlavors(id) {
    return http.get(`/flavors`);
  }
}

export default new CakeDataService();
