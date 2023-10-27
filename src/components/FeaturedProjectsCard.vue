<script setup>
  defineProps({
    title: String, 
    description: String, 
    url: String
  })
</script>
<template>
  <li>
    <h3 @click="$router.push(url)">{{ title }}</h3>
    <p>{{ description }}</p>
    <div class="line"></div>
   </li>
</template>
<style scoped>
  li {
    margin-top: 1rem;
}
 li h3 {
    color: var(--secondary);
    margin-bottom: 10px;
}
 li h3:hover {
    text-decoration: underline;
}
</style>