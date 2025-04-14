<template>
    <main>
        <div class="container-md my-5">
            <h3 class="text-center">Silakan Login</h3>
            <div class="mt-2 product__list-product row d-flex flex-wrap g-3 justify-content-center">
                <div class="col-12 col-lg-6 col-sm-12">
                    <div class="container card p-3">
                        <h3>Login</h3>
                        <p>Enter your details below</p>
                        <form @submit.prevent="login">
                            <base-input type="email" identity="email" placeholder="Your email" label="Email" v-model="loginData.email" />
                            <br />
                            <base-input type="password" identity="password" placeholder="Your Password" label="Password" v-model="loginData.password" />
                        </form>
                        <br />
                        <base-button style="background-color: #008181" @click="login">Continue</base-button>
                    </div>
                </div>
            </div>
        </div>
        <ModalSuccess :show="showSuccessModal" />
        <ModalFailed :showfailed="showFailedModal" />
    </main>
</template>

<script setup>
import BaseInput from "../ui/BaseInput.vue";
import BaseButton from "../ui/BaseButton.vue";
import ModalSuccess from "../modal/ModalSuccess.vue";
import ModalFailed from "../modal/ModalFailed.vue";
import { reactive, ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const loginData = reactive({
    email: "",
    password: "",
    isLogin: true,
});

const showSuccessModal = ref(false);
const showFailedModal = ref(false);

const store = useStore();
const router = useRouter();

const login = async () => {
    const success = await store.dispatch("auth/getLoginData", loginData);
    if (success) {
        console.log(success);
        showSuccessModal.value = true;
    } else {
        console.log(success);

        showFailedModal.value = true;
        setTimeout(() => {
            showFailedModal.value = false;
        }, 2000); // tampil 2 detik lalu redirect
    }
};
</script>
