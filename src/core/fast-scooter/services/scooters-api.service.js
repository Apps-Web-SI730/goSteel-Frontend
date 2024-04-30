import http from "@/core/shared/services/http-common";

class ScootersApiService {

  getAllScooters() {
    return http.get("/scooters");
  }

  getScooterById(scooterId) {
    return http.get(`/scooters/${scooterId}`);
  }

  addScooter(scooter) {
    return http.post("/scooters", scooter);
  }

  updateScooter(scooter) {
    return http.put(`/scooters/${scooter.id}`, scooter);
  }

  deleteScooter(scooterId) {
    return http.delete(`/scooters/${scooterId}`);
  }

}

export default new ScootersApiService();
