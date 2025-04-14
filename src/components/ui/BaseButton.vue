<template>
    <div class="btn text-white mb-2" @click="$emit('clickButton')">
        <slot></slot>
    </div>
</template>
