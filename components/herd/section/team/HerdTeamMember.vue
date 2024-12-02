<script setup lang="ts">
import HerdPicture from "@/components/herd/atoms/HerdPicture.vue"
defineProps({
    name: String,
    role: String
})
</script>

<template>
    <div class="herd-team-member">
        <HerdPicture></HerdPicture>
        <div class="herd-team-description">
            <span class="name">{{ name }}</span>
            <span>{{ role }}</span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";

.herd-team-member{
    display: flex;
    gap: 1rem;
}

.herd-team-description{
    display: flex;
    flex-direction: column;
}

.name {
    text-transform: uppercase;
    font-weight: 800;
}

@media (min-width: $breakpoint-s) {
    .name {
        letter-spacing: 1px;
    }
}

@media (min-width: $breakpoint-m) {
    .name {
        letter-spacing: 2px;
    }
}

@media (min-width: $breakpoint-l) {
    .name {
        letter-spacing: 4px;
    }
}
</style>