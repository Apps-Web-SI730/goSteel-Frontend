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
    component: () => import("@/core/fast-scooter/pages/user-sign-up-form.vue")
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
  },{
    path: "/payment",//si
    name: "User Profile Payment",
    component: () => import("@/core/fast-scooter/pages/user-profile-payment.component.vue")
  },
  {
    path: "/search-scooter",
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
    component: () => import("@/core/fast-scooter/pages/scooter-purchase.vue")
  },
  {
    path: "/search-scooter/:scooterID",
    name: "Scooters Details",
    component: () => import("@/core/fast-scooter/pages/scooter-details.component.vue")
  },
  {
    path: "/favorites",
    name: "Scooters Favorites",
    component: () => import("@/core/fast-scooter/pages/scooter-favorites.component.vue")
  },
  {
    path: "/support-client",
    name: "home-contact",
    component: () => import("@/core/fast-scooter/pages/support-client.vue")
  },
  {
    path: "/home-login",//roto imposible de aplicar MUY YUCA PERO POSIBLE SI ME SOBRA TIEMPO
    name: "Home login",
    component: () => import("@/core/fast-scooter/pages/home-login.vue")
  },
  {
    path: "/about",//roto imposible de aplicar MUY YUCA PERO POSIBLE SI ME SOBRA TIEMPO
    name: "About uss",
    component: () => import("@/core/public/components/about-us.vue")
  },
  {
    path: "/",
    redirect: "/home-login",
  },
  {
    path: "/:pathMatch(.*)*",
    name: "Page Not Found",
    component: PageNotFound
  },
]