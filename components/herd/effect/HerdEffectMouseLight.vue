<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
const effectElement = ref(null)
const changePos = (event: MouseEvent) => {
    if (!effectElement.value)
        return
    effectElement.value.style.left = event.pageX + 'px'
    effectElement.value.style.top = event.pageY + 'px'
}

const throttle=function(fn, wait){
    let throttled = false;
    return function(...args){
        if(!throttled){
            fn.apply(this,args);
            throttled = true;
            setTimeout(()=>{
                throttled = false;
            }, wait);
        }
    }
}

const throttleChangePos= throttle(changePos,180)
onMounted(() => {
    document.addEventListener("mousemove",  throttleChangePos);
})

onUnmounted(() => {
    document.removeEventListener("mousemove",  throttleChangePos);
})
</script>

<template>
    <div class="page">
        <div ref="effectElement" class="mouse-effect">
            <div class="light-effect"></div>
        </div>
    </div>
</template>

<style lang="scss">
@import "@/assets/scss/variables.scss";

.page {
    position: absolute;
    overflow: hidden;
    width: 100%;
    height: 100%;
    pointer-events: none;
}

.mouse-effect {
    top: -150px;
    left: -300px;
    position: relative;
    transition: all 0.6s linear;
}

.light-effect {
    position: absolute;
    transform: translate(-50px, -50px);
    filter: blur(55px);
    background-color: rgb(255, 255, 255,0.3);
    width: 100px;
    height: 100px;
    border-radius: 50%;
    z-index: 100;
    user-select: none;
    pointer-events: none;
}

@media (min-width: $breakpoint-s) {
    .light-effect {
        filter: blur(85px);
        transform: translate(-75px, 75px);
        width: 150px;
        height: 150px;
    }
}

@media (min-width: $breakpoint-m) {
    .light-effect {
        filter: blur(110px);
        transform: translate(-100px, -100px);
        width: 200px;
        height: 200px;
    }
}
</style>