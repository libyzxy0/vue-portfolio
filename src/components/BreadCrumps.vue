<script setup>
  defineProps({
    currentLocation: String, 
    previousLocation: String
  })
</script>
<template>
  <p class="breadcrumps"><a @click="$router.push({ path: `/${previousLocation.toLowerCase() == 'home' ? '' : previousLocation.toLowerCase() }` })">{{ previousLocation }}</a> ＞ <a @click="$router.push({ path: `/${currentLocation.toLowerCase()}`})" class="active">{{ currentLocation }}</a></p>
</template>
<style scoped>
  .breadcrumps {
  margin-left: 17px;
  color: var(--secondary);
  font-size: 14px;
}
.breadcrumps a {
  text-decoration: none;
  color: var(--primary);
  transition: 0.3s;
}
.breadcrumps a:hover {
  color: var(--secondary);
  text-decoration: underline;
}
.breadcrumps .active {
  text-decoration: none;
  color: var(--secondary);
  transition: 0.3s;
}
.breadcrumps .active:hover {
  color: var(--secondary);
  text-decoration: underline;
}
</style>