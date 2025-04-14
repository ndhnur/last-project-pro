<template>
    <main>
        <div class="container-md my-5">
            <div class="product__list-product row d-flex flex-wrap g-3 justify-content-center">
                <div class="col-12 col-lg-6 col-sm-12">
                    <div class="container card p-3">
                        <h3>Sign Up</h3>
                        <p>Enter your details below</p>
                        <form @submit.prevent="register">
                            <base-input type="text" identity="fullname" placeholder="Enter your fullname" label="Fullname" v-model="signupData.fullname"> </base-input><br />

                            <base-input type="text" identity="username" placeholder="Enter your username" label="Username" v-model="signupData.username"> </base-input><br />

                            <base-input type="email" identity="email" placeholder="Your email address" label="Email" v-model="signupData.email"> </base-input><br />

                            <base-input type="password" identity="password" placeholder="Your Password" label="Password" v-model="signupData.password" @keyInput="passwordCheck"> </base-input>
                            <p class="text-danger mt-1 fw-medium" style="font-size: 11px" :style="{ display: passwordStatusDisplay }">The password field must be at least 8 characters</p>
                            <br />

                            <base-input
                                type="password"
                                identity="confirmationPassword"
                                placeholder="Same with password"
                                label="Confirmation Password"
                                v-model="signupData.confirmationPassword"
                                @keyInput="confirmationPasswordCheck">
                            </base-input>
                            <p class="text-danger mt-1 fw-medium" style="font-size: 11px" :style="{ display: confirmPasswordDoesNotMatch }">The password confirmation doesn't match</p>
                            <p class="text-success mt-1 fw-medium" style="font-size: 11px" :style="{ display: confirmPasswordDoesMatch }">The password confirmation does match</p>
                            <br />
                            <base-input type="file" identity="recipeImage" label="Profile Photo" :isImage="true" @input="checkImage">
                                <div>
                                    <div class="border p-1 mt-2 rounded-circle">
                                        <img :src="signupData.imageLink" class="rounded-circle" width="140" height="150" style="object-fit: cover" />
                                    </div>
                                    <div class="text-center" style="transform: translateY(-24px)">
                                        <i class="fa-solid fa-camera fs-5 p-2 rounded-circle bg-white"></i>
                                    </div>
                                </div>
                            </base-input>
                            <br />
                            <div class="d-flex mt-2">
                                <input type="checkbox" class="me-2" />
                                <label for="" style="text-align: justify"
                                    >By clicking sign up, I hereby agree and consent to <a href="" class="text-link">Term and Condition</a>; I confirm that I have read
                                    <a href="" class="text-link">Privacy policy</a>.</label
                                >
                            </div>
                            <br />

                            <base-button style="background-color: #008181" @click="register">Continue</base-button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </main>
    <ModalSuccess :show="showSuccessModal" />
</template>

<script setup>
import BaseInput from "../ui/BaseInput.vue";
import BaseButton from "../ui/BaseButton.vue";
import ModalSuccess from "../modal/ModalSuccess.vue";

import { reactive, ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const showSuccessModal = ref(false);
const signupData = reactive({
    fullname: "",
    username: "",
    email: "",
    password: "",
    confirmationPassword: "",
    isLogin: false,
    imageLink: "",
});
const passwordStatusDisplay = ref("none");
const confirmPasswordDoesNotMatch = ref("none");
const confirmPasswordDoesMatch = ref("none");

const passwordCheck = () => {
    if (signupData.password.length < 8) {
        passwordStatusDisplay.value = "block";
    } else {
        passwordStatusDisplay.value = "none";
    }
};
const confirmationPasswordCheck = () => {
    if (signupData.confirmationPassword === "") {
        confirmPasswordDoesNotMatch.value = "none";
        confirmPasswordDoesMatch.value = "none";
        return;
    }
    if (signupData.password !== signupData.confirmationPassword) {
        confirmPasswordDoesNotMatch.value = "block";
        confirmPasswordDoesMatch.value = "none";
        return;
    }
    confirmPasswordDoesNotMatch.value = "none";
    confirmPasswordDoesMatch.value = "block";
};
const checkImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.addEventListener("load", () => {
        signupData.imageLink = reader.result;
    });
};

const store = useStore();
const router = useRouter();

const register = async () => {
    if (signupData.password !== signupData.confirmationPassword || signupData.password.length < 8) {
        signupData.confirmationPassword = "";
        signupData.password = "";
        confirmPasswordDoesNotMatch.value = "none";
        confirmPasswordDoesMatch.value = "none";
    } else {
        await store.dispatch("auth/getRegisterData", signupData);
        // router.push("/");
        showSuccessModal.value = true;
    }
};
</script>
