<template>
    <div class="header__navbar row justify-content-between align-items-center" style="width: 80%">
        <search-menu></search-menu>
        <div class="header__signup col-7 col-sm-3 fw-semibold d-flex justify-content-evenly align-items-center" style="color: var(--primary); text-align: right">
            <component :is="components[menuComponent]"></component>

            <div class="d-none d-sm-block ms-2" id="navbarNavDarkDropdown" style="border-left: 1px solid #ededed">
                <ul class="navbar-nav">
                    <li class="nav-item dropdown">
                        <button class="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">EN</button>
                        <ul class="dropdown-menu dropdown-menu-light">
                            <li><a class="dropdown-item" href="#">English</a></li>
                            <li><a class="dropdown-item" href="#">Indonesia</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
import SignupMenu from "./SignupMenu.vue";
import SearchMenu from "./SearchMenu.vue";
import ProfileMenu from "./ProfileMenu.vue";
import { computed, ref, watch } from "vue";
import { useStore } from "vuex";

const menuComponent = ref("signup-menu");
const store = useStore();

const components = {
    "signup-menu": SignupMenu,
    "profile-menu": ProfileMenu,
};

const getToken = computed(() => {
    return store.state.auth.token;
});

// Gunakan watch untuk memantau perubahan getToken
// INI TIDAK ADA DI MATERI
watch(
    getToken,
    (newToken) => {
        if (!newToken) {
            menuComponent.value = "signup-menu";
        } else {
            menuComponent.value = "profile-menu";
            console.log(newToken);
        }
    },
    { immediate: true }
); // immediate: true untuk menjalankan watch saat inisialisasi
</script>
