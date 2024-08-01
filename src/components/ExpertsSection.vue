<template>
  <section class="bg-bgRose px-10 lg:p-20 lg:px-36 sm:px-10 text-center py-1 z-0">
    <h2 class="text-3xl font-bold lg:mb-24 mt-0">
      Our experts design tailored courses to solve workforce<br>challenges and drive business success.
    </h2>

    <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
      <div v-for="course in visibleCourses" :key="course.id" class="bg-white p-4 rounded-lg shadow-lg flex flex-col">
        <div class="w-full aspect-w-16 aspect-h-9 mb-4 px-2">
          <img :src="course.image" alt="Course Image" class="w-full h-full object-contain">
        </div>
        <h3 class="text-xl font-bold mb-2">{{ course.title }}</h3>
        <div class="flex mb-2 justify-start flex-wrap">
          <div class="flex items-center bg-bgModule p-1 rounded-xl px-3 mr-2 mb-2 md:mb-0">
            <i class="fas fa-clock mr-2"></i>
            <span>Modules</span>
          </div>
          <div class="flex items-center bg-bgModule p-1 rounded-xl px-3">
            <i class="fas fa-user mr-2"></i>
            <span>Professional Certificate</span>
          </div>
        </div>
        <p class="text-gray-700 mb-2">{{ course.description }}</p>
        <div class="text-xl font-bold">
          From <span class="text-black">{{ course.price }}</span>/month
        </div>
      </div>
    </div>
    <div class="relative flex flex-col sm:flex-row sm:w-[70%] justify-center lg:justify-center items-center lg:mx-40 mt-20 mb-36 lg:mb-[-20px] z-10 space-y-4 sm:space-y-0 lg:space-x-4">
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
  name: 'ExpertsSection',
  data() {
    return {
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
      ],
      showMore: false
    };
  },
  computed: {
    visibleCourses() {
      return this.showMore ? this.courses : this.courses.slice(0, 3);
    }
  },
  methods: {
    toggleShowMore() {
      this.showMore = !this.showMore;
    }
  }
}
</script>

<style scoped>
/* Add any additional styling if needed */
</style>
