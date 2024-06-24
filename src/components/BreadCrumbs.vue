<template>
  <nav
    aria-label="breadcrumb"
    data-aos="fade-left"
    data-aos-anchor="#example-anchor"
    data-aos-offset="500"
    data-aos-duration="1000"
  >
    <ol class="breadcrumbs">
      <li v-for="(item, index) in items" :key="index" class="breadcrumb-item">
        <router-link v-if="item.href" :to="item.href">{{
          item.text
        }}</router-link>
        <span v-else>{{ item.text }}</span>
      </li>
    </ol>
  </nav>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.breadcrumbs {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;

  .breadcrumb-item {
    color: #8b8383;
    font-size: 13px;
    transition: color 0.3s ease, transform 0.3s ease;
    position: relative;
    display: inline-block;

    a {
      text-decoration: none;
      color: #e0e0e0;
      @include linkStyle($white-color, $red-color);
    }

    &:not(:last-child)::after {
      content: " / ";
      padding: 0 8px;
    }

    &:hover {
      transform: scale(1.02);
      cursor: pointer;
      color: $dark-grey-color;
    }

    @media (max-width: 768px) {
      display: none;
    }
  }
}
</style>
