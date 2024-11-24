<template>
    <main class="main-container">
        <slot></slot>    
    </main>
</template>

<style lang="scss" scoped>
.main-container{
    display: flex;
    flex:1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: var(--max-width-lineup);
    margin: 0 auto;
}
</style>