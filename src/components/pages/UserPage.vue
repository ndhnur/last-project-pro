<template>
    <main>
        <div class="container-md my-5">
            <div class="product__list-product row d-flex flex-wrap g-3 justify-content-center">
                <user-menu @changeComponent="$router.push($event)"></user-menu>
                <div class="col-12 col-lg-9 col-sm-12">
                    <component :is="component[getRoute]"></component>
                </div>
            </div>
        </div>
    </main>
</template>
<script setup>
import UserMenu from "../user/UserMenu.vue";
import ChangePassword from "../user/ChangePassword.vue";
import TranscationHistory from "../user/TranscationHistory.vue";
import ProfileDetails from "../user/ProfileDetails.vue";
import { useRoute } from "vue-router";
import { computed } from "vue";

const route = useRoute();
const component = {
    "profile-details": ProfileDetails,
    "change-password": ChangePassword,
    "transaction-history": TranscationHistory,
};
const getRoute = computed(() => {
    return route.params.component;
});
</script>
