<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <h2>MyAgents</h2>
      <nav>
        <RouterLink to="/">使用</RouterLink>
        <RouterLink to="/about">关于</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style lang="less" scoped>
.wrapper {
  h2 {
    text-align: center;
    margin-top: 30px;
    font-size: 60px;
  }
  nav {
    text-align: center;
    margin: 30px auto;

    a {
      font-size: 24px;
      margin: 0 20px;
    }
  }
}
</style>
