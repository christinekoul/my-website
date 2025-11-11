<template>
  <section class="about-container">
    <div class="text">
      <h1>About Me</h1>
      <p>
        I’m Christine. A front-end developer, problem solver, and puzzle enthusiast based in Brooklyn, NY. I graduated from Rensselaer Polytechnic Institute in 2021 with a B.S. in Computer Science and Mathematics, and for the past four years, I’ve been building and maintaining cutting-edge, reliable reporting solutions at FactSet. These days, I’m diving into the world of Generative AI, where curiosity meets creativity in the best way. I also lead a weekly Web Development meeting dedicated to continual learning and development.
      </p>
      <p>
        When I’m not coding, I’m usually off exploring. Recent adventures have taken me from hiking in Peru and chasing waterfalls in Iceland to café-hopping in London and Dublin, lounging in Hawaii, and eating my weight in pasta across Italy. Back home, I’m powered by yoga, chocolate chip cookies, and a healthy obsession with reality TV. I’m a curious mix of left-brain logic and right-brain creativity, happiest when I’m crafting, reading, or picking up a new hobby just for fun. Whether I’m debugging code or perfecting my crochet stitches, I approach it all with the same energy: tenacious, a little whimsical, and always up for learning something new.
      </p>
    </div>

    <div class="photo">
      <img src="@/assets/headshot.png" alt="Christine" /> /* TODO: replace with higher resolution image */
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutContent",
};
</script>

<style scoped>
.about-container {
  display: flex;
  gap: 40px;
  align-items: flex-start;
  padding: 40px 5%;
  /* keep content below the navbar height */
  min-height: calc(100vh - var(--navbar-height));
  box-sizing: border-box;
}

/* text column takes remaining space */
.text {
  flex: 1;
}

/* image column */
.photo {
  flex: 0 0 auto;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}

.photo img {
  width: 480px;
  max-width: 70%;
  height: auto;
}

/* responsive: stack on small screens */
@media (max-width: 768px) {
  .about-container {
    flex-direction: column;
    padding-top: 24px;
    gap: 20px;
  }

  .photo img {
    width: 100%;
    max-width: none;
    border-radius: 2px;
  }
}

h1, p {
  text-align: left;
  margin-left: 0;
  margin-right: 0;
}
</style>
