<template>
    <section class="p-10 bg-bgRose rounded-se-[20%]">
      <h2 class="text-3xl font-bold text-center mb-8 mt-20">Master Your Career Growth with Our Top-Rated, Expert-Led Courses</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="course in courses" :key="course.id" class="bg-white p-4 rounded-lg shadow-lg flex flex-col">
          <div class="w-full aspect-w-16 aspect-h-9 mb-4">
            <img :src="course.image" alt="Course Image" class="w-full h-full object-contain">
          </div>
          <h3 class="text-xl font-bold mb-2">{{ course.title }}</h3>
          <p class="text-gray-700 mb-2">{{ course.description }}</p>
          <p class="text-Black font-bold">{{ course.price }}</p>
        </div>
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
        courses: [
          { id: 1, image: course1, title: 'PRINCE2® 7 Practitioner: Interactive & Gamified Learning', description: 'Learn the basics of Course 1.', price: '$99' },
          { id: 2, image: course2, title: 'Course 2', description: 'Intermediate skills in Course 2.', price: '$129' },
          { id: 3, image: course3, title: 'Course 3', description: 'Advanced techniques in Course 3.', price: '$149' },
          { id: 4, image: course4, title: 'Course 4', description: 'Master Course 4 concepts.', price: '$179' },
          { id: 5, image: course5, title: 'Course 5', description: 'Introduction to Course 5.', price: '$89' },
          { id: 6, image: course6, title: 'Course 6', description: 'Deep dive into Course 6.', price: '$109' },
        ]
      };
    }
  }
  </script>
  
  <style scoped>
  /* Add any additional styling if needed */
  </style>
  