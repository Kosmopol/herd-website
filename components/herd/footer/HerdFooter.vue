<script lang="ts" setup>
import HerdFooterSocials from "@/components/herd/footer/HerdFooterSocials.vue";
</script>

<template>
    <footer class="footer">
        <HerdFooterSocials></HerdFooterSocials>
        <div class="footer-switch">
            <!-- <HerdLightModeSwitch></HerdLightModeSwitch> -->
        </div>
    </footer>
</template>

<style lang="scss" scoped>
.footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 1rem 0;
}

.footer-switch {
    margin-top: 3rem;
    margin-bottom: 2rem;
}
</style>