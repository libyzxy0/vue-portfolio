<script setup>
  import NavBar from '../components/NavBar.vue';
  import Footer from '../components/Footer.vue';
  import BreadCrumps from '../components/BreadCrumps.vue';
</script>
<template>
  <NavBar />
  <section class="about">
    <BreadCrumps previousLocation="Home" currentLocation="Projects" />
    <div class="container">
      <h1>Projects</h1>
    </div>
    <div class="card-container">
      <div class="card">
        <div class="img"><img src="" alt="NGL"></div>
        <div class="info">
          <div class="badges"><img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&amp;logo=node.js&amp;logoColor=white" alt="node"> <img src="https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&amp;logo=firebase" alt="firebase-%23039BE5"> <img src="https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&amp;logo=vuedotjs&amp;logoColor=%234FC08D" alt="vuejs-%2335495e"><img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&amp;logo=javascript&amp;logoColor=black" alt="JavaScript-F7DF1E"> <img src="https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&amp;logo=vercel&amp;logoColor=white" alt="vercel-%23000000"> <img src="https://img.shields.io/badge/JWT-black?style=for-the-badge&amp;logo=JSON%20web%20tokens" alt="JWT-black"> <img src="https://img.shields.io/badge/Socket.io-black?style=for-the-badge&amp;logo=socket.io&amp;badgeColor=010101&quot;" alt="Socket"></div>
          <h2 @click="goto('https://notgonnalie.vercel.app')">Not Gonna Lie | Secret messages confession</h2>
          <p>A PWA web application where you can send message anonymously, the idea came from ngl.link.</p>
        </div>
      </div>
    </div>
  </section>          
  <Footer />
</template>
<script>
  export default {
    methods: {
      goto(url) {
        window.location.href = url;
      }
    }
  }
</script>