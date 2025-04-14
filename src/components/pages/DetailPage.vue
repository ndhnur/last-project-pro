<template>
    <main>
        <div class="container-md my-4">
            <h3>Detail Product</h3>
            <product-detail></product-detail>
            <h3>Other Product</h3>
            <div class="d-flex col-lg-12 col-md-12 justify-content-start align-items-center">
                <product-list :products="productList" v-if="productListStatus"></product-list>
            </div>
        </div>
    </main>
</template>

<script setup>
import ProductDetail from "../detail/ProductDetail.vue";
import ProductList from "../product/ProductList.vue";
import { useStore } from "vuex";
import { onMounted, ref } from "vue";

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
