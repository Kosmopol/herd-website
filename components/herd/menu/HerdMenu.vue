<script setup lang="ts">
import HerdMenuLink from '@/components/herd/menu/HerdMenuLink.vue';

const { show } = defineProps({ show: Boolean })

const emits = defineEmits(["close"])
const closeMenu = () => {
    emits("close")
}
</script>

<template>
    <Teleport to="body">
        <Transition name="slide">
            <div v-if="show" class="menu-mobile">
                <div class="close-button">
                    <div @click="closeMenu" class="icon-close-container">
                        X
                    </div>
                </div>
                <div class="menu-links">
                    <HerdMenuLink @click="closeMenu" label="Home" link="/#home"></HerdMenuLink>
                    <HerdMenuLink @click="closeMenu" label="Game" link="/#game"></HerdMenuLink>
                    <HerdMenuLink @click="closeMenu" label="Cardano" link="/#crypto"></HerdMenuLink>
                    <HerdMenuLink @click="closeMenu" label="Team" link="/#team"></HerdMenuLink>
                    <HerdMenuLink @click="closeMenu" label="Follow us" link="/#follow"></HerdMenuLink>
                </div>
            </div>
        </Transition>
    </Teleport>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";

.menu-mobile {
    position: fixed;
    background: var(--background-color-1);
    width: 100vw;
    height: 100%;
    z-index: 1000;
    top: 0;
    flex-direction: column;
    transition: transform 0.4s ease-in;
}

.slide-enter-active,
.slide-leave-active {
    transform: translateX(0);
}

.slide-enter-from,
.slide-leave-to {
    transform: translateX(100vw);
}

.close-button {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    height: 8rem;
    font-size: 3rem;
    cursor: pointer;
    margin-bottom: 1rem;
}

.icon-close-container {
    margin-right: 3rem;
    margin-top: 3rem;
    font-family: sans-serif;
    color: var(--link-color-1);
}

.menu-links {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 2rem;
    gap: 1.5rem;
}

@media (min-width: $breakpoint-s) {


    .close-button {

        font-size: 3rem;
    }
}
</style>
