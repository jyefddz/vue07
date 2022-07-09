<template>
  <div>
    <div>
      <router-link to="/life">主页</router-link>&nbsp;
      <router-link to="/news">新闻</router-link>&nbsp;
      <router-link to="/sports">体育</router-link>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.router-link-active {
  color: red;
}
</style>