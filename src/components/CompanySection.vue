<template>
    <section class="bg-white p-10 text-center rounded-b-[45%] overflow-hidden">
        <h2 class="justify-center text-center text-xl">We are Trusted by over 900+ companies  and millions of learners around the world </h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
        <div class="p-4">
          <img :src="img0" class="z-10 object-cover">
        </div>
        <div class="p-4">
          <img :src="img1" class="z-10 object-cover">
          
        </div>
        <div class="p-4">
          <img :src="img2" class="z-10 object-cover">
        </div>
        <div class="p-4">
          <img :src="img3" class="z-10 object-cover">
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import img0 from '@/assets/image-0.png';
import img1 from '@/assets/image-1.png';
import img2 from '@/assets/image-2.png';
import img3 from '@/assets/image-3.png';
  
  export default {
    name: 'CompanySection',
    data() {
      return {
        img0: img0,
        img1: img1,
        img2: img2,
        img3: img3,
      };
    },
  };
  </script>
  
  