<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import SectionTitle from './SectionTitle.vue' // Make sure SectionTitle.vue exists

const projects = ref([])

// State for image pop-up
const showImagePopup = ref(false)
const currentImage = ref('')
const currentProjectTitle = ref('')

// Function to open the image pop-up
function openImagePopup(imageUrl, projectTitle) {
  currentImage.value = imageUrl
  currentProjectTitle.value = projectTitle
  showImagePopup.value = true
  document.body.style.overflow = 'hidden' // Prevent scrolling when popup is open
}

// Function to close the image pop-up
function closeImagePopup() {
  showImagePopup.value = false
  currentImage.value = ''
  currentProjectTitle.value = ''
  document.body.style.overflow = '' // Restore scrolling
}

onMounted(async () => {
  try {
    const response = await axios.get('/api/projects')
    projects.value = response.data
    console.log('Projects fetched from API:', projects.value);
  } catch (error) {
    console.error('Gagal mengambil data proyek:', error)
    // Updated fallback projects data to match your screenshot and new requirements
    projects.value = [
      {
        title: 'Galderma Indonesia - Cetaphil',
        image_url: '/cetaphil.jpg',
        description: 'Dashboard interaktif untuk visualisasi data penjualan dan sales activity.',
        tech: ['Flutter', 'Laravel', 'MySQL'],
        github: '#',
        live: '#',
      },
      {
        title: 'Cosmic Task Manager (Simember)',
        image_url: '/simember.PNG',
        description: 'Aplikasi untuk mengelola tugas harian dengan fitur pengingat dan kategori.',
        tech: ['Codeigniter 3', 'Mysql'],
        github: '#',
        live: '#',
      },
      {
        title: 'Website Toko Online', // Project from screenshot
        image_url: '/toko-online.png', // Assuming this image path
        description: 'Platform e-commerce dengan fitur keranjang belanja.',
        tech: ['Vue.js', 'Laravel', 'MySQL'], // Based on screenshot/common stack
        github: '#',
        live: '#',
      },
      {
        title: 'Interstellar Marketplace (Vistore.id)',
        image_url: '/vistore.jpg',
        description: 'Dashboard interaktif untuk visualisasi data penjualan dan sales activity.',
        tech: ['Flutter','Codeigniter 3', 'Mysql'],
        github: '#',
        live: '#',
      }
    ]
  }
})
</script>

<template>
  <section id="proyek" class="py-20 px-4 bg-space-dark dark:bg-space-darker relative overflow-hidden">
    <div class="absolute inset-0 -z-1 pointer-events-none">
      <div class="absolute top-[10%] left-[5%] w-60 h-60 bg-violet-glow/10 dark:bg-dark-violet-glow/10 rounded-full blur-3xl animate-galaxy-glow-slow"></div>
      <div class="absolute bottom-[20%] right-[10%] w-80 h-80 bg-orange-glow/10 dark:bg-dark-orange-glow/10 rounded-full blur-3xl animate-galaxy-glow-slow delay-1500"></div>
    </div>

    <div class="container mx-auto relative z-10">

      <div class="text-center mb-16 fade-in-content">
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
          My <span class="bg-gradient-to-r from-orange-400 to-violet-600 dark:from-dark-orange-glow dark:to-dark-violet-glow bg-clip-text text-transparent">Constellations</span>
        </h2>
        <p class="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
          Explore a collection of my stellar projects, each a testament to my journey through the digital cosmos and my passion for crafting innovative solutions.
        </p>
      </div>

      <div class="flex flex-col gap-24">
        <div
          v-for="(project, index) in projects"
          :key="index"
          :class="[
            'flex flex-col md:flex-row items-center gap-12 p-8 rounded-3xl shadow-xl',
            'bg-space-darker/60 dark:bg-space-dark/60 backdrop-blur-md border border-gray-700/50',
            'transition-all duration-500 hover:border-orange-400/50 dark:hover:border-dark-orange-glow/50 hover:shadow-2xl hover:-translate-y-2',
            index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse',
            'fade-in-scale'
          ]"
          :style="{ animationDelay: `${0.2 + index * 0.2}s` }"
        >
          <div :class="[
              'relative w-full md:w-1/2 flex-shrink-0 cursor-pointer group',
              'rounded-xl overflow-hidden shadow-lg',
              'transform transition-transform duration-500 hover:scale-[1.02] project-image-clip'
              ]"
              @click="openImagePopup(project.image_url, project.title)"
            >
            <img :src="project.image_url" :alt="project.title" class="w-full h-64 object-cover" onerror="this.onerror=null;this.src='https://placehold.co/600x400/1F2937/FFFFFF?text=Cosmic+Project'"/>
            <div class="absolute inset-0 bg-gradient-to-t from-space-dark/70 to-transparent group-hover:from-space-dark/80 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
            </div>
          </div>

          <div class="w-full md:w-1/2 space-y-5 text-center md:text-left">
            <h3 class="text-3xl font-bold text-white">{{ project.title }}</h3>
            <p class="text-gray-400 leading-relaxed">{{ project.description }}</p>

            <div class="flex flex-wrap gap-3 justify-center md:justify-start">
              <span
                v-for="(tech, techIndex) in project.tech"
                :key="techIndex"
                class="px-4 py-1 bg-violet-600/30 dark:bg-violet-800/30 text-violet-300 dark:text-violet-400 rounded-full text-sm font-medium border border-violet-500/50"
              >
                {{ tech }}
              </span>
            </div>

            <div class="flex gap-4 pt-4 justify-center md:justify-start">
                <button
                    @click="openImagePopup(project.image_url, project.title)"
                    class="flex items-center justify-center px-6 py-3 text-sm font-semibold rounded-full bg-orange-500 hover:bg-orange-600 dark:bg-dark-orange-glow dark:hover:bg-dark-orange-glow text-white transition-colors shadow-md"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 mr-2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                    Preview
                </button>
            </div>
          </div>
        </div>
      </div>

    </div>

    <transition
      enter-active-class="transition ease-out duration-300 transform"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition ease-in duration-200 transform"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div
        v-if="showImagePopup"
        class="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
        @click="closeImagePopup"
      >
        <div class="relative max-w-4xl max-h-[90vh] bg-space-darker/90 rounded-xl overflow-hidden shadow-2xl" @click.stop>
          <button @click="closeImagePopup" class="absolute top-4 right-4 p-2 rounded-full bg-gray-700/50 text-white hover:bg-gray-600/70 transition-colors z-10">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
          <img :src="currentImage" :alt="currentProjectTitle" class="max-w-full max-h-[85vh] object-contain mx-auto" />
          <div class="absolute bottom-0 left-0 right-0 p-4 bg-black/50 text-white text-center text-xl font-semibold">
            {{ currentProjectTitle }}
          </div>
        </div>
      </div>
    </transition>
  </section>
</template>
