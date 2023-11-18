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
     if (window.location.href === 'https://libyzxy0.netlify.app') {
       window.location.href = 'https://libyzxy0.xyz';
     }
     setTheme(localStorage.getItem('theme') == 'dark' ? true : false)
    }
  } 
</script>
