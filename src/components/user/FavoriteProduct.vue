<template>
    <main>
        <div class="container-md my-4">
            <h3>Favorite Items</h3>
            <div class="product__list-product row d-flex flex-wrap g-3 justify-content-start align-items-center">
                <div v-if="favoriteProducts.length === 0" class="col-12 text-center my-5">
                    <img src="/img/folder-favorite.png" alt="" />
                    <h4>No favorite items yet</h4>
                    <p>When add item to favorite, the item will appear on the favorite list.</p>
                    <base-button @click="goHome" style="background-color: #008181">Find Products</base-button>
                </div>
                <div v-for="(product, index) in favoriteProducts" :key="index" class="col-12 col-md-6 col-lg-2">
                    <div class="position-relative">
                        <img :src="product.image" :alt="product.name" width="100%" height="150px" />
                        <div class="text-black">
                            <h6 class="mt-2" style="color: #008181">Rp. {{ product.price }}</h6>
                            <p>{{ product.name }}</p>
                            <div class="d-flex justify-content-between align-items-center" style="margin-top: -10px">
                                <p class="mt-auto mb-auto">{{ product.size }}</p>
                                <span><i class="fas fa-heart text-danger" @click="removeFromFavorites(product.id)"></i></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup>
import BaseButton from "../ui/BaseButton.vue";
import { onMounted, ref } from "vue";
import { useStore } from "vuex";

const store = useStore();
const favoriteProducts = ref([]);
const idUser = store.state.auth.userLogin.userId;

const loadFavorites = async () => {
    await store.dispatch("product/getFavorites");
    const favorites = store.state.product.favorites.filter((fav) => fav.idUser === idUser);

    const allProducts = store.state.product.products;
    if (allProducts.length === 0) {
        await store.dispatch("product/getProductData");
    }

    favoriteProducts.value = favorites
        .map((fav) => {
            return store.state.product.products.find((p) => p.id === fav.idProduct);
        })
        .filter(Boolean); // pastikan tidak undefined
};

const removeFromFavorites = (productId) => {
    store
        .dispatch("product/removeFromFavorite", {
            idUser,
            idProduct: productId,
        })
        .then(() => {
            // Remove dari UI juga
            favoriteProducts.value = favoriteProducts.value.filter((p) => p.id !== productId);
        });
};

onMounted(() => {
    loadFavorites();
});

const goHome = () => {
    emit("close");
    router.push("/");
};
</script>
