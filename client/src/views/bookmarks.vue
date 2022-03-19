<template>
  <div>
    <h1>this is the page for</h1>
    <span>Bookmarks</span>
  </div>
</template>

<script>
export default {
  name: "Bookmarks",
};
</script>

<style lang="scss" scoped>
div {
  width: 80vw;
  height: 100vh;
  background: rgb(229, 244, 236);
  color: rgb(49, 49, 49);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 50px;
  text-transform: capitalize;

  h1 {
    text-transform: capitalize;
    font: 600 50px "Poppins", sans-serif;
    background: linear-gradient(
      to bottom,
      rgb(5, 171, 159) 40%,
      white 55%,
      rgb(5, 171, 159) 60%,
      white 65%,
      rgb(5, 171, 159) 70%
    );
    background-clip: text;
    -webkit-background-clip: text;

    -webkit-text-fill-color: transparent;
  }
  span {
    color: purple;
    display: block;
    font: 700 60px "Poppins", sans-serif;
    cursor: pointer;
  }
}
</style>
