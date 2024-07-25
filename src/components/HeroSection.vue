<template>
    <section class="relative bg-bgRose  p-10 text-center lg:rounded-b-[45%] sm:rounded-b-3xl overflow-hidden">
      <div class="grid md:grid-cols-2 gap-4 lg:grid-cols-2 sm:grid-cols-1">
        <div class="p-4 mt-16 order-2 md:order-1 mb-24 md:mb-0 lg:bg-bgRose">
          <h1 class="text-5xl font-bold mb-4 text-left">
            Upskill from Anywhere with<br><span class="text-orange-500">Industry-Recognized</span><br>
            Learning
          </h1>
          <p class="text-black text-2xl mb-8 text-left">
            Flexible, accredited courses to help you learn<br>and advance from anywhere in the world.
          </p>
          <div class="flex space-x-2 mt-8">
            <input type="text" class="px-4 w-[50%] bg-transparent py-2 rounded border-2 border-gray-300" placeholder="Search courses...">
            <button class="bg-green-500 text-white px-6 py-3 rounded flex items-center space-x-2">
              <span>Explore</span>
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </button>
          </div>
        </div>
        <div class="relative p-4 rounded order-1 md:order-2 md:rounded-b-xl bg-bgRose ">
          <img :src="Girl" class="relative z-10 object-cover">
          <img :src="require('@/assets/Vector.png')" class="absolute inset-0 -mt-20 -ml-6 ml-32 z-0">
          <img :src="Ellipse" class="absolute inset-0 ml-32 z-0 opacity-75">
        </div>
      </div>
  
      <div class="absolute inset-x-0 bottom-0">
        <svg class="w-full h-24 text-bgRose" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="currentColor" d="M0,64L48,69.3C96,75,192,85,288,106.7C384,128,480,160,576,160C672,160,768,128,864,106.7C960,85,1056,75,1152,69.3L1200,64L1200,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  </template>
  
  <script>
  import Ellipse from '@/assets/Ellipse.png';
import Girl from '@/assets/Girl.png';
  
  export default {
    name: 'HeroSection',
    data() {
      return {
        Girl: Girl,
        Ellipse: Ellipse,
      };
    },
  };
  </script>
  
  <style scoped>
 
  </style>
  