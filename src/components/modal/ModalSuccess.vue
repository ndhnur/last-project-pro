<template>
    <div v-if="show" class="modal-backdrop d-flex justify-content-center align-items-center">
        <div class="card m-5">
            <div class="p-5 text-center">
                <img src="/img/paper-plane.png" alt="Success Icon" class="mb-3" />
                <h4>Successfull!</h4>
                <p>Your action has been completed successfully.</p>
                <base-button @click="goHome" style="background-color: #008181">Go to Home Page</base-button>
            </div>
        </div>
    </div>
</template>

<script setup>
import BaseButton from "../ui/BaseButton.vue";
import { defineProps, defineEmits } from "vue";
import { useRouter } from "vue-router";

const props = defineProps({
    show: Boolean,
});

const emit = defineEmits(["close"]);
const router = useRouter();

const goHome = () => {
    emit("close");
    router.push("/");
};
</script>

<style scoped>
.modal-backdrop {
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 1050;
}
</style>
