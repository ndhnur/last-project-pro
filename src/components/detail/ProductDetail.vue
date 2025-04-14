<template>
    <div class="mt-2 product__list-product row d-flex flex-wrap g-3 justify-content-between">
        <product-description></product-description>
    </div>
</template>
<script setup>
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import ProductDescription from "./ProductDescription.vue";

const store = useStore();
const route = useRoute();

onMounted(async () => {
    await store.dispatch("product/getProductDetail", route.params.id);
});
</script>
