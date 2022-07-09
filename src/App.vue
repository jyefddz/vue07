<template>
  <div>
    <div>
      <router-link to="/index">首页</router-link> 
      <router-link to="/class">分类</router-link> 
      <router-link to="/orders">订单</router-link> 
      <router-link to="/my">我的</router-link> 
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
.router-link-active{
  color:red;
}
</style>