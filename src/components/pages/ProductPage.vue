<template>
    <main>
        <div class="container-md my-4">
            <h3>Items</h3>
            <div class="product__list-product row d-flex flex-wrap g-3 justify-content-start align-items-center">
                <product-list :products="productList" v-if="productListStatus"></product-list>
            </div>
        </div>
    </main>
</template>

<script setup>
import ProductList from "../product/ProductList.vue";
import { onMounted, ref } from "vue";
import { useStore } from "vuex";

const store = useStore();
const productListStatus = ref(false);
const productList = ref();
onMounted(async () => {
    try {
        await store.dispatch("product/getProductData");
        productListStatus.value = true;
        productList.value = store.state.product.products;
    } catch (error) {
        console.log(error);
    }
});
</script>
