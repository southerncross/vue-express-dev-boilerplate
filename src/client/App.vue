<template>
  <div class="app full-height">
    <h1>{{ message }}</h1>
    <a v-link="{ name: 'hello' }">Goto Hello</a>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      message: 'Express + Vue boilerplate'
    }
  }
}
</script>

<style>
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
</style>
