<template>
  <div id="app">
    <div id="nav">
      <div class="container">
        <div class="row">
          <div>
            <img alt="Vue logo" src="../src/assets/logo.png" class="logo"/>
          </div>
          <div>
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link>
          </div>
        </div>
        
      </div>
      </div>
    <router-view />
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
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
