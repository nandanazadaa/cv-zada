<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const heroText = ref("")
const fullHeroText = "Fullstack Web Developer"
let heroTimer;

onMounted(() => {
  let index = 0
  heroTimer = setInterval(() => {
    heroText.value = fullHeroText.slice(0, index)
    index++
    if (index > fullHeroText.length) {
      clearInterval(heroTimer)
    }
  }, 120) // Typing speed (ms)
})

onUnmounted(() => {
  clearInterval(heroTimer) // Clear timer when component is unmounted
})

// Function to generate random top/left for particles
const getRandomPosition = () => ({
  top: `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`,
});
</script>

<template>
  <section id="profil" class="min-h-screen flex flex-col justify-center relative overflow-hidden bg-space-dark dark:bg-space-darker pt-24">
    <div class="absolute inset-0 z-0 pointer-events-none">
      <div class="star-particle size-1 opacity-50 animate-star-twinkle absolute" style="top: 10%; left: 15%; animation-delay: 0s;"></div>
      <div class="star-particle size-2 opacity-60 animate-star-twinkle absolute" style="top: 25%; right: 20%; animation-delay: 0.5s;"></div>
      <div class="star-particle size-1 opacity-40 animate-star-twinkle absolute" style="bottom: 10%; left: 30%; animation-delay: 1s;"></div>
      <div class="star-particle size-3 opacity-70 animate-star-twinkle absolute" style="top: 40%; left: 5%; animation-delay: 1.5s;"></div>
      <div class="star-particle size-2 opacity-55 animate-star-twinkle absolute" style="bottom: 20%; right: 50%; animation-delay: 2s;"></div>
      <div class="star-particle size-1 opacity-45 animate-star-twinkle absolute" style="top: 5%; right: 40%; animation-delay: 2.5s;"></div>
      <div class="star-particle size-3 opacity-65 animate-star-twinkle absolute" style="bottom: 5%; left: 70%; animation-delay: 3s;"></div>
      <div class="star-particle size-2 opacity-50 animate-star-twinkle absolute" style="top: 60%; right: 10%; animation-delay: 3.5s;"></div>
      <div class="star-particle size-1 opacity-30 animate-star-twinkle absolute" style="top: 80%; left: 20%; animation-delay: 4s;"></div>
      <div class="star-particle size-2 opacity-75 animate-star-twinkle absolute" style="top: 15%; left: 60%; animation-delay: 4.5s;"></div>
      <div v-for="i in 50" :key="`star-${i}`"
           class="star-particle absolute animate-star-twinkle"
           :class="`size-${Math.floor(Math.random() * 3) + 1} opacity-${Math.floor(Math.random() * 50) + 30}`"
           :style="{ top: getRandomPosition().top, left: getRandomPosition().left, animationDelay: `${Math.random() * 5}s` }">
      </div>
    </div>

    <div class="text-center z-10 px-4 max-w-4xl mx-auto fade-in-content mt-8">
      <div class="mb-10">
        <h1 class="text-6xl md:text-8xl font-extrabold text-white mb-5 leading-tight">
          Greetings, I'm
          <span class="bg-gradient-to-r from-orange-400 to-violet-600 dark:from-dark-orange-glow dark:to-dark-violet-glow bg-clip-text text-transparent">
            Nandana Zada Abiproya
          </span>
        </h1>
        <div class="text-3xl md:text-4xl text-gray-300 h-14 flex items-center justify-center font-medium">
          <span class="border-r-2 border-orange-400 dark:border-dark-orange-glow pr-3 animate-cursor-blink">{{ heroText }}</span>
        </div>
      </div>

      <p class="text-xl md:text-2xl text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed">
        I engineer digital constellations, blending innovative design with robust functionality to illuminate new possibilities in the digital universe.
      </p>

      <div class="flex flex-col sm:flex-row gap-5 justify-center items-center mb-16">
        <a href="#proyek" class="px-10 py-4 rounded-full font-bold bg-orange-500 hover:bg-orange-600 dark:bg-dark-orange-glow dark:hover:bg-dark-orange-glow-hover text-white transition duration-300 ease-in-out shadow-lg">
          Explore My Universe
        </a>
        
      </div>

      <div class="flex justify-center space-x-8 items-center">
        <a href="https://github.com/nandanazadaa" target="_blank" class="p-3 rounded-full text-gray-400 hover:text-orange-400 dark:hover:text-dark-orange-glow hover:bg-white/10 dark:hover:bg-dark-orange-glow/10 transition duration-300 ease-in-out">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/></svg>
        </a>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6 text-orange-400 dark:text-dark-orange-glow animate-horizontal-bounce hidden md:block"><path d="m7 17 5-5-5-5M17 17l-5-5 5-5"/></svg>
        <a href="https://instagram.com/ezzadut" target="_blank" class="p-3 rounded-full text-gray-400 hover:text-orange-400 dark:hover:text-dark-orange-glow hover:bg-white/10 dark:hover:bg-dark-orange-glow/10 transition duration-300 ease-in-out">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
        </a>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6 text-orange-400 dark:text-dark-orange-glow animate-horizontal-bounce hidden md:block"><path d="m7 17 5-5-5-5M17 17l-5-5 5-5"/></svg>
        <a href="mailto:ezzadut@gmail.com" class="p-3 rounded-full text-gray-400 hover:text-orange-400 dark:hover:text-dark-orange-glow hover:bg-white/10 dark:hover:bg-dark-orange-glow/10 transition duration-300 ease-in-out">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
        </a>
      </div>
    </div>
  </section>
</template>
