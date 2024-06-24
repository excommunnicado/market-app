<template>
  <div class="background-style">
    <div id="app">
      <nav></nav>
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style lang="scss">
// @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&display=swap");

body,
html {
  // font-family: "Montserrat", sans-serif;
  font-family: "Nunito Sans", sans-serif;
  color: #e0e0e0;
  margin: 0;
  padding: 0;
  background-color: black;
  // outline: 1px solid blue;
}

* {
  // outline: 1px solid red;
}

// .background-style {
//   background-color: black;
// }
</style>
