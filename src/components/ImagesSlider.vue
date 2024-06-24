<!-- Так и не получилось нормально встроить этот компонент, не получается правильно передать данные из массива variants, оставила просто для наглядности -->
<template>
  <div class="image-slider">
    <button @click="prevImage" class="slider-btn prev-btn">&lt;</button>
    <img :src="currentImageUrl" alt="Product Image" class="product-image" />
    <button @click="nextImage" class="slider-btn next-btn">&gt;</button>
  </div>
</template>

<script>
export default {
  props: ["images"],
  data() {
    return {
      currentIndex: 0,
    };
  },
  computed: {
    currentImageUrl() {
      return this.images[this.currentIndex];
    },
  },
  methods: {
    nextImage() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    },
    prevImage() {
      this.currentIndex =
        (this.currentIndex - 1 + this.images.length) % this.images.length;
    },
  },
};
</script>

<style scoped>
.image-slider {
  display: flex;
  align-items: center;

  .product-image {
    max-width: 100%;
    height: auto;
    margin: 0 10px;
  }

  .slider-btn {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 24px;
  }
}
</style>
