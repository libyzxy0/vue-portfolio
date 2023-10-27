<template>
  <footer>
      <div class="social">
        <a href="https://facebook.com/libyzxy0"><li class="fa fa-facebook"></li></a>
        <a href="https://github.com/libyzxy0"><li class="fa fa-github"></li></a>
        <a href="https://www.linkedin.com/in/libyzxy0"><li class="fa fa-linkedin"></li></a>
        <a href="https://instagram.com/libyzxy0"><li class="fa fa-instagram"></li></a>
        <a href="mailto:janlibydelacosta@gmail.com"><li class="fa fa-envelope"></li></a>
      </div>
      <div class="fline"></div>
      <p> Copyright © 2023, All rights reserved. </p>
    </footer>
</template>
<style scoped>
  footer {
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 6rem;
    text-align: center;
}
footer .social {
    margin-top: 0.5rem;
}
footer .social li {
    font-size: 21px;
    color: var(--primary);
    margin: 0px 8px;
    transition: 0.3s;
}
footer p {
    margin-bottom: 1.5rem;
    margin-top: 0.5rem;
    color: var(--primary);
}
footer .social li:hover, .hero .container .social-links li:hover {
  color: var(--secondary);
}
</style>