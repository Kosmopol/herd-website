<template>
    <div class="carousel">
      <!-- Slides -->
      <div
        class="carousel-slides"
        :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
      >
        <div
          v-for="(slotName, index) in slideElements"
          :key="index"
          class="carousel-slide"
        >
          <slot :name="slotName" />
        </div>
      </div>
  
      <!-- Navigation -->
      <button
        v-if="showControls"
        class="carousel-control prev"
        @click="prevSlide"
        aria-label="Previous Slide"
      >
        &lsaquo;
      </button>
      <button
        v-if="showControls"
        class="carousel-control next"
        @click="nextSlide"
        aria-label="Next Slide"
      >
        &rsaquo;
      </button>
  
      <!-- Dots -->
      <div v-if="showDots" class="carousel-dots">
        <button
          v-for="(slotName, index) in slideElements"
          :key="index"
          :class="{ active: currentIndex === index }"
          @click="goToSlide(index)"
          aria-label="Go to Slide"
        ></button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onBeforeUnmount, computed, getCurrentInstance } from "vue";
  
  // Props
  const props = defineProps({
    autoPlay: {
      type: Boolean,
      default: false,
    },
    interval: {
      type: Number,
  
      default: 3000,
    },
    showControls: {
      type: Boolean,
      default: true,
    },
    showDots: {
      type: Boolean,
      default: true,
    },
  });
  
  // State and variables
  const currentIndex = ref(0);
  let intervalId = null;
  
  // Methods
  const slideElements = computed(() => {
    // Dynamically detect all slots starting with "slide-"
    const slots = Object.keys(getCurrentInstance().slots).filter((key) =>
      key.startsWith("slide-")
    );
    return slots;
  });
  
  const nextSlide = () => {
    currentIndex.value = (currentIndex.value + 1) % slideElements.value.length;
  };
  
  const prevSlide = () => {
    currentIndex.value =
      (currentIndex.value - 1 + slideElements.value.length) %
      slideElements.value.length;
  };
  
  const goToSlide = (index) => {
    currentIndex.value = index;
  };
  
  const startAutoPlay = () => {
    if (props.autoPlay) {
      intervalId = setInterval(nextSlide, props.interval);
    }
  };
  
  const stopAutoPlay = () => {
    if (intervalId) {
      clearInterval(intervalId);
      intervalId = null;
    }
  };
  
  // Lifecycle hooks
  onMounted(() => {
    startAutoPlay();
  });
  
  onBeforeUnmount(() => {
    stopAutoPlay();
  });
  </script>
  
  <style scoped>
  .carousel {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 500px; /* Adjust this as needed */
  }
  
  .carousel-slides {
    display: flex;
    transition: transform 0.5s ease-in-out;
  }
  
  .carousel-slide {
    flex: 0 0 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: #ccc; /* Optional background */
  }
  
  .carousel-control {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
    font-size: 20px;
  }
  
  .carousel-control.prev {
    left: 10px;
  }
  
  .carousel-control.next {
    right: 10px;
  }
  
  .carousel-dots {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 5px;
  }
  
  .carousel-dots button {
    width: 10px;
    height: 10px;
    background: rgba(255, 255, 255, 0.5);
    border: none;
    border-radius: 50%;
    cursor: pointer;
  }
  
  .carousel-dots button.active {
    background: white;
  }
  </style>
  