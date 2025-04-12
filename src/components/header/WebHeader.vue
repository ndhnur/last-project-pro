<template>
    <header class="bg-white border-bottom position-sticky top-0 z-3">
        <div class="bg-white">
            <div class="container-md d-flex justify-content-between align-items-center py-2">
                <router-link to="/">
                    <div class="d-flex justify-content-between align-items-center">
                        <img src="/img/Logo Horizontal.png" alt="Logo" height="36px" />
                    </div>
                </router-link>

                <navigation-bar></navigation-bar>
            </div>
        </div>
    </header>
</template>

<script setup>
import NavigationBar from "./NavigationBar.vue";
</script>
