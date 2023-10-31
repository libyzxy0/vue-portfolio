<script setup>
  import NavBar from '../components/NavBar.vue';
  import Footer from '../components/Footer.vue';
  import BreadCrumps from '../components/BreadCrumps.vue';
</script>
<template>
  <NavBar />
  <section class="about">
    <BreadCrumps previousLocation="Home" currentLocation="About" />
      <div class="container">
        
        <h1>About ME</h1>
        <img class="me-image" src="/me.png" alt="libyzxy0" />
        <p class="p1">I am Jan Liby Dela Costa a 15-year-old tech enthusiast, loves diving into the world of Full Stack Web Development, especially the MEVN Stack, with an infectious enthusiasm for discovering new ideas every day.</p>
        
        <div class="action-buttons">
          <button>Download CV</button>
        </div>
        
        <div class="line"></div>
        
        <h4>Technologies 🚀</h4>
        
  <div>
  <img src="https://img.shields.io/badge/HTML-239120?style=for-the-badge&logo=html5&logoColor=white" />
  <img src="https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
  <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D" />
  <img src="https://img.shields.io/badge/jquery-%230769AD.svg?style=for-the-badge&logo=jquery&logoColor=white" />
  <img src="https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens" />
  <img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB" />
  <img src="https://img.shields.io/badge/Socket.io-black?style=for-the-badge&logo=socket.io&badgeColor=010101" />
  <img src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white" />
  <img src="https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white" />
  <img src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white" />
  <img src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white" />
  <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" />
  <img src="https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white" />
  <img src="https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7" />
  <img src="https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white" />
  <img src="https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase" />
  <img src="https://img.shields.io/badge/github%20pages-121013?style=for-the-badge&logo=github&logoColor=white" />
  <img src="https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white" />
  </div>
    <div class="line"></div>
        <h4>Education 🎒</h4>
        
        <div class="b-cards">
          <div class="card">
            <h4>Elementary</h4>
            <p>Studied grade K - 6 at <b>Balighot Elementary School</b>.</p>
          </div>
          <div class="card">
            <h4>Junior High School</h4>
            <p>Studied grade 7 - 10 at <b>Sto. Christo National High School</b>.</p>
          </div>
          <div class="card">
            <h4>Graphic Design & Computer Operations</h4>
            <p>Studied Graphic Designing and Basic Computer Operations at <b>Shiawase Institute of Entrepreneurship and Sciences</b>.</p>
          </div>
        </div>
        
        <div class="line"></div>
        <h4>Why Work With Me?👌</h4>
        
        <div class="b-cards">
          <div class="card">
            <h4>Great Communicator</h4>
            <p>I'm a <b>Great Communicator</b> & love to invest the necessary time to understand the customer's problem very well.</p>
          </div>
          <div class="card">
            <h4>Friendly</h4>
            <p>My consistently show warmth and kindness in interactions, making people feel comfortable and valued.</p>
          </div>
        </div>
        
      </div>
    </section>
  <Footer />
</template>