<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/img/logo-noodo.png"  />

    <div class="wrapper">

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/register">register</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

