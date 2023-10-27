<script setup>
import { RouterView } from 'vue-router'
</script>
<template>
  <RouterView />
</template>
<script>
  import { setTheme } from './utils/theme';
  export default {
    created() {
     setTheme(localStorage.getItem('theme') == 'dark' ? true : false)
    }
  } 
</script>