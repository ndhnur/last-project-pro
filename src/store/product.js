import axios from "axios";
export default {
    namespaced: true,
    state() {
        return {
            products: [],
            productDetail: {},

            favorites: [],
        };
    },
    getters: {},
    mutations: {
        setProductData(state, payload) {
            state.products = payload;
        },
        setProductDetail(state, payload) {
            state.productDetail = payload;
        },
        setFavorites(state, favorites) {
            state.favorites = favorites;
        },
        addToFavorites(state, favoriteProduct) {
            state.favorites.push(favoriteProduct);
        },
        removeFromFavorites(state, productId) {
            state.favorites = state.favorites.filter((fav) => fav.idProduct !== productId);
        },
    },
    actions: {
        async getProductData({ commit }) {
            try {
                const { data } = await axios.get("https://marketplace-2f7fc-default-rtdb.asia-southeast1.firebasedatabase.app/products.json");
                const arr = [];
                for (let key in data) {
                    arr.push({ id: key, ...data[key] });
                }
                commit("setProductData", arr);
            } catch (err) {
                console.log(err);
            }
        },
        async getProductDetail({ commit }, payload) {
            try {
                // HARUS {PAKAI BACKTICKS ````` bukan tanda kutip}
                const { data } = await axios.get(`https://marketplace-2f7fc-default-rtdb.asia-southeast1.firebasedatabase.app/products/${payload}.json`);

                commit("setProductDetail", { id: payload, ...data });
                console.log(data);
            } catch (err) {}
        },
        async getFavorites({ commit }) {
            try {
                const { data: favoritesData } = await axios.get("https://marketplace-2f7fc-default-rtdb.asia-southeast1.firebasedatabase.app/favorites.json");

                const favorites = [];

                for (let key in favoritesData) {
                    const { idUser, idProduct } = favoritesData[key];

                    // Ambil detail produk dari idProduct
                    const { data: productData } = await axios.get(`https://marketplace-2f7fc-default-rtdb.asia-southeast1.firebasedatabase.app/products/${idProduct}.json`);

                    if (productData) {
                        favorites.push({
                            firebaseId: key, // ID untuk menghapus dari favorites
                            idUser,
                            idProduct,
                            ...productData, // Data lengkap produk: name, image, price, dll
                        });
                    }
                }

                commit("setFavorites", favorites);
            } catch (err) {
                console.error("Error fetching favorites:", err);
            }
        },

        async addToFavorite({ commit }, { idUser, idProduct }) {
            try {
                const { data } = await axios.post("https://marketplace-2f7fc-default-rtdb.asia-southeast1.firebasedatabase.app/favorites.json", {
                    idUser: idUser,
                    idProduct: idProduct,
                });
                commit("addToFavorites", { idProduct, idUser });
                alert("Added to favorites!");
            } catch (err) {
                console.error("Error adding to favorites:", err);
            }
        },
        async removeFromFavorite({ commit }, { idUser, idProduct }) {
            try {
                // Dapatkan ID favorit yang ingin dihapus
                const { data } = await axios.get("https://marketplace-2f7fc-default-rtdb.asia-southeast1.firebasedatabase.app/favorites.json");
                let favoriteIdToRemove = null;
                for (let key in data) {
                    if (data[key].idUser === idUser && data[key].idProduct === idProduct) {
                        favoriteIdToRemove = key;
                        break;
                    }
                }

                if (favoriteIdToRemove) {
                    await axios.delete(`https://marketplace-2f7fc-default-rtdb.asia-southeast1.firebasedatabase.app/favorites/${favoriteIdToRemove}.json`);
                    commit("removeFromFavorites", idProduct);
                    alert("Removed from favorites!");
                }
            } catch (err) {
                console.error("Error removing from favorites:", err);
            }
        },
    },
};
