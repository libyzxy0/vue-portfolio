<script setup>
  import NavBar from '../components/NavBar.vue';
  import Footer from '../components/Footer.vue';
  import ProjectCard from '../components/FeaturedProjectsCard.vue';
</script>
<template>
  <NavBar />
  <section class="hero">
      <div class="container">
        <h1>{{ typewriter }}</h1>
        <p> My name is Jan Liby Dela Costa and i'am a 15-year-old tech enthusiast, loves diving into the world of Full Stack Web Development, especially the MEVN Stack, with an infectious enthusiasm for discovering new ideas every day.</p>
        <p class="p1">See my featured projects below.</p>
        <p class="p1">Social Links:</p>
        <div class="social-links">
          <a href="https://facebook.com/libyzxy0"><li class="fa fa-facebook"></li></a>
        <a href="https://github.com/libyzxy0"><li class="fa fa-github"></li></a>
        <a href="https://www.linkedin.com/in/libyzxy0"><li class="fa fa-linkedin"></li></a>
        <a href="https://instagram.com/libyzxy0"><li class="fa fa-instagram"></li></a>
        <a href="mailto:janlibydelacosta@gmail.com"><li class="fa fa-envelope"></li></a>
        </div>
      </div>
      <div class="nav_line"></div>
      <div class="container projects">
        <h2>Featured Projects</h2>
        <ul class="projects">
          <ProjectCard title="Not Gonna Lie | Secret messages confession" description="A PWA web application where you can send message anonymously, the idea came from ngl.link." url="https://github.com/libyzxy0/notgonnalie" />
          <ProjectCard title="TensorFlow Handpose Recognition" description="A simple handpose prediction using tensorflow handpose model. ✌️ Or 👍" url="https://github.com/libyzxy0/handpose-tfjs" />
          <ProjectCard title="Shoti API" description="Shoti API is a API that sending lots of beautiful girl videos from tiktok.com." url="https://replit.com/@libyzxy0/shoti-api" />
        </ul>
      </div>
    </section>
   <Footer />
</template>

<script>
export default {
  data() {
    return {
      typewriter: "",
      texts: ["I'm Jan Liby Dela Costa", "A Full Stack Web Developer", "Liby!"],
      currentTextIndex: 0,
      i: 0,
      isReversed: false,
      isDark: false
    };
  },
  created() {
    this.startWriting();
  },
  methods: {
    startWriting() {
      setInterval(() => {
        this.typeWriter();
      }, 50);
    },
    typeWriter() {
      if (!this.isReversed) {
        this.typewriter += this.texts[this.currentTextIndex].charAt(this.i);
        this.i++;

        if (this.i >= this.texts[this.currentTextIndex].length) {
          setTimeout(() => this.reverseType(), 1000);
        }
      } else {
        this.typewriter = this.texts[this.currentTextIndex].substr(0, this.i);
        this.i--;

        if (this.i < 0) {
          if (this.currentTextIndex < this.texts.length - 1) {
            this.currentTextIndex++;
            this.isReversed = false;
            setTimeout(() => this.typeWriter(), 1000);
          } else {
            this.isReversed = false; // Stop reversing, and the last text will stay
          }
        }
      }
    },
    reverseType() {
      this.isReversed = true;
    },
  },
};
</script>
