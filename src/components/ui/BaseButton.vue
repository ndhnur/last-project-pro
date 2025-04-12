<template>
    <div class="btn rounded-pill" @click="$emit('clickButton')">
        <slot></slot>
    </div>
</template>