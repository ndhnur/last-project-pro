<template>
    <div class="header__signup col-8 col-sm-6 fw-semibold d-flex justify-content-evenly align-items-center text-decoration-none" style="text-align: right">
        <!-- <i class="fas fa-shopping-cart me-2"></i>
        <i class="fa-solid fa-heart me-2"></i>
        <i class="fa-solid fa-user me-2"></i> -->
        <router-link to="/cart"><img src="/img/cart.png" alt="" class="me-2" /></router-link>
        <router-link to="/favorite"><img src="/img/heart.png" alt="" class="me-2" /></router-link>
        <img :src="userData.imageLink" :alt="userData.name" class="me-1 rounded-circle" width="30px" height="30px" />
        <ul class="navbar-nav">
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"> </a>
                <ul class="dropdown-menu">
                    <router-link to="/user/profile-details" class="dropdown-item"><img src="/img/person.png" alt="" class="me-2" /> Profile</router-link>
                    <router-link to="/user/transaction-history" class="dropdown-item"><img src="/img/receipt.png" alt="" class="me-2" /> Order</router-link>
                    <li class="dropdown-item text-danger" @click="showLogoutModal = true"><img src="/img/exit.png" alt="" class="me-2" /> Logout</li>
                </ul>
            </li>
        </ul>
    </div>
    <ModalLogout :show="showLogoutModal" @close="showLogoutModal = false" @confirm="logout" />
</template>
<script setup>
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import ModalLogout from "../modal/ModalLogout.vue";
import { ref, computed } from "vue";

const userData = computed(() => {
    return store.state.auth.userLogin;
});

const store = useStore();
const router = useRouter();
const showLogoutModal = ref(false);

const logout = () => {
    store.commit("auth/setUserLogout");
    router.push("/");
};
</script>
