import HomeView from "@/core/public/pages/home-view.component.vue";
import PageNotFound from "@/core/public/pages/page-not-found.component.vue";

export const routes = [
  {
    path: "/home-view",
    name: "Home View",
    component: HomeView,
  },
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/sign-up",
    name: "Sign Up Form",
    component: () => import("@/core/fast-scooter/pages/sign-up-form.vue")
  },
  {
    path: "/login",
    name: "Login Form",
    component: () => import("@/core/fast-scooter/pages/login-form.component.vue")
  },
  {
    path: "/users/:id",
    name: "User Profile",
    component: () => import("@/core/fast-scooter/pages/user-profile.component.vue")
  },
  {
    path: "/scooters",
    name: "Scooters Grid",
    component: () => import("@/core/fast-scooter/pages/scooters-grid.component.vue")
  },
  {
    path: "/bookings",
    name: "Bookings Table",
    component: () => import("@/core/fast-scooter/pages/bookings-table.component.vue")
  },
  {
    path: "/:pathMatch(.*)*",
    name: "Page Not Found",
    component: PageNotFound
  },
]