<script setup lang="ts">
import HerdPicture from "@/components/herd/atoms/HerdPicture.vue"
import { PictureSizeEnum } from "~/domain/enums/PictureSizeEnum";
defineProps({
    name: String,
    role: String,
    citation: String
})
</script>

<template>
    <div class="herd-advisory-board-member">
        <HerdPicture :size=PictureSizeEnum.large></HerdPicture>
        <div class="herd-advisory-board-member-description">
            <span class="herd-advisory-board-member-title">{{ name }}</span>
            <span class="herd-advisory-board-member-info" v-if="role">{{ role }}</span>
            <span class="herd-advisory-board-member-citation">"{{ citation }}"</span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";

.herd-advisory-board-member {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    width: 80%;
}

.herd-advisory-board-member-description {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
}

.herd-advisory-board-member-title {
    display: flex;
    flex: 1;
    text-transform: uppercase;
    font-size: 2rem;
    font-weight: 800;
}

.herd-advisory-board-member-info {
    display: flex;
    flex: 1;
    text-transform: uppercase;
    font-size: 1.1rem;
    font-weight: 800;
}

.herd-advisory-board-member-citation {
    display: flex;
    flex: 1;
    font-size: 1.5rem;
    margin-top: 2rem;
    font-weight: 800;

}

@media (min-width: $breakpoint-s) {
    .herd-advisory-board-member-title {
        letter-spacing: 1px;
    }
}

@media (min-width: $breakpoint-m) {
    .herd-advisory-board-member-title {
        letter-spacing: 2px;
    }
}

@media (min-width: $breakpoint-l) {
    .herd-advisory-board-member-title {
        letter-spacing: 4px;
    }
}
</style>