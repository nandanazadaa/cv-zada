<script setup>
import { RouterView } from 'vue-router'
</script>
<template>
  <div class="relative font-sans text-gray-800 dark:text-dark-text">
    <!-- Latar Belakang Aurora -->
    <div class="fixed inset-0 -z-10 bg-gray-100 dark:bg-dark-background
                bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops)),_radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))]
                from-blue-100 dark:from-blue-900/40 via-transparent dark:via-transparent to-transparent
                dark:to-transparent
                bg-[length:200%_200%,_150%_150%] animate-aurora">
    </div>
    <RouterView />
  </div>
</template>
