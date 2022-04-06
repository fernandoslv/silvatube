<template>  
  <router-view />
</template>

<script>
import { mapState } from "vuex";

export default {
  created() {
    
  },
  computed: mapState(["listVideos"]),
};
</script>


<style lang="scss">
*{
  margin: 0;  
  padding: 0;
  border: 0; 
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  position: fixed;
  top: 0;  
  bottom: 0;
  height: 100%;
  width: 100%;
  background-image: linear-gradient(45deg, rgb(0, 0, 0), rgb(0, 53, 4), rgb(0, 0, 0));
  padding: 50px 0;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
