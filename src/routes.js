import HomePage from "./components/pages/HomePage.vue";
import LoginPage from "./components/pages/LoginPage.vue";
import ProductPage from "./components/pages/ProductPage.vue";
import SignupPage from "./components/pages/SignupPage.vue";
import DetailPage from "./components/pages/DetailPage.vue";
import UserPage from "./components/pages/UserPage.vue";
import FavoriteProduct from "./components/user/FavoriteProduct.vue";
import Cart from "./components/user/Cart.vue";
import OrderConfirmation from "./components/user/OrderConfirmation.vue";
import Cookies from "js-cookie";
import { store } from "./store/index";

const checkAuth = () => {
    const jwtCookie = Cookies.get("jwt");
    const expirationDate = Cookies.get("tokenExpirationDate");
    const userId = Cookies.get("UID");

    if (jwtCookie) {
        if (new Date().getTime() < +expirationDate) {
            store.commit("auth/setToken", {
                idToken: jwtCookie,
                expiresIn: expirationDate,
            });
            store.dispatch("auth/getUser", userId);
            return true;
        } else {
            store.commit("auth/setUserLogut");
            return false;
        }
    } else {
        return false;
    }
};

export const routes = [
    {
        path: "/",
        name: "homePage",
        component: HomePage,
        beforeEnter: () => {
            checkAuth;
        },
    },
    { path: "/signup", name: "signup", component: SignupPage },
    { path: "/login", name: "login", component: LoginPage },
    { path: "/product", name: "product", component: ProductPage },
    {
        path: "/user/:component",
        name: "userPage",
        component: UserPage,
        beforeEnter: (to, from, next) => {
            checkAuth() ? next() : next({ name: "login" });
        },
    },
    {
        path: "/favorite",
        name: "favoriteProduct",
        component: FavoriteProduct,
        beforeEnter: (to, from, next) => {
            checkAuth() ? next() : next({ name: "login" });
        },
    },
    {
        path: "/cart",
        name: "cart",
        component: Cart,
        beforeEnter: (to, from, next) => {
            checkAuth() ? next() : next({ name: "login" });
        },
    },
    {
        path: "/order-confirmation",
        name: "orderConfirmation",
        component: OrderConfirmation,
        beforeEnter: (to, from, next) => {
            checkAuth() ? next() : next({ name: "login" });
        },
    },
    { path: "/detail/:id", name: "detail", component: DetailPage },
];
