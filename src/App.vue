<template>
    <div>
        <web-header></web-header>
        <!-- <home-page></home-page> -->
        <!-- <login-page></login-page> -->
        <!-- <signup-page></signup-page> -->
        <router-view></router-view>
        <web-footer></web-footer>
    </div>
</template>

<script setup>
import HomePage from "./components/pages/HomePage.vue";
import LoginPage from "./components/pages/LoginPage.vue";
import SignupPage from "./components/pages/SignupPage.vue";
import WebHeader from "./components/header/WebHeader.vue";
import WebFooter from "./components/footer/WebFooter.vue";
</script>
