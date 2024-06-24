<template>
  <div class="home-page">
    <MainHeader />
    <HeaderContent />
    <ProductCatalog />
    <MainFooter />
  </div>
</template>

<script>
import MainHeader from "@/components/MainHeader.vue";
import HeaderContent from "@/components/HeaderContent.vue";
import ProductCatalog from "@/components/ProductCatalog.vue";
import MainFooter from "@/components/MainFooter.vue";

export default {
  components: {
    MainHeader,
    HeaderContent,
    ProductCatalog,
    MainFooter,
  },
};
</script>

<style lang="scss">
.wrapper {
  @include wrapper;
}
</style>
