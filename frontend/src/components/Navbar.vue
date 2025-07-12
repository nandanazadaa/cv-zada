<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isDarkMode = ref(false)
const isScrolled = ref(false)
const activeSection = ref('profil') // Default active section
const isMobileMenuOpen = ref(false)

// Toggle theme function
function toggleTheme() {
  if (isDarkMode.value) {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  } else {
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  }
  isDarkMode.value = !isDarkMode.value
}

// Handle scroll event for navbar
function handleScroll() {
  isScrolled.value = window.scrollY > 50
}

// Intersection Observer for active section (for navbar highlighting)
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        activeSection.value = entry.target.id
      }
    })
  },
  { rootMargin: '-30% 0px -70% 0px' } // Adjust this if sections overlap weirdly
)

onMounted(() => {
  // Check initial theme
  if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
    isDarkMode.value = true
  }

  // Add scroll listener
  window.addEventListener('scroll', handleScroll)
  handleScroll(); // Initial scroll check

  // Observe sections for navbar active state
  document.querySelectorAll('section').forEach((section) => {
    observer.observe(section)
  })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  observer.disconnect()
})

const navLinks = [
  { id: 'profil', text: 'Home' },
  { id: 'about', text: 'About' },
  { id: 'skill', text: 'Skills' },
  { id: 'proyek', text: 'Projects' },
  { id: 'kontak', text: 'Contact' },
]
</script>

<template>
  <header
    :class="[
      'fixed top-0 left-0 w-full z-50 transition-all duration-300',
      isScrolled ? 'py-2' : 'py-4'
    ]"
  >
    <nav :class="[
        'container mx-auto px-6 flex justify-between items-center transition-all duration-300',
        isScrolled ? 'bg-space-darker/80 backdrop-blur-md shadow-xl border-b border-gray-700/50' : 'bg-transparent'
    ]">
      <div class="flex-1 text-center md:text-left">
        <a href="#profil" class="text-xl md:text-2xl font-extrabold text-white tracking-wider">
          <span class="text-orange-400">Nandana</span> Zada
        </a>
      </div>

      <div class="hidden md:flex flex-1 justify-center">
        <ul class="flex items-center space-x-6">
          <li v-for="link in navLinks" :key="link.id">
            <a
              :href="`#${link.id}`"
              :class="[
                'relative px-4 py-2 text-base font-medium transition-colors duration-300 group',
                activeSection === link.id
                  ? 'text-orange-400 dark:text-dark-orange-glow'
                  : 'text-gray-300 hover:text-orange-400 dark:hover:text-dark-orange-glow'
              ]"
            >
              {{ link.text }}
              <span :class="[
                  'absolute bottom-0 left-0 w-full h-[2px] bg-orange-400 dark:bg-dark-orange-glow transition-transform duration-300 transform scale-x-0 group-hover:scale-x-100',
                  activeSection === link.id ? 'scale-x-100' : ''
              ]"></span>
            </a>
          </li>
        </ul>
      </div>

      <div class="flex flex-1 justify-end items-center space-x-4">
        <button @click="toggleTheme" class="p-2 rounded-full hover:bg-gray-700/50 transition-colors duration-300">
          <svg v-if="isDarkMode" class="w-6 h-6 text-yellow-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
          <svg v-else class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
        </button>

        <button @click="isMobileMenuOpen = true" class="md:hidden p-2 rounded-full hover:bg-gray-700/50 transition-colors duration-300">
            <svg class="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
        </button>
      </div>
    </nav>
  </header>

  <transition
    enter-active-class="transition ease-out duration-300 transform"
    enter-from-class="opacity-0 -translate-y-full"
    enter-to-class="opacity-100 translate-y-0"
    leave-active-class="transition ease-in duration-200 transform"
    leave-from-class="opacity-100 translate-y-0"
    leave-to-class="opacity-0 -translate-y-full"
  >
    <div v-if="isMobileMenuOpen" class="md:hidden fixed inset-0 z-[60]">
      <div class="fixed inset-0 bg-space-darker/60 backdrop-blur-sm" @click="isMobileMenuOpen = false"></div>

      <div class="fixed top-0 left-0 w-full bg-space-dark dark:bg-space-darker p-5 shadow-2xl rounded-b-xl border-b border-gray-700/50">
        <div class="flex justify-between items-center mb-6">
            <h2 class="text-xl font-bold text-white">Menu Navigasi</h2>
            <button @click="isMobileMenuOpen = false" class="p-2 rounded-full hover:bg-gray-700/50">
                <svg class="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
        </div>
        <ul class="flex flex-col space-y-3">
          <li v-for="link in navLinks" :key="link.id">
            <a
              :href="`#${link.id}`"
              @click="isMobileMenuOpen = false"
              :class="[
                'block w-full px-4 py-3 rounded-lg text-lg font-medium transition-all duration-300 text-center',
                activeSection === link.id
                  ? 'bg-orange-500/20 text-orange-400 dark:bg-dark-orange-glow/20 dark:text-dark-orange-glow'
                  : 'text-gray-300 hover:bg-gray-700/30 hover:text-white'
              ]"
            >
              {{ link.text }}
            </a>
          </li>
        </ul>
        <div class="border-t border-gray-700/50 my-4"></div>
        <div class="flex justify-between items-center px-4">
            <span class="text-sm text-gray-400">Ganti Tema</span>
            <button @click="toggleTheme" class="p-2 rounded-full bg-gray-700/30 hover:bg-gray-700/50 transition-colors duration-300">
                <svg v-if="isDarkMode" class="w-5 h-5 text-yellow-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                <svg v-else class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
            </button>
        </div>
      </div>
    </div>
  </transition>
</template>
