<template>
  <div>
    <div><h2>体育改变人生</h2></div>
    <div>
      <router-link to="/sports/sindex">体育的主页</router-link>&nbsp;
      <router-link to="/sports/nationals">国内的体育</router-link>&nbsp;
      <router-link to="/sports/internationals">国外的体育</router-link>
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
</style>