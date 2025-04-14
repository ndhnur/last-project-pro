<template>
    <main>
        <div class="container-md my-4">
            <div class="row justify-content-between">
                <div class="col-8 align-items-start">
                    <div class="d-flex justify-content-between">
                        <h3>Cart</h3>
                        <p class="text-secondary border p-1 rounded">1 item</p>
                    </div>
                    <div class="border rounded p-2"><i class="fas fa-location-dot"></i> Shipping to <span class="fw-bold">Kenten, Banyuasin</span></div>
                    <div class="d-flex justify-content-start align-items-start gap-3 my-2">
                        <img src="https://www.uniqlo.com/jp/ja/contents/feature/masterpiece/common/au/img/product/item_37_kv.jpg?240829" alt="" width="100px" height="100vh" />
                        <div>
                            <p class="fw-bold fs-5 mb-2">AIRism Ultra Stretch Sleeveless Dress</p>
                            <p class="text-secondary mb-1">1 product x Rp200.000</p>
                            <p class="text-secondary m-0">8 / M</p>
                        </div>
                    </div>
                    <div class="d-flex justify-content-between">
                        <p class="text-danger">Remove</p>
                        <div class="d-flex align-items-center border rounded overflow-hidden" style="width: fit-content">
                            <button class="btn btn-outline-secondary px-3 py-1" @click="decreaseQty">−</button>
                            <div class="px-3 py-1 border-start border-end bg-white">{{ quantity }}</div>
                            <button class="btn btn-outline-secondary px-3 py-1" @click="increaseQty">+</button>
                        </div>
                    </div>
                    <hr />
                </div>
                <div class="col-4">
                    <div class="border rounded p-3">
                        <div class="d-flex justify-content-between">
                            <p class="fw-bold">Order Summary</p>
                            <p class="fw-bold">Rp 400.000</p>
                        </div>
                        <div class="d-flex justify-content-between">
                            <p class="text-secondary">1 item</p>
                            <p class="text-secondary">Not include shipping fee</p>
                        </div>
                        <hr />
                        <base-button class="btn w-100 text-white mb-2" style="background-color: #008181" @click="co">Checkout</base-button>
                    </div>
                </div>
            </div>
            <h3 class="mt-3">Other Product</h3>
            <div class="d-flex col-lg-12 col-md-12 justify-content-start align-items-center">
                <product-list :products="productList" v-if="productListStatus"></product-list>
            </div>
        </div>
    </main>
</template>

<script setup>
import BaseButton from "../ui/BaseButton.vue";
import ProductList from "../product/ProductList.vue";
import { useStore } from "vuex";
import { onMounted, ref, defineProps, defineEmits } from "vue";
import { useRouter } from "vue-router";

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

const quantity = ref(1);

const decreaseQty = () => {
    if (quantity.value > 1) quantity.value--;
};

const increaseQty = () => {
    quantity.value++;
};

const props = defineProps({
    show: Boolean,
});

const emit = defineEmits(["close"]);
const router = useRouter();

const co = () => {
    emit("close");
    router.push("/order-confirmation");
};
</script>
