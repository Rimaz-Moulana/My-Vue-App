<template>
  <section class="relative py-16 bg-black overflow-hidden">
    <div class="text-center mb-12 relative z-10">
      <h2 class="text-3xl text-white  font-bold mb-4">Find Your Perfect Fit:</h2>
      <h3 class="text-3xl text-white font-bold mb-2">Dive into Our Diverse Categories</h3>
      <p class="text-white text-2xl">
        Explore a variety of categories covering diverse topics, empowering you to expand your
        <br />
        skills and knowledge base effectively.
      </p>
    </div>
    <div class="relative z-10">
      <div class="flex justify-center mb-8">
        <div ref="slider" class="flex overflow-x-auto space-x-4 px-4">
          <div
            v-for="category in visibleCategories"
            :key="category.name"
            class="bg-[#E8DCFA] shadow-lg rounded-lg p-4 text-center w-64"
          >
            <div class="flex items-center mb-4">
              <img
                :src="category.image"
                alt="Category Image"
                class="w-16 h-16 object-cover rounded-full mr-4"
              />
              <div>
                <h3 class="text-xl font-bold">{{ category.name }}</h3>
                <p class="text-gray-600">{{ category.country }}</p>
              </div>
            </div>
            <p class="text-gray-600">{{ category.description }}</p>
          </div>
        </div>
      </div>
      <div class="absolute top-1/2 transform -translate-y-1/2 flex justify-between w-full px-4 z-20">
        <button
          @click="prevCategory"
          class="p-2 bg-white text-black rounded-full hover:bg-gray-300 focus:outline-none"
        >
          <i class="fas fa-chevron-left"></i>
        </button>
        <button
          @click="nextCategory"
          class="p-2 bg-white text-black rounded-full hover:bg-gray-300 focus:outline-none"
        >
          <i class="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import E1 from '@/assets/E1.png';
import E2 from '@/assets/E2.png';
import { default as E3, default as E4 } from '@/assets/E4.png';

export default {
  name: 'CategoriesSection',
  data() {
    return {
      categories: [
        {
          image: E1,
          name: 'Steven',
          country: 'USA',
          description:
            'Massive shout out out to Ashley from the Mentor Support Service. Ashley provided lots of important advice when submitting and looking through work which had been submitted!.',
        },
        {
          image: E2,
          name: 'Business & Management',
          country: 'UK',
          description:
            'Gain essential business skills with our Ofqual-regulated Business and Management Training.',
        },
        {
          image: E3,
          name: 'Teaching & Education',
          country: 'Canada',
          description:
            'Enhance your teaching career with accredited courses for diverse, rewarding opportunities.',
        },
        {
          image: E4,
          name: 'Accounting & Finance',
          country: 'Australia',
          description:
            'Gain comprehensive accounting skills with accredited courses covering finance, taxes, and software.',
        },
      ],
      visibleStartIndex: 0,
      visibleEndIndex: 4,
    };
  },
  computed: {
    visibleCategories() {
      return this.categories.slice(this.visibleStartIndex, this.visibleEndIndex + 1);
    },
  },
  methods: {
    nextCategory() {
      if (this.visibleEndIndex < this.categories.length - 1) {
        this.visibleStartIndex++;
        this.visibleEndIndex++;
      }
    },
    prevCategory() {
      if (this.visibleStartIndex > 0) {
        this.visibleStartIndex--;
        this.visibleEndIndex--;
      }
    },
  },
};
</script>

<style scoped>
.bg-black {
  background-color: #000;
}

.overflow-hidden::before {
  content: "";
  position: absolute;
  top: -50px; /* Adjust as needed */
  left: 0;
  width: 100%;
  height: 100px; /* Adjust as needed */
  background: black; /* Same as the section background */
  clip-path: ellipse(50% 100% at 50% 0%);
  z-index: -1;
}

img {
  width: 4rem; /* Adjust image size as needed */
  height: 4rem;
  object-fit: cover;
  border-radius: 50%;
}

.flex {
  display: flex;
}
</style>
