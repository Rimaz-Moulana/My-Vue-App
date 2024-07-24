<template>
    <section class="bg-gray-100 p-8 text-center">
      <h2 class="text-3xl font-bold mb-8">Our experts design tailored courses to solve workforce challenges and drive business success.</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="bg-white p-4 rounded-lg shadow-lg">
          <img :src="images.F1" alt="Expert 1" class="w-full h-40 object-contain rounded-t-lg mb-4">
          <h3 class="text-xl font-bold mb-2">Course 1</h3>
          <p class="text-gray-700">Description...</p>
          <p class="text-green-500 font-bold">£369.00</p>
        </div>
        <div class="bg-white p-4 rounded-lg shadow-lg">
          <img :src="images.F2" alt="Expert 2" class="w-full h-40 object-contain rounded-t-lg mb-4">
          <h3 class="text-xl font-bold mb-2">Course 2</h3>
          <p class="text-gray-700">Description...</p>
          <p class="text-green-500 font-bold">£769.00</p>
        </div>
        <div class="bg-white p-4 rounded-lg shadow-lg">
          <img :src="images.F3" alt="Expert 3" class="w-full h-40 object-contain rounded-t-lg mb-4">
          <h3 class="text-xl font-bold mb-2">Course 3</h3>
          <p class="text-gray-700">Description...</p>
          <p class="text-green-500 font-bold">£1049.00</p>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import F1 from '@/assets/F1.png';
import F2 from '@/assets/F2.png';
import F3 from '@/assets/F3.png';
  
  export default {
    name: 'ExpertsSection',
    data() {
      return {
        images: {
          F1: F1,
          F2: F2,
          F3: F3
        }
      };
    }
  }
  </script>
  
  <style scoped>
  /* Add any additional styling if needed */
  </style>
  