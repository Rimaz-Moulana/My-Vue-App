<template>
  <section class="py-16 bg-gray-100">
    <div class="text-center mb-12 px-4">
      <h2 class="text-2xl md:text-3xl font-bold mb-4">Find Your Perfect Fit:</h2>
      <h3 class="text-xl md:text-3xl font-bold mb-2">Dive into Our Diverse Categories</h3>
      <p class="text-lg md:text-2xl text-gray-600">
        Explore a variety of categories covering diverse topics, empowering you to expand your<br>skills and knowledge base effectively.
      </p>
    </div>
    <div class="relative">
      <div class="flex justify-center mb-8 px-2 md:px-4">
        <div ref="slider" class="flex overflow-x-auto space-x-4 pb-4">
          <div v-for="category in visibleCategories" :key="category.title" class="bg-white shadow-lg rounded-lg p-4 text-center w-64 flex-shrink-0">
            <div class="text-2xl mb-4"><i :class="category.icon"></i></div>
            <h3 class="text-lg md:text-xl font-bold mb-2">{{ category.title }}</h3>
            <p class="text-sm md:text-base text-gray-600">{{ category.description }}</p>
          </div>
        </div>
      </div>
      <div class="absolute top-1/2 transform -translate-y-1/2 flex justify-between w-full px-4 md:px-8 z-10">
        <button @click="prevCategory" class="p-2 bg-black text-white rounded-full hover:bg-gray-700 focus:outline-none">
          <i class="fas fa-chevron-left"></i>
        </button>
        <button @click="nextCategory" class="p-2 bg-black text-white rounded-full hover:bg-gray-700 focus:outline-none">
          <i class="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CategoriesSection',
  data() {
    return {
      categories: [
        {
          icon: 'fas fa-project-diagram bg-[#B8F1DA] text-black rounded-full p-4',
          title: 'Project Management',
          description: 'Start a project management career with industry-recognized, accredited online courses.'
        },
        {
          icon: 'fas fa-briefcase bg-[#DED6FC] text-black rounded-full p-4',
          title: 'Business & Management',
          description: 'Gain essential business skills with our Ofqual-regulated Business and Management Training.'
        },
        {
          icon: 'fas fa-chalkboard-teacher bg-[#FFF3CF] text-black rounded-full p-4',
          title: 'Teaching & Education',
          description: 'Enhance your teaching career with accredited courses for diverse, rewarding opportunities.'
        },
        {
          icon: 'fas fa-calculator bg-[#FCD6D6] text-black rounded-full p-4',
          title: 'Accounting & Finance',
          description: 'Gain comprehensive accounting skills with accredited courses covering finance, taxes, and software.'
        },
        {
          icon: 'fas fa-building bg-[#D6FCFC] text-black rounded-full p-4',
          title: 'Office & Admin Reception',
          description: 'Excel in office administration and receptionist roles with accredited courses for a career-advancing program.'
        },
        // Add more categories as needed
      ],
      visibleStartIndex: 0,
      visibleEndIndex: 4,
    };
  },
  computed: {
    visibleCategories() {
      return this.categories.slice(this.visibleStartIndex, this.visibleEndIndex + 1);
    }
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
    }
  }
};
</script>

<style scoped>
/* No additional styles needed for responsiveness with Tailwind */
</style>
