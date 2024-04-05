<template>
    <NuxtPage />
</template>

<script setup lang="ts">
useHead({
    title: 'Demo Ecommerce App',
    meta: [{ name: 'Ecommerce App', content: 'Ecommerce products.' }],
    htmlAttrs: {
        lang: 'en'
    }
})
</script>

<style>
.page-enter-active,
.page-leave-active {
    transition: all 0.16s;
}
.page-enter-from,
.page-leave-to {
    opacity: 0;
}
</style>
