<template>
    <div class="header__navbar row justify-content-between align-items-center" style="width: 80%">
        <search-menu></search-menu>
        <div class="header__signup col-7 col-sm-3 fw-semibold d-flex justify-content-evenly align-items-center" style="color: var(--primary); text-align: right">
            <signup-menu></signup-menu>

            <div class="d-none d-sm-block ms-2" id="navbarNavDarkDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item dropdown">
                        <button class="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">EN</button>
                        <ul class="dropdown-menu dropdown-menu-light">
                            <li><a class="dropdown-item" href="#">English</a></li>
                            <li><a class="dropdown-item" href="#">Indonesia</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
import SignupMenu from "./SignupMenu.vue";
import SearchMenu from "./SearchMenu.vue";
</script>
