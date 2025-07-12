<script setup>
import { ref, onMounted, computed } from 'vue'
import axios from 'axios'
import SectionTitle from './SectionTitle.vue'

const skillCategories = ref([])

// Define a default/fallback skills data
const defaultSkillCategories = [
    {
        title: "Frontend Navigator",
        skills: [
            { name: "Vue.js", level: 90, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
            { name: "JavaScript", level: 85, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
            { name: "Tailwind CSS", level: 95, logo: 'https://www.svgrepo.com/show/374118/tailwind.svg' },
            { name: "HTML5", level: 98, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
            { name: "CSS3", level: 95, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
        ],
    },
    {
        title: "Backend Architect",
        skills: [
            { name: "Laravel", level: 80, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg' },
            { name: "Express.js", level: 75, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
            { name: "Node.js", level: 78, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
            { name: "MySQL", level: 70, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
            { name: "RESTful API", level: 85, logo: 'https://img.icons8.com/ios/50/api.png' },
        ],
    },
    {
        title: "Cosmic Tools",
        skills: [
            { name: "Git & GitHub", level: 90, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
            { name: "Figma", level: 85, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
            { name: "VS Code", level: 92, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
            { name: "Docker", level: 60, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
        ],
    },
];

// Ambil data kategori dari API
onMounted(async () => {
    try {
        const response = await axios.get('/api/skills')
        skillCategories.value = response.data
        console.log('Skills fetched from API:', skillCategories.value);
    } catch (error) {
        console.error('Gagal mengambil data skills:', error)
        // Fallback to local data if API call fails
        skillCategories.value = defaultSkillCategories;
        console.log('Using fallback skills data.');
    }
})
</script>

<template>
  <section id="skill" class="py-20 px-4 bg-space-darker dark:bg-space-dark relative overflow-hidden">
    <div class="absolute inset-0 -z-1 pointer-events-none">
      <div class="absolute top-1/4 left-1/4 w-72 h-72 bg-orange-glow/10 dark:bg-dark-orange-glow/10 rounded-full blur-3xl animate-galaxy-glow-slow"></div>
      <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-glow/10 dark:bg-dark-violet-glow/10 rounded-full blur-3xl animate-galaxy-glow-slow delay-1000"></div>
    </div>
    <div class="container mx-auto relative z-10">

      <div class="text-center mb-16 fade-in-content">
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
          My <span class="bg-gradient-to-r from-orange-400 to-violet-600 dark:from-dark-orange-glow dark:to-dark-violet-glow bg-clip-text text-transparent">Tech Stack</span>
        </h2>
        <p class="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
          The technologies and tools I navigate to build digital universes, from frontend interfaces to robust backend systems.
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(category, catIndex) in skillCategories"
          :key="catIndex"
          class="bg-space-darker/60 dark:bg-space-dark/60 backdrop-blur-md border border-gray-700/50 rounded-2xl p-6 shadow-lg fade-in-scale"
          :style="{ animationDelay: `${0.2 + catIndex * 0.15}s` }"
        >
          <h3 class="text-2xl font-bold text-white mb-6 text-center">{{ category.title }}</h3>
          <div class="grid grid-cols-2 gap-x-4 gap-y-6">
            <div
              v-for="(skill, skillIndex) in category.skills"
              :key="skillIndex"
              class="flex flex-col items-center text-center fade-in-scale"
              :style="{ animationDelay: `${0.3 + (catIndex * 0.15) + (skillIndex * 0.05)}s` }"
            >
              <img :src="skill.logo" :alt="skill.name" class="h-16 w-16 object-contain mb-2 transform transition-transform duration-300 hover:scale-110" onerror="this.onerror=null;this.src='https://placehold.co/64x64/cccccc/ffffff?text=Err'"/>
              <span class="text-sm font-medium text-gray-300 mb-1">{{ skill.name }}</span>
              <div class="relative w-full h-2 rounded-full bg-gray-700 dark:bg-gray-800 overflow-hidden">
                <div
                  class="absolute top-0 left-0 h-full bg-orange-500 dark:bg-dark-orange-glow rounded-full skill-bar-fill transition-all duration-1000 ease-out"
                  :style="{ width: `${skill.level}%` }"
                ></div>
              </div>
              <span class="text-xs text-orange-400 dark:text-dark-orange-glow mt-1">{{ skill.level }}%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* New animation for fade-in and scale */
@keyframes fadeInScale {
  0% {
    opacity: 0;
    transform: translateY(20px) scale(0.95);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.fade-in-scale {
  opacity: 0;
  transform: translateY(20px) scale(0.95);
  animation: fadeInScale 0.7s ease-out forwards;
}

/* No more marquee or horizontal progress bar fill animation needed here */

/* For the vertical skill bar fill animation (removed explicit animation, relying on transition) */
.skill-bar-fill {
  /* Initial width will be set by inline style on mount */
  /* transition property already defined in template via Tailwind's transition-all duration-1000 ease-out */
}
</style>
