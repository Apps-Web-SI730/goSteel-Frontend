import http from "@/core/shared/services/http-common";

class BookingsApiService {

  getAllBookings() {
    return http.get("/bookings");
  }

  getBookingById(bookingId) {
    return http.get(`/bookings/${bookingId}`);
  }

  addBooking(booking) {
    return http.post("/bookings", booking);
  }

  updateBooking(booking) {
    return http.put(`/bookings/${booking.id}`, booking);
  }

  deleteBooking(bookingId) {
    return http.delete(`/bookings/${bookingId}`);
  }

}

export default new BookingsApiService();