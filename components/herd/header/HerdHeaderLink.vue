<script setup lang="ts">
const { label, link } = defineProps({ label: String, link: String })

const currentPath = computed(()=>"/"+useRoute().hash);
</script>

<template>
    <NuxtLink :class="{'header-link-active':currentPath===link}" class="header-link" :to="link">{{ label }}</NuxtLink>
</template>

<style lang="scss" scoped>
.header-link {
    font-size: 1.5rem;
    text-decoration: none;
    color: var(--link-color-1);
    text-transform: uppercase;
}
.header-link-active{
    text-decoration: underline;
}
</style>