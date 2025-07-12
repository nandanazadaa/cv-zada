<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import profileImage from '/zada.png';

// States for About Section Parallax
const parallaxOffset = ref(0);
const imageParallaxOffset = ref(0);
const aboutSectionRef = ref(null); // Reference for this specific section


// Handle scroll event for About Section Parallax
const handleAboutParallaxScroll = () => {
  if (aboutSectionRef.value) {
    const scrollY = window.scrollY;
    const sectionTop = aboutSectionRef.value.offsetTop;
    const sectionHeight = aboutSectionRef.value.offsetHeight;
    const windowHeight = window.innerHeight;

    // Calculate how far into the section we've scrolled
    const scrollProgress = Math.max(0, Math.min(1, (scrollY - sectionTop + windowHeight) / (sectionHeight + windowHeight)));

    // Adjust parallax speed as needed
    parallaxOffset.value = scrollProgress * 100; // Background moves 100px total
    imageParallaxOffset.value = scrollProgress * 50; // Image moves 50px total (slower than background)
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleAboutParallaxScroll);
  handleAboutParallaxScroll(); // Set initial position on load
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleAboutParallaxScroll);
});
</script>

<template>
  <section
    id="about"
    ref="aboutSectionRef"
    class="py-20 px-4 bg-space-dark dark:bg-space-darker relative overflow-hidden"
  >
    <div
      class="absolute inset-0 z-0 pointer-events-none transition-transform duration-0"
      :style="{ transform: `translateY(${parallaxOffset * -0.5}px)` }"
    >
      <div class="absolute top-[10%] left-[5%] w-60 h-60 bg-orange-glow/15 dark:bg-dark-orange-glow/15 rounded-full blur-3xl animate-galaxy-glow-slow"></div>
      <div class="absolute bottom-[20%] right-[10%] w-80 h-80 bg-violet-glow/15 dark:bg-dark-violet-glow/15 rounded-full blur-3xl animate-galaxy-glow-slow delay-1000"></div>
      <div class="absolute top-[50%] left-[30%] w-72 h-72 bg-orange-glow/10 dark:bg-dark-orange-glow/10 rounded-full blur-3xl animate-galaxy-glow-slow delay-2000"></div>
    </div>

    <div class="container mx-auto relative z-10 flex flex-col items-center">
      <div class="text-center mb-16 fade-in-content">
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
          Beyond <span class="bg-gradient-to-r from-orange-400 to-violet-600 dark:from-dark-orange-glow dark:to-dark-violet-glow bg-clip-text text-transparent">The Horizon</span>
        </h2>
        <p class="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
          From the early days of curiosity to becoming a digital explorer, my journey has always revolved around one mission — to create.
        </p>
      </div>

      <div class="flex flex-col items-center mb-20 max-w-4xl mx-auto">
        <div
          class="relative w-[280px] h-[320px] md:w-[320px] md:h-[360px] lg:w-[360px] lg:h-[400px] overflow-hidden rounded-full transform rotate-[-6deg] transition-all duration-500 hover:rotate-0 hover:scale-105 fade-in-content delay-400 mb-12 custom-profile-shape"
          :style="{ transform: `translateY(${imageParallaxOffset * 0.5}px)` }"
        >
          <img
            :src="profileImage"
            alt="profileimage"
            class="absolute inset-0 w-full h-full object-cover custom-profile-img"
          />
          <div class="absolute inset-0 border-4 border-violet-400 dark:border-dark-violet-glow custom-profile-border"></div>
        </div>

        <div class="fade-in-content delay-200 text-center max-w-2xl mx-auto">
          <h3 class="text-3xl font-bold text-white mb-6">My Interstellar Voyage</h3>
          <p class="text-gray-400 mb-4 leading-relaxed">
            With a passion for technology and design, I navigate the universe of code, transforming abstract ideas into interactive experiences.
          </p>
          <p class="text-gray-400 leading-relaxed">
            Fueled by creativity and driven by purpose, I continue to craft solutions that don't just work — but inspire.
          </p>
        </div>
      </div>

      <div class="grid md:grid-cols-3 gap-8 w-full">
        <div
          v-for="(feature, index) in features"
          :key="index"
          class="bg-space-darker/60 dark:bg-space-dark/60 backdrop-blur-md border border-gray-700/50 rounded-2xl p-6 text-center transition-all duration-300 hover:border-orange-400/50 dark:hover:border-dark-orange-glow/50 hover:shadow-xl hover:-translate-y-2 fade-in-content"
          :style="{ animationDelay: `${0.6 + index * 0.2}s` }"
        >
          <div class="mb-4 flex justify-center" v-html="feature.icon"></div>
          <h3 class="text-xl font-bold text-white mb-3">{{ feature.title }}</h3>
          <p class="text-gray-400 leading-relaxed">{{ feature.description }}</p>
        </div>
      </div>

      <div class="mt-20 w-full flex justify-center animate-bounce-slow z-10">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-10 w-10 text-orange-400 dark:text-dark-orange-glow"><path d="m6 9 6 6 6-6"/></svg>
      </div>

    </div>
  </section>
</template>
