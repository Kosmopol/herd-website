<script setup lang="ts">
import HerdPicture from "@/components/herd/atoms/HerdPicture.vue"
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

defineProps({
    name: String,
    role: String,
    photo: String,
    linkedin: String,
    website: String,
})
</script>

<template>
    <div class="herd-team-member">
        <HerdPicture :imgUrl="photo"></HerdPicture>
        <div class="herd-team-description">
            <span class="name">{{ name }}</span>
            <span>{{ role }}</span>
            <div class="herd-team-socials">
                <NuxtLink class="icon-link" v-if="linkedin" :to="linkedin" target="_blank">
                    <font-awesome class="icon" :icon="faLinkedin" />
                </NuxtLink>
                <NuxtLink class="icon-link" v-if="website" :to="website" target="_blank">
                    <font-awesome class="icon" :icon="faLink" />
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";

.herd-team-member {
    display: flex;
    gap: 1rem;
}

.herd-team-description {
    display: flex;
    margin-left: 2px;
    flex-direction: column;
    justify-content: center;
}

.herd-team-socials {
    display: flex;
    gap: 1rem;
}

.icon-link {
    margin-top: 12px;
    color: inherit;
    text-transform: nones;
}

.icon{
    font-size: 1.5rem;
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