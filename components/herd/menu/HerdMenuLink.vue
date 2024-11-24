<script setup lang="ts">
const { label, link } = defineProps({ label: String, link: String })

const currentPath = computed(()=>"/"+useRoute().hash);
</script>

<template>
    <NuxtLink :class="{'menu-link-active':currentPath===link}" class="menu-link" :to=" link ">{{ label }}</NuxtLink>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";

.menu-link {
    width: 100%;
    font-size: 1.8rem;
    text-decoration: none;
    text-transform: uppercase;
    margin-top: 1rem;
    border-style: solid;
    border-color: var(--link-color-1);
    border-width: 0px 0 1px 0;
    color: var(--link-color-1);
}

.menu-link-active {
    font-weight: 700;
}

@media (min-width: $breakpoint-s) {
    .menu-link {
        font-size: 2rem;
    }
}
</style>