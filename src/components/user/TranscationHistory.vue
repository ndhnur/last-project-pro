<template>
    <div class="container card p-3">
        <p class="text-secondary">My Order</p>
        <div class="card p-3">
            <p class="m-0 fw-bold">
                <i class="fas fa-bag-shopping me-3" style="color: #008181"></i>
                Shopping
                <span class="m-0 text-secondary mx-3">14 March, 2025</span>
                <span class="btn text-sm rounded-pill" style="font-size: 12px; color: #10af13; background-color: #effff0">Done</span>
                <span>ORD-20230613/XXII/VI/1920930123</span>
            </p>
            <div class="d-flex justify-content-between align-items-start gap-3 my-2">
                <img src="https://www.uniqlo.com/jp/ja/contents/feature/masterpiece/common/au/img/product/item_37_kv.jpg?240829" alt="" width="100px" height="100vh" />
                <div class="w-50">
                    <p class="fw-bold fs-5 mb-2">AIRism Ultra Stretch Sleeveless Dress</p>
                    <p class="text-secondary mb-1">1 product x Rp200.000</p>
                    <p class="text-secondary m-0">8 / M</p>
                </div>
                <div class="border-start px-4">
                    <p class="m-0">Total Price</p>
                    <p class="fw-bold fs-5">Rp 400.000</p>
                </div>
            </div>
            <p class="text-secondary m-0">+ 2 more products</p>

            <hr />
            <div><base-button class="btn float-end text-white mb-2" style="background-color: #008181">Buy Again</base-button></div>
        </div>
    </div>
</template>
<script setup>
import BaseButton from "../ui/BaseButton.vue";
</script>
