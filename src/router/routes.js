import HomeView from "@/core/public/pages/home-view.component.vue";
import PageNotFound from "@/core/public/pages/page-not-found.component.vue";

export const routes = [
  {
    path: "/home",
    name: "Home View",
    component: HomeView,
  },

  {
    path: "/sign-up",
    name: "Sign Up Form",
    component: () => import("@/core/fast-scooter/pages/user-sign-up-form.component.vue")
  },
  {
    path: "/login",
    name: "Login Form",
    component: () => import("@/core/fast-scooter/pages/user-login-form.component.vue")
  },
  {
    path: "/user/profile",
    name: "User Profile",
    component: () => import("@/core/fast-scooter/pages/user-profile.component.vue")
  },
  {
    path: "/user/profile/update",
    name: "User Profile Update",
    component: () => import("@/core/fast-scooter/pages/user-profile-update.component.vue")
  },
  {
    path: "/user/profile/payment",
    name: "User Profile Payment",
    component: () => import("@/core/fast-scooter/pages/user-profile-payment.component.vue")
  },

  {
    path: "/scooter-search",
    name: "Search Scooter",
    component: () => import("@/core/fast-scooter/pages/scooter-search.component.vue")
  },
  {
    path: "/scooter-add",
    name: "Add a Scooter",
    component: () => import("@/core/fast-scooter/pages/scooter-add.component.vue")
  },
  {
    path: "/scooter-purchase",
    name: "Purchase a Scooter",
    component: () => import("@/core/fast-scooter/pages/scooter-purchase.component.vue")
  },

  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/:pathMatch(.*)*",
    name: "Page Not Found",
    component: PageNotFound
  },
]