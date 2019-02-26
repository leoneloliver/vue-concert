<template>
  <div id="app">
    <div id="nav">
      <div class="container">
        <div class="row">
          <div>
            <img alt="Vue logo" src="../src/assets/logo-new.png" class="logo"/>
          </div>
          <div class="menu">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link>
          </div>
        </div>
        
      </div>
      </div>
    <router-view />
    <div id="footer">Made With <span>❤</span> by Leonel Oliveira</div>
  </div>
</template>
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#nav {
    padding: 10px 30px 2px;
    background: #ffffff;
    position: fixed;
    width: 100%;
    z-index: 99999;
    margin-top: -80px;
    box-shadow: 1px 2px 3px #ccc;
}
#nav a {
  font-weight: bold;
  color: #8968c0;
}

#nav a.router-link-exact-active {
  color: #da6d56;
}
</style>
