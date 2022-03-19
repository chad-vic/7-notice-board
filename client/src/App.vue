<template>
  <div class="menu">
    <div class="content">
      <router-link to="/" class="item">
        <button><i class="fa-solid fa-bars icon"></i></button>
        <p>all notifications</p></router-link
      >
      <router-link to="/important" class="item">
        <button><i class="fa-regular fa-flag icon"></i></button>
        <p>important</p>
      </router-link>
      <router-link to="/bookmarks" class="item"
        ><button><i class="fa-regular fa-bookmark icon"></i></button>
        <p>bookmarks</p>
      </router-link>
      <router-link to="/settings" class="item">
        <button><i class="fa-solid fa-gear icon"></i></button>
        <p>notification settings</p>
      </router-link>
      <router-link to="/" class="item">
        <button><i class="fa-solid fa-power-off icon"></i></button>
        <p>log out</p>
      </router-link>
    </div>
  </div>
  <router-view />
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,700;0,900;1,400&family=Russo+One&display=swap");
#app {
  font-family: "Poppins", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // color: #2c3e50;
  display: flex;
}

.menu {
  width: 20vw;
  height: 100vh;
  background: rgb(5, 171, 159);
  padding: 0;
  margin: 0;

  .content {
    width: 100%;
    margin: 0 auto;
    height: fit-content;
    padding-top: 20px;

    .item {
      width: 100%;
      height: 60px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      text-decoration: none;

      button {
        width: 25%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        border: none;
        background: transparent;

        .icon {
          display: block;
          color: white;
          width: 25%;
          font-size: 23px;
        }
      }

      p {
        width: 75%;
        color: white;
        text-transform: capitalize;
      }
    }
  }
}
// nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
