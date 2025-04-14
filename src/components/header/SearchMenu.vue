<template>
    <div class="col-9 py-0 d-none d-sm-block">
        <div class="header__searchbar input-group align-items-center border rounded">
            <span class="px-2">
                <!-- contoh penggunaan (pake kebab-case kalo multi kata) -->
                <font-awesome-icon icon="magnifying-glass" /> 
            </span>
            <input type="text" class="form-control form-control-sm border-0 rounded" placeholder="Search for items" />
        </div>
    </div>

    <div class="col-5 d-block d-sm-none border-end text-end">
        <i class="fas fa-magnifying-glass"></i>
    </div>
</template>

<script setup>
import FontAwesomeIcon from "@/utilities/fontAwesome"; // import
</script>