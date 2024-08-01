<template>
  <section class="p-10 md:p-48  bg-bgRose sloped-section">
    <h2 class="text-3xl font-bold text-center lg:-mt-16 lg:mb-20 sm:mb-40">
      Master Your Career Growth with Our Top-Rated,<br>Expert-Led Courses
    </h2>
    <!-- Category Slider -->
    <div class="relative mb-8 lg:px-36 sm:px-8">
      <button @click="prevCategory" class="absolute top-1/2 transform -translate-y-1/2 p-2 bg-black rounded-full hover:bg-gray-300 focus:outline-none">
        <i class="fas fa-chevron-left text-white"></i>
      </button>
      <div ref="slider" class="flex overflow-x-auto space-x-4 scrollbar-hidden px-10">
        <button v-for="category in visibleCategories" :key="category" @click="filterCourses(category)"
                :class="{'bg-white text-black border-2 border-black': selectedCategory === category, 'bg-transparent border-black border-2': selectedCategory !== category}"
                class="px-4 py-2 rounded-lg hover:bg-bgSlider focus:outline-none">
          {{ category }}
        </button>
      </div>
      <button @click="nextCategory" class="absolute right-0 lg:mr-44 top-1/2 transform -translate-y-1/2 p-2 bg-black rounded-full hover:bg-gray-300 focus:outline-none">
        <i class="fas fa-chevron-right text-white"></i>
      </button>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div v-for="course in filteredCourses" :key="course.id" class="bg-white p-4 rounded-lg shadow-lg flex flex-col">
        <div class="w-full aspect-w-16 aspect-h-9 mb-4 px-2">
          <img :src="course.image" alt="Course Image" class="w-full h-full object-contain">
        </div>
        <h3 class="text-xl font-bold mb-2">{{ course.title }}</h3>
        <div class="flex mb-2 justify-items-start flex-wrap">
          <div class="flex items-center bg-bgModule p-1 rounded-xl px-3 mr-2 mb-2 md:mb-0">
            <i class="fas fa-clock mr-2"></i>
            <a>Modules</a>
          </div>
          <div class="flex items-center bg-bgModule p-1 rounded-xl px-3">
            <i class="fas fa-user mr-2"></i>
            <a>Professional Certificate</a>
          </div>
        </div>
        <p class="text-gray-700 mb-2">{{ course.description }}</p>
        <a>From <a class="text-black text-2xl font-bold">{{ course.price }}</a><a>/month</a></a>
      </div>
    </div>

    <div class="relative flex flex-col sm:flex-row sm:w-[70%] justify-center lg:justify-center items-center lg:mx-40 mt-20 mb-36 lg:mb-[-100px] z-10 space-y-4 sm:space-y-0 lg:space-x-4">
      <button @click="toggleShowMore" class="w-full sm:w-auto bg-black text-white rounded-md px-4 py-2 flex items-center justify-center hover:bg-gray-700 transition duration-300 z-20">
        {{ showMore ? 'Show Less' : 'Show More' }}
        <i class="fas fa-arrow-right ml-2"></i>
      </button>
      <button @click="toggleShowMore" class="w-full sm:w-auto bg-transparent border-[2px] rounded-md py-2 px-3 flex items-center justify-center hover:bg-yellow-200 transition duration-300 z-20">
        View all
      </button>
      <div class="absolute inset-0 bg-bgRose opacity-90 z-0"></div>
    </div>

  </section>
</template>

<script>
import course1 from '@/assets/course-1.png';
import course2 from '@/assets/course-2.png';
import course3 from '@/assets/course-3.png';
import course4 from '@/assets/course-4.png';
import course5 from '@/assets/course-5.png';
import course6 from '@/assets/course-6.png';

export default {
  name: 'CoursesSection',
  data() {
    return {
      categories: ['All Courses', 'Project Management', 'Business Management', 'Employability Skills', 'Life Learning', 'HR & Finance', 'Design', 'Technology', 'Marketing'],
      selectedCategory: 'All Courses',
      visibleStartIndex: 0,
      visibleEndIndex: 4,
      courses: [
        { id: 1, image: course1, title: 'PRINCE2® 7 Practitioner: Interactive & Gamified Learning', category: 'Project Management', description: 'The PRINCE2® 7 Practitioner Interactive & Gamified Learning is designed for aspiring and current proje...', price: '$99' },
        { id: 2, image: course2, title: 'Course 2', category: 'Business Management', description: 'Intermediate skills in Course 2.', price: '$129' },
        { id: 3, image: course3, title: 'Course 3', category: 'Employability Skills', description: 'Advanced techniques in Course 3.', price: '$149' },
        { id: 4, image: course4, title: 'Course 4', category: 'Life Learning', description: 'Master Course 4 concepts.', price: '$179' },
        { id: 5, image: course5, title: 'Course 5', category: 'HR & Finance', description: 'Introduction to Course 5.', price: '$89' },
        { id: 6, image: course6, title: 'Course 6', category: 'Project Management', description: 'Deep dive into Course 6.', price: '$109' },
        { id: 7, image: course1, title: 'Design Course 1', category: 'Design', description: 'Introductory design concepts.', price: '$99' },
        { id: 8, image: course2, title: 'Technology Course 1', category: 'Technology', description: 'Basics of technology.', price: '$129' },
        { id: 9, image: course3, title: 'Marketing Course 1', category: 'Marketing', description: 'Marketing principles and practices.', price: '$149' },
      ]
    };
  },
  computed: {
    filteredCourses() {
      if (this.selectedCategory === 'All Courses') {
        return this.courses;
      }
      return this.courses.filter(course => course.category === this.selectedCategory);
    },
    visibleCategories() {
      return this.categories.slice(this.visibleStartIndex, this.visibleEndIndex + 1);
    }
  },
  methods: {
    filterCourses(category) {
      this.selectedCategory = category;
    },
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
}
</script>

<style scoped>
.scrollbar-hidden::-webkit-scrollbar {
  display: none;
}
.px-10 {
  padding-left: 2.5rem;
  padding-right: 2.5rem;
}
.sloped-section {
  position: relative;
  clip-path: polygon(0 0, 100% 7%, 100% 97%, 0 100%);
}
@media (max-width: 639px) { 
  .sloped-section {
    clip-path: polygon(0 0, 100% 1%, 100% 97%, 0 100%);
  }
}
@media (min-width: 1024px) {
  .sloped-section {
    clip-path: polygon(0 0, 100% 7%, 100% 97%, 0 100%);
  }
}
.hover\:bg-gray-700:hover {
  background-color: #4a5568;
}
.transition {
  transition: all 0.3s ease;
}
.duration-300 {
  transition-duration: 0.3s;
}
</style>
