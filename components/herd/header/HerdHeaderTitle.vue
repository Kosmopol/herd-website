<script lang="ts" setup>
import imgHerdTitle from "~/assets/images/Herdlogo2.png"
</script>

<template>
    <div class="header-title">
        <NuxtLink class="header-title-link" to="/#home">
            <img class="header-title-link-img" :src="imgHerdTitle" alt="herd game logo" height="120px"/>
        </NuxtLink>
    </div>
</template>

<style scoped lang="scss">
@import "@/assets/scss/variables.scss";


.header-title {
    text-transform: uppercase;
    display: flex;
    cursor: pointer;
    font-size: 1.3rem;
    max-height: 64px;
}

.header-title-link {
    text-decoration: none;
    color: var(--link-color-1);
  
}

.header-title-link-img{
 margin: -30px;
}

.h1-fl {
    font-size: inherit;
}

@media (min-width: $breakpoint-m) {
    .header-title {
        font-size: 1.50rem;
    }
}
</style>