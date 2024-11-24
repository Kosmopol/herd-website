<template>
    <section :id="id">
        <slot></slot>
    </section>
</template>

<script lang="ts" setup>
defineProps({
    id: String
})
</script>
