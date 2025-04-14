<template>
    <div class="col-12 col-lg-3 col-sm-12">
        <h3>Settings</h3>
        <ul type="none">
            <li class="py-3 user-menu" :class="activeMenu === 'profile-details' ? 'active-color' : 'inactive-color'" @click="menuClicked('profile-details')">Profile details</li>
            <li class="py-3 user-menu" :class="activeMenu === 'change-password' ? 'active-color' : 'inactive-color'" @click="menuClicked('change-password')">Change password</li>
            <li class="py-3 user-menu" :class="activeMenu === 'transaction-history' ? 'active-color' : 'inactive-color'" @click="menuClicked('transaction-history')">Transaction history</li>
        </ul>
    </div>
</template>

<script setup>
import { ref } from "vue";

const emit = defineEmits(["changeComponent"]);
const activeMenu = ref("profile-details"); // default aktif

const menuClicked = (option) => {
    activeMenu.value = option;
    emit("changeComponent", option);
};
</script>

<style scoped>
.user-menu:hover {
    cursor: pointer;
}

.active-color {
    color: #000;
    font-weight: bold;
}

.inactive-color {
    color: #404040;
}
</style>
