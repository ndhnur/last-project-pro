import axios from "axios";
import Cookies from "js-cookie";
export default {
    namespaced: true,
    state() {
        return {
            token: null,
            tokenExpirationDate: null,
            userLogin: {},
            isLogin: false,
        };
    },
    mutations: {
        setToken(state, { idToken, expiresIn }) {
            (state.token = idToken), (state.tokenExpirationDate = expiresIn), Cookies.set("tokenExpirationDate", expiresIn), Cookies.set("jwt", idToken);
        },
        setUserLogin(state, { userData, loginStatus }) {
            (state.userLogin = userData), (state.isLogin = loginStatus);
        },
        setUserLogout(state) {
            state.token = null;
            state.userLogin = {};
            state.isLogin = false;
            state.tokenExpirationDate = null;
            Cookies.remove("jwt");
            Cookies.remove("tokenExpirationDate");
            Cookies.remove("UID");
            console.log("berhasil");
        },
    },
    actions: {
        async getRegisterData({ commit, dispatch }, payload) {
            const APIkey = "AIzaSyC6-rCYgrq-OthI4dxTda6SdHewjjQI8WI";
            const authUrl = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=";
            try {
                const { data } = await axios.post(authUrl + APIkey, {
                    email: payload.email,
                    password: payload.password,
                    returnSecureToken: true,
                });

                commit("setToken", {
                    idToken: data.idToken,
                    expiresIn: new Date().getTime() + Number.parseInt(data.expiresIn) * 1000,
                });

                const newUserData = {
                    userId: data.localId,
                    fullname: payload.fullname,
                    username: payload.username,
                    email: payload.email,
                    imageLink: payload.imageLink,
                };

                Cookies.set("UID", newUserData.userId);
                await dispatch("addNewUser", newUserData);
            } catch (err) {
                console.log(err);
            }
        },
        async addNewUser({ commit, state }, payload) {
            try {
                const { data } = await axios.post(`https://marketplace-2f7fc-default-rtdb.asia-southeast1.firebasedatabase.app/user.json?auth=${state.token}`, payload);
                commit("setUserLogin", { userData: payload, loginStatus: true });
            } catch (err) {
                console.log(err);
            }
        },
        async getLoginData({ commit, dispatch }, payload) {
            const APIkey = "AIzaSyC6-rCYgrq-OthI4dxTda6SdHewjjQI8WI";
            const authUrl = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=";
            try {
                const { data } = await axios.post(
                    authUrl + APIkey, // Ganti APIkey dengan variabel yang sesuai
                    {
                        email: payload.email,
                        password: payload.password,
                        returnSecureToken: true,
                    }
                );

                commit("setToken", {
                    idToken: data.idToken,
                    expiresIn: new Date().getTime() + Number.parseInt(data.expiresIn) * 1000,
                });

                await dispatch("getUser", data.localId);
                return true;
            } catch (error) {
                console.error("Error during registration:", error); // Gunakan console.error untuk error
                // Tambahkan penanganan error yang lebih baik di sini, seperti menampilkan pesan error kepada pengguna
            }
        },
        async getUser({ commit }, payload) {
            try {
                const { data } = await axios.get("https://marketplace-2f7fc-default-rtdb.asia-southeast1.firebasedatabase.app/user.json");

                for (let key in data) {
                    if (data[key].userId === payload) {
                        Cookies.set("UID", data[key].userId);
                        commit("setUserLogin", { userData: data[key], loginStatus: true });
                    }
                }
            } catch (err) {
                console.log(err);
            }
        },
        async updateUserData({ state, commit }, updatedData) {
            try {
                const uid = Cookies.get("UID");
                const { data } = await axios.get(`https://marketplace-2f7fc-default-rtdb.asia-southeast1.firebasedatabase.app/user.json?auth=${state.token}`);

                let userKey = null;
                for (const key in data) {
                    if (data[key].userId === uid) {
                        userKey = key;
                        break;
                    }
                }

                if (!userKey) throw new Error("User not found");

                await axios.patch(`https://marketplace-2f7fc-default-rtdb.asia-southeast1.firebasedatabase.app/user/${userKey}.json?auth=${state.token}`, updatedData);

                commit("setUserLogin", { userData: updatedData, loginStatus: true });
                return true;
            } catch (err) {
                console.error("Update failed:", err);
                return false;
            }
        },
    },
};
