<template>
    <main>
        <div class="container-md my-4 pb-5">
            <div class="row justify-content-between">
                <div class="col-8 align-items-start">
                    <div class="card p-3">
                        <p>Order</p>
                        <div class="d-flex justify-content-between align-items-start gap-3 my-2">
                            <img src="https://www.uniqlo.com/jp/ja/contents/feature/masterpiece/common/au/img/product/item_37_kv.jpg?240829" alt="" width="100px" height="100vh" />
                            <div class="w-75">
                                <p class="fw-bold fs-5 mb-2">AIRism Ultra Stretch Sleeveless Dress</p>
                                <p class="text-secondary mb-1">1 product x Rp200.000</p>
                                <p class="text-secondary m-0">8 / M</p>
                            </div>
                            <p class="text-secondary">1 x</p>
                        </div>
                    </div>
                </div>
                <div class="col-4">
                    <div class="border card rounded p-3">
                        <div class="d-flex justify-content-between">
                            <p class="text-secondary">Order Summary</p>
                        </div>
                        <div class="d-flex justify-content-between">
                            <p class="text-secondary">Order</p>
                            <p class="text-secondary">Rp 400.000</p>
                        </div>
                        <div class="d-flex justify-content-between">
                            <p class="text-secondary">Protection Fee</p>
                            <p class="text-secondary">Rp 20.000</p>
                        </div>
                        <div class="d-flex justify-content-between">
                            <p class="text-secondary">Shipping</p>
                            <p class="text-secondary">Rp 15.000</p>
                        </div>
                        <hr />
                        <div class="d-flex justify-content-between">
                            <p>Total Pay</p>
                            <p>Rp 435.000</p>
                        </div>
                        <base-button class="btn w-100 text-white mb-2" style="background-color: #008181">Order Now</base-button>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup>
import BaseButton from "../ui/BaseButton.vue";
import { ref } from "vue";

const quantity = ref(1);

const decreaseQty = () => {
    if (quantity.value > 1) quantity.value--;
};

const increaseQty = () => {
    quantity.value++;
};
</script>
