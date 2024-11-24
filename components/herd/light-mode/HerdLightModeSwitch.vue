<script setup lang="ts">
const toggleSwitch = ref(null)
const checked = ref(false)

const switchTheme=(e: Event ) =>{
    if (e.target.checked) {
        checked.value=true
        document.documentElement.setAttribute('data-theme', 'dark');
    }
    else {
        checked.value=false
        document.documentElement.setAttribute('data-theme', 'light');
    }    
}
</script>
<template>
    <div class="theme-switch-wrapper">
        <label ref="toggleSwitch" class="theme-switch" for="checkbox">
            <input v-model="checked" @change="switchTheme" type="checkbox" id="checkbox" />
            <div class="slider round"></div>
        </label>
        <em>Light Mode</em>
    </div>
</template>

<style scoped lang="scss">
/*Simple css to style it like a toggle switch*/
.theme-switch-wrapper {
    display: flex;
    align-items: center;

    em {
        margin-left: 5px;
        font-size: 0.9rem;
    }
}

.theme-switch {
    display: inline-block;
    height: 17px;
    position: relative;
    width: 30px;
}

.theme-switch input {
    display: none;
}

.slider {
    background-color: #ccc;
    bottom: 0;
    cursor: pointer;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transition: .4s;
}

.slider:before {
    background-color: #fff;
    bottom: 2px;
    content: "";
    height: 13px;
    left: 2px;
    position: absolute;
    transition: .4s;
    width: 13px;
}

input:checked+.slider {
    background-color: #66bb6a;
}

input:checked+.slider:before {
    transform: translateX(13px);
}

.slider.round {
    border-radius: 34px;
}

.slider.round:before {
    border-radius: 50%;
}
</style>