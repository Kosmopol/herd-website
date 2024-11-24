<script setup lang="ts">
import HerdHeaderTitle from '@/components/herd/header/HerdHeaderTitle.vue';
import HerdHeaderLink from '@/components/herd/header/HerdHeaderLink.vue';
import HerdMenu from '@/components/herd/menu/HerdMenu.vue';
import HerdBurger from '@/assets/svg/menu_burger.svg?raw'

const isMenuOpen = ref(false)

const openMenu = () => {
    isMenuOpen.value = true;
}

const closeMenu = () => {
    isMenuOpen.value = false;
}
</script>

<template>
    <header class="header">
        <div class="header-content">
            <HerdHeaderTitle class="header-title"></HerdHeaderTitle>
            <div class="header-links">
                <!-- <HerdHeaderLink label="Home" link="/#home"></HerdHeaderLink> -->
                <HerdHeaderLink label="Game" link="/#game"></HerdHeaderLink>
                <HerdHeaderLink label="Cardano" link="/#crypto"></HerdHeaderLink>
                <HerdHeaderLink label="Team" link="/#team"></HerdHeaderLink>
                <HerdHeaderLink label="Follow us" link="/#follow"></HerdHeaderLink>
            </div>
            <div class="header-burger-container">
                <div @click="openMenu" class="header-burger">
                    <div v-html="HerdBurger"></div>
                </div>
            </div>
            <HerdMenu @close="closeMenu" :show="isMenuOpen"></HerdMenu>
        </div>
    </header>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";

.header {
    position: static;
    margin-top: 80px;
}

.header-title{
    margin-left: 2rem;
    margin-right: 3rem;
}

.header-content {
    background-color: var(--background-color-1);
    position: fixed;
    top: 0;
    z-index: 1000;
    display: flex;
    flex: 1;
    justify-content: space-between;
    align-items: center;
    z-index: 100;
    min-height: 80px;
    width: 100%;
    box-shadow: 0 1px 12px rgba(255, 255, 255, 0.1);
    // box-shadow: 0 4px 10px rgba(255, 255, 255, 0.5); // Added white bottom box shadow
}

.header-links {
    margin-left: 2rem;
    display: none;
    justify-content: flex-start;
    align-items: center;
    flex: 1;
    gap: 3rem;
    margin-right: 4rem;
}

.header-burger-container {
    display: flex;
    flex: 1;
    justify-content: flex-end;
}

.header-burger {
    display: flex;
    justify-content: flex-end;
    width: 3rem;
    height: 3rem;
    margin-right: 1rem;
    cursor: pointer;
    align-items: center;
    color: var(--link-color-1);
}

@media (min-width: $breakpoint-s) {
    .header-burger {

        font-size: 4rem;
    }
}

@media (min-width: $breakpoint-m) {

    .header-links {
        display: flex;
    }

    .header-burger-container {
        display: none;
    }
}
</style>