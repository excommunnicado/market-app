<template>
  <div class="modal" @click.self="closeModal">
    <img :src="imageUrl" class="modal-content" />
  </div>
</template>

<script>
export default {
  props: {
    imageUrl: String,
  },
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;

  .modal-content {
    max-width: 80%;
    max-height: 80%;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
    border-radius: 8px;
  }
}
</style>
