<template>
    <div class="app">
        <slot></slot>
    </div>
</template>


<style lang="scss" scoped>
.app {
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 100vh;
    margin: auto;
    box-sizing: border-box;
    scroll-margin-top: 80px;
    background: var(--background-color-2);
}
</style>