module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/styles/variables.scss";`,
      },
      scss: {
        additionalData: `@import "@/assets/styles/variables.scss";`,
      },
    },
  },
};
