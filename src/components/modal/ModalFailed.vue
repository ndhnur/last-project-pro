<template>
    <div v-if="showfailed" class="modal-backdrop d-flex justify-content-center align-items-center">
        <div class="card m-5">
            <div class="p-5 text-center">
                <img src="/img/paper-plane.png" alt="Success Icon" class="mb-3" />
                <h4>Failed!</h4>
                <p>Your action has been failed. Check again!</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
    showfailed: Boolean,
});
</script>

<style scoped>
.modal-backdrop {
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 1050;
}
</style>
