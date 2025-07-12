<script setup>
const navLinks = [
  { id: 'profil', text: 'Home' },
  { id: 'about', text: 'About' },
  { id: 'skill', text: 'Skills' },
  { id: 'proyek', text: 'Projects' },
  { id: 'kontak', text: 'Contact' },
]
</script>

<template>
  <footer id="kontak" class="py-20 px-4 bg-space-dark dark:bg-space-darker relative overflow-hidden">
    <div class="absolute inset-0 -z-1 pointer-events-none">
      <div class="absolute top-1/4 left-[50%] w-72 h-72 bg-orange-glow/10 dark:bg-dark-orange-glow/10 rounded-full blur-3xl animate-galaxy-glow-slow" style="transform: translate(-50%, -50%);"></div>
      <div class="absolute bottom-1/4 right-[20%] w-96 h-96 bg-violet-glow/10 dark:bg-dark-violet-glow/10 rounded-full blur-3xl animate-galaxy-glow-slow delay-1000"></div>
    </div>

    <div class="container mx-auto relative z-10 flex flex-col items-center text-center">

      <div class="flex flex-col md:flex-row justify-between items-start md:items-center w-full gap-12 mb-16">

        <div class="md:w-1/3 flex flex-col items-center md:items-start text-center md:text-left fade-in-scale" style="animation-delay: 0.1s;">
          <h3 class="text-3xl font-bold text-white mb-3">
            Nandana Zada <span class="bg-gradient-to-r from-orange-400 to-violet-600 dark:from-dark-orange-glow dark:to-dark-violet-glow bg-clip-text text-transparent">Abiproya</span>
          </h3>
          <p class="text-gray-400 mb-4 leading-relaxed">
            Connecting the cosmos, one digital solution at a time.
          </p>
          <a
            href="mailto:ezzadut@gmail.com"
            class="inline-flex items-center px-6 py-3 rounded-full font-semibold bg-orange-500 hover:bg-orange-600 dark:bg-dark-orange-glow dark:hover:bg-dark-orange-glow text-white transition-colors shadow-md text-base"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            Send a Message
          </a>
        </div>

        <div class="md:w-1/3 flex flex-col items-center fade-in-scale" style="animation-delay: 0.2s;">
          <h4 class="text-lg font-semibold text-white mb-4">Cosmic Navigation</h4>
          <ul class="space-y-3">
            <li v-for="link in navLinks" :key="link.id">
              <a :href="`#${link.id}`" class="text-gray-400 hover:text-orange-400 dark:hover:text-dark-orange-glow transition-colors text-base">
                {{ link.text }}
              </a>
            </li>
          </ul>
        </div>

        <div class="md:w-1/3 flex flex-col items-center md:items-end text-center md:text-right fade-in-scale" style="animation-delay: 0.3s;">
          <h4 class="text-lg font-semibold text-white mb-4">Connect Across Galaxies</h4>
          <div class="flex justify-center md:justify-end items-center space-x-4">
            <a
              href="https://github.com/nandanazadaa"
              target="_blank"
              rel="noopener noreferrer"
              class="p-3 bg-space-darker/60 dark:bg-space-dark/60 rounded-full text-gray-300 hover:text-orange-400 dark:hover:text-dark-orange-glow hover:bg-gray-700/50 transition-all duration-300 hover:scale-110 shadow-md"
              aria-label="GitHub"
            >
              <svg class="w-7 h-7" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
            </a>
            <a
              href="https://instagram.com/ezzadut"
              target="_blank"
              rel="noopener noreferrer"
              class="p-3 bg-space-darker/60 dark:bg-space-dark/60 rounded-full text-gray-300 hover:text-orange-400 dark:hover:text-dark-orange-glow hover:bg-gray-700/50 transition-all duration-300 hover:scale-110 shadow-md"
              aria-label="Instagram"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
          </div>
        </div>
      </div>

      <div class="border-t border-gray-700 mt-12 pt-8 w-full text-center fade-in-scale" style="animation-delay: 0.4s;">
        <p class="text-sm text-gray-500 dark:text-gray-400">
          &copy; {{ new Date().getFullYear() }} Nandana Zada Abiproya. All rights reserved.
        </p>
      </div>

    </div>
  </footer>
</template>
