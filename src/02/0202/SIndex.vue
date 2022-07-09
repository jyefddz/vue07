<template>
  <div>
   <div>
    <p>体育的首页</p>
    <h2>背带裤</h2>
   </div>
   <div>
    <router-link to="/sports/sindex/sing">唱歌</router-link>&nbsp;
    <router-link to="/sports/sindex/dance">跳舞</router-link>&nbsp;
    <router-link to="/sports/sindex/basketball">篮球</router-link>
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