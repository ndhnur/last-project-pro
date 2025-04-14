<template>
    <div class="container card p-3">
        <p class="text-secondary">Edit profile</p>
        <form @submit.prevent="updateProfile">
            <div class="d-flex justify-content-center align-items-center gap-5">
                <p>Photo</p>
                <div>
                    <img :src="userData.imageLink" :alt="userData.fullname" class="image rounded-circle" width="100px" />
                </div>
                <base-input type="file" identity="recipeImage" label="Photo Recipe" @input="checkImage" />
            </div>

            <base-input type="text" identity="fullname" label="Fullname" v-model="userData.fullname" /><br />
            <base-input type="text" identity="username" label="Username" v-model="userData.username" /><br />
            <base-input type="email" identity="email" label="Email" v-model="userData.email" /><br />

            <div>
                <base-button class="btn float-end text-white mb-2" style="background-color: #008181" @click="updateProfile">Update Profile</base-button>
            </div>
        </form>
    </div>
</template>

<script setup>
import BaseInput from "../ui/BaseInput.vue";
import BaseButton from "../ui/BaseButton.vue";
import { useStore } from "vuex";
import { reactive, watch, onMounted } from "vue";

const store = useStore();

const userData = reactive({
    fullname: "",
    username: "",
    email: "",
    imageLink: "",
});

const checkImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.addEventListener("load", () => {
        userData.imageLink = reader.result;
    });
};

onMounted(() => {
    if (store.state.auth.userLogin?.email) {
        Object.assign(userData, store.state.auth.userLogin);
    }
});

// Jaga-jaga kalau data baru muncul setelah mount
watch(
    () => store.state.auth.userLogin,
    (val) => {
        if (val?.email) Object.assign(userData, val);
    },
    { immediate: true }
);

const updateProfile = async () => {
    const success = await store.dispatch("auth/updateUserData", userData);
    if (success) {
        alert("Profile updated successfully!");
    } else {
        alert("Failed to update profile.");
    }
};
</script>
