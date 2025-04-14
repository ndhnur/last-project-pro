<template>
    <div v-for="product in products" :key="product.id" class="product col-12 col-lg-2 col-sm-4 p-3">
        <router-link :to="`/detail/${product.id}`">
            <div class="position-relative">
                <img :src="product.image" :alt="product.name" width="100%" height="150px" />
                <div class="text-black">
                    <h6 class="mt-2" style="color: #008181">Rp. {{ product.price }}</h6>
                    <p>{{ product.name }}</p>
                    <div class="d-flex justify-content-between align-items-center" style="margin-top: -10px">
                        <p class="mt-auto mb-auto">{{ product.size }}</p>
                        <span><i class="far fa-heart"></i>12</span>
                    </div>
                </div>
            </div>
        </router-link>
    </div>
</template>
<script setup>
defineProps({
    products: Array,
});
</script>
