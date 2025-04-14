<template>
    <div v-if="show" class="modal-backdrop d-flex justify-content-center align-items-center">
        <div class="modal-box bg-white p-4 rounded text-start text-dark shadow" style="width: 500px">
            <div class="d-flex justify-content-between align-items-center mb-3">
                <h5 class="m-0">Confirm</h5>
                <button @click="close" class="btn-close"></button>
            </div>
            <p>Are you sure??</p>
            <hr />
            <div class="d-flex justify-content-end gap-2 mt-4">
                <button class="btn btn-secondary" @click="close">Close</button>
                <button class="btn btn-danger" @click="confirm">Confirm</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
    show: Boolean,
});
const emit = defineEmits(["close", "confirm"]);

const close = () => emit("close");
const confirm = () => emit("confirm");
</script>

<style scoped>
.modal-backdrop {
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 1050;
}
</style>
