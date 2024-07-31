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
      <div class="flex justify-center overflow-hidden mb-8 px-2 md:px-4">
        <div ref="slider" class="flex overflow-hidden space-x-4 pb-4">
          <div v-for="category in visibleCategories" :key="category.title" class="bg-white shadow-lg rounded-lg p-4 text-center w-64 flex-shrink-0">
            <div class="text-2xl mb-4"><i :class="category.icon"></i></div>
            <h3 class="text-lg md:text-xl font-bold mb-2">{{ category.title }}</h3>
            <p class="text-sm md:text-base text-gray-600">{{ category.description }}</p>
          </div>
        </div>
      </div>
      <div class="flex justify-center mb-4">
        <button
          @click="prevCategory"
          class="p-2 bg-black text-white rounded-full hover:bg-gray-700 focus:outline-none"
        >
          <i class="fas fa-chevron-left"></i>
        </button>
        <div class="flex items-center mx-4">
          <div v-for="index in 2" :key="index" :class="['h-1', barClass(index)]" style="width: 140px;"></div>
        </div>
        <button
          @click="nextCategory"
          class="p-2 bg-black text-white rounded-full hover:bg-gray-700 focus:outline-none"
        >
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
        {
          icon: 'fas fa-stethoscope bg-[#E8F1B8] text-black rounded-full p-4',
          title: 'Healthcare & Medicine',
          description: 'Advance your career in healthcare with our comprehensive courses on medical practices and healthcare management.'
        },
        {
          icon: 'fas fa-code bg-[#F3E8FD] text-black rounded-full p-4',
          title: 'IT & Software Development',
          description: 'Enhance your tech skills with our courses on programming, software development, and IT management.'
        },
        {
          icon: 'fas fa-palette bg-[#FDE7E7] text-black rounded-full p-4',
          title: 'Art & Design',
          description: 'Unlock your creativity with our courses on art, design, and digital media.'
        },
        {
          icon: 'fas fa-dumbbell bg-[#E7F2FD] text-black rounded-full p-4',
          title: 'Fitness & Well-being',
          description: 'Promote health and fitness with our courses on personal training, nutrition, and well-being.'
        },
        {
          icon: 'fas fa-language bg-[#FFF3CF] text-black rounded-full p-4',
          title: 'Languages',
          description: 'Learn a new language with our comprehensive language courses for all levels.'
        },
        {
          icon: 'fas fa-chart-line bg-[#B8F1DA] text-black rounded-full p-4',
          title: 'Marketing & Sales',
          description: 'Boost your career in marketing and sales with our specialized courses and training programs.'
        },
        {
          icon: 'fas fa-hand-holding-heart bg-[#DED6FC] text-black rounded-full p-4',
          title: 'Social Work & Community',
          description: 'Make a difference with our courses on social work, community service, and public health.'
        },
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
    },
    barClass(index) {
      const currentBarIndex = Math.floor(this.visibleStartIndex / Math.ceil(this.categories.length / 2));
      return currentBarIndex === index - 1 ? 'bg-black' : 'bg-gray-300';
    },
  }
};
</script>

<style scoped>
/* No additional styles needed for responsiveness with Tailwind */
</style>
