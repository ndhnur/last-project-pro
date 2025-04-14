<template>
    <div class="container card p-3">
        <p class="text-secondary">Change Password</p>

        <form @submit.prevent="updatePassword">
            <base-input type="password" identity="oldPassword" label="Old Password" placeholder="Old password" v-model="password.oldPassword" :show-toggle="true" /><br />

            <base-input type="password" identity="newPassword" label="New Password" placeholder="New password" v-model="password.newPassword" :show-toggle="true" /><br />

            <base-input type="password" identity="confirmPassword" label="Confirmation New Password" placeholder="Confirmation password" v-model="password.confirmPassword" :show-toggle="true" /><br />

            <base-button class="btn mt-3 text-white float-end" style="background-color: #008181" @click="updatePassword"> Save Changes </base-button>
        </form>
    </div>
</template>

<script setup>
import { ref } from "vue";
import BaseInput from "../ui/BaseInput.vue";
import BaseButton from "../ui/BaseButton.vue";
import { useStore } from "vuex";

const store = useStore();
const password = ref({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
});

const updatePassword = async () => {
    if (password.value.newPassword !== password.value.confirmPassword) {
        alert("New password and confirmation do not match!");
        return;
    }

    const success = await store.dispatch("auth/updatePassword", {
        oldPassword: password.value.oldPassword,
        newPassword: password.value.newPassword,
        password,
    });

    if (success) {
        alert("Password updated successfully!");
        password.value.oldPassword = "";
        password.value.newPassword = "";
        password.value.confirmPassword = "";
    } else {
        alert("Failed to update password.");
    }
};
</script>
