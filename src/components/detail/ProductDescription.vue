<template>
    <div class="col-12 col-lg-8">
        <img :src="productDetail.image" :alt="productDetail.name" width="100%" style="height: 415px; object-fit: cover" />
    </div>
    <div class="col-12 col-lg-4">
        <div class="container card p-3">
            <div class="d-flex justify-content-between align-items-center">
                <h3>Rp. {{ productDetail.price }}</h3>
                <span v-if="isLoggedIn" @click="showConfirmModal = true">
                    <span>
                        <i :class="isFavorite ? 'fas fa-heart' : 'far fa-heart'" :title="isFavorite ? 'Remove from favorites' : 'Add to favorites'"></i>
                    </span>
                </span>
                <span v-else>
                    <i class="far fa-heart text-secondary" title="Login to favorite this item"></i>
                </span>
            </div>
            <p>{{ productDetail.name }}</p>
            <p class="text-secondary">{{ productDetail.size }} &#9679; Very Good &#9679; Denpasar</p>
            <hr />
            <p class="text-secondary">Item Description</p>
            <p>{{ productDetail.description }}</p>
            <table class="w-100">
                <tbody>
                    <tr>
                        <td>Category</td>
                        <td class="text-secondary">{{ productDetail.category }}</td>
                    </tr>
                    <tr>
                        <td>Size</td>
                        <td class="text-secondary">{{ productDetail.size }}</td>
                    </tr>
                    <tr>
                        <td>Condition</td>
                        <td class="text-secondary">Very Good</td>
                    </tr>
                    <tr>
                        <td>Color</td>
                        <td class="text-secondary">{{ productDetail.color }}</td>
                    </tr>
                    <tr>
                        <td>Uploaded</td>
                        <td class="text-secondary">5 hours ago</td>
                    </tr>
                    <tr>
                        <td>Shipping</td>
                        <td class="text-secondary">Rp {{ productDetail.shipping }}</td>
                    </tr>
                </tbody>
            </table>
            <hr />
            <div v-if="isLoggedIn">
                <router-link to="/order-confirmation" class="btn w-100 text-white mb-2" style="background-color: #008181">Buy now</router-link>
                <router-link to="/cart" class="btn w-100" style="border-color: #008181; color: #008181">Add to cart</router-link>
            </div>
        </div>
    </div>

    <ModalConfirm :show="showConfirmModal" @close="showConfirmModal = false" @confirm="toggleFavorite" />
</template>

<script setup>
import { useStore } from "vuex";
import ModalConfirm from "../modal/ModalConfirm.vue";
import { ref, computed } from "vue";

const showConfirmModal = ref(false);
const store = useStore();

const isLoggedIn = computed(() => !!store.state.auth.userLogin?.userId);
const productDetail = computed(() => store.state.product.productDetail);

// Mengecek apakah produk sudah ada di favorit
const isFavorite = computed(() => {
    // Cek apakah product id sudah ada di favorit
    return store.state.product.favorites.some((fav) => fav.idProduct === productDetail.value.id);
});

// Fungsi untuk menambah atau menghapus dari favorit
const toggleFavorite = () => {
    const idProduct = productDetail.value.id;
    const idUser = store.state.auth.userLogin.userId;

    if (isFavorite.value) {
        // Produk sudah ada di favorit, hapus
        store.dispatch("product/removeFromFavorite", { idUser, idProduct });
    } else {
        // Produk belum ada di favorit, tambahkan
        store.dispatch("product/addToFavorite", { idUser, idProduct });
    }
    showConfirmModal.value = false;
};
</script>
