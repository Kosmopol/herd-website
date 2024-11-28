<script setup lang="ts">
defineProps({
    name: String,
    role: String,
    citation:String
})
</script>

<template>
    <li>
        <span class="role">{{ name }}</span><span> ({{ role }}) : {{ citation }}</span>
    </li>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";

.role {
    text-transform: uppercase;
    font-weight: 800;
}

@media (min-width: $breakpoint-s) {
    .role {
        letter-spacing: 1px;
    }
}

@media (min-width: $breakpoint-m) {
    .role {
        letter-spacing: 2px;
    }
}

@media (min-width: $breakpoint-l) {
    .role {
        letter-spacing: 4px;
    }
}
</style>