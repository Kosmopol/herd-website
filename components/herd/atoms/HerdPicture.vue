<script lang="ts" setup>
import { PictureSizeEnum } from '~/domain/enums/PictureSizeEnum';

const props = defineProps({
    size: {
        type: String as PropType<PictureSizeEnum>,
        default: PictureSizeEnum.medium
    },
    imgUrl: String
})

const sizeClass = computed(() => {
    return props.size === PictureSizeEnum.large ? 'picture-l' : 'picture-m';
})
</script>

<template>
    <div class="picture-container" :class="sizeClass">
        <img v-if="imgUrl" class="picture-img" :src="imgUrl">
    </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";

.picture-container {
    background-color: var(--background-color-3);
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    border: 0;
    border: 1px solid var(--color-1);
}

.picture-m {
    width: 90px;
    height: 90px;
}

.picture-l {
    width: 200px;
    height: 200px;
}

.picture-img {
    border-radius: 100%;
    object-fit: cover;
    width: 100%;
    height: 100%;
}

@media (min-width: $breakpoint-m) {
    .picture-m {
        width: 110px;
        height: 110px;
    }

}

@media (min-width: $breakpoint-l) {
    .picture-m {
        width: 120px;
        height: 120px;
    }

}
</style>