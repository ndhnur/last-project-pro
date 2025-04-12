<template>
    <main>
        <div style="height: 80vh; background-image: url(/img/bg.png); background-repeat: no-repeat; background-size: cover" class="d-flex justify-content-between align-items-center">
            <div class="container-md">
                <div class="card col-lg-4 p-4">
                    <h2>Ready to declutter your closer?</h2>
                    <br />
                    <a href="#shop_now" class="btn w-100 text-white" style="background-color: #008181">Shop now</a>
                </div>
            </div>
        </div>
        <br /><br id="shop_now" /><br />
        <div class="container-md my-4">
            <div class="popular-items d-flex justify-content-between align-items-center">
                <h3>Popular Items</h3>
                <router-link to="/product" class="text-link">See all</router-link>
            </div>
            <div class="product__list-product row d-flex flex-wrap g-3 justify-content-start align-items-center">
                <product-list :products="productList" v-if="productListStatus"></product-list>
                <div class="product col-12 col-lg-2 col-sm-4 p-3">
                    <div class="position-relative bg-success-subtle d-flex justify-content-center align-items-center p-3 btn btn-outline-success h-100">
                        <router-link to="/product" class="m-0 text-center text-decoration-none" style="color: #008181">See all product</router-link>
                    </div>
                </div>
            </div>
            <br /><br />
            <h3>Shop Brands</h3>
            <brand-list></brand-list>
            <br /><br />

            <div class="popular-items d-flex justify-content-between align-items-center">
                <h3>New Products</h3>
                <router-link to="/product" class="text-link">See all</router-link>
            </div>

            <div class="product__list-product row d-flex flex-wrap g-3 justify-content-start align-items-center">
                <product-list :products="productList" v-if="productListStatus"></product-list>

                <div class="product col-12 col-lg-2 col-sm-4 p-3">
                    <div class="position-relative bg-success-subtle d-flex justify-content-center align-items-center p-3 btn btn-outline-success h-100">
                        <router-link to="/product" class="m-0 text-center text-decoration-none" style="color: #008181" href="#">See all product</router-link>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup>
import BrandList from "../brand/BrandList.vue";
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
