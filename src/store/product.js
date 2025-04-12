import axios from "axios";
export default {
    namespaced: true,
    state() {
        return {
            products: [],
        };
    },
    getters: {},
    mutations: {
        setProductData(state, payload) {
            state.products = payload;
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
    },
};
