<template>
  <div class="home">
    <h1>welcome to <span>7-notice-board</span></h1>
  </div>
</template>

<script>
export default {
  name: "HomeView",
};
</script>
<style lang="scss" scoped>
.home {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    text-transform: capitalize;
    font: 600 40px "Poppins", sans-serif;
    color: teal;
    span {
      background: linear-gradient(to bottom, green, purple);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-size: 100px;
      display: block;
    }
  }
}
</style>
