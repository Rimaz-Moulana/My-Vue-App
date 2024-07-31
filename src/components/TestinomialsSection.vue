<template>
  <section class="relative py-16">
    <div class="sloped-section mt-72"></div>
    <div class="text-center mb-12 relative z-20">
      <h2 class="text-3xl text-black font-bold mb-4">Client Testimonials</h2>
      <p class="text-black text-2xl">
        Hear Heart-warming Stories from Our Valued Customers Sharing Their Experience and
        <br />Success with Our Services
      </p>
    </div>
    <div class="relative z-20">
      <div class="grid  sm:grid-cols-1 lg:grid-cols-4 gap-10 mb-8 px-20">
        <div
          v-for="(category, index) in visibleCategories"
          :key="category.name"
          :class="['bg-[#F3E8FD] shadow-lg rounded-lg p-6 text-center', getColorClass(index)]"
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
          <p class="text-green-600 text-4xl leading-none mb-4">“</p>
          <p class="text-gray-600 mb-4">{{ category.description }}</p>
          <img src="https://cdn.trustpilot.net/assets/shared/favicons/trustpilot/favicon-16x16.png" alt="Trustpilot" class="w-12 h-4 mx-auto">
        </div>
      </div>
      <div class="flex justify-center mb-4">
        <button
          @click="prevCategory"
          class="p-2 bg-white text-black rounded-[75%] hover:bg-gray-700 focus:outline-none"
        >
          <i class="fas fa-chevron-left "></i>
        </button>
        <div class="flex items-center mx-4">
          <div v-for="index in 2" :key="index" :class="['h-1', barClass(index)]" style="width: 140px;"></div>
        </div>
        <button
          @click="nextCategory"
          class="p-2 bg-white text-black rounded-[75%] hover:bg-gray-700 focus:outline-none"
        >
          <i class="fas fa-chevron-right "></i>
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import E1 from '@/assets/E1.png';
import E2 from '@/assets/E2.png';
import E3 from '@/assets/E3.png';
import E4 from '@/assets/E4.png';

export default {
  name: 'CategoriesSection',
  data() {
    return {
      categories: [
        {
          image: E1,
          name: 'Steven',
          country: 'United Kingdom',
          description:
            'Massive shout out to Ashley from the Mentor Support Service. Ashley provided lots of important advice when submitting and looking through work which had been submitted!.',
        },
        {
          image: E2,
          name: 'Shaji',
          country: 'Norway',
          description:
            'The course was quite easy to follow and well structured to meet a high standard required for the Award. The assignments did cover the course very well and ensured that all learning points were tested thoroughly.',
        },
        {
          image: E3,
          name: 'Mark',
          country: 'United Kingdom',
          description:
            'I signed up for the AET (formerly PTTLS Course last year. Sadly I became seriously ill, and have only now been able to start to put life together. Today I found out that the Company required me to inform them.',
        },
        {
          image: E4,
          name: 'Jean',
          country: 'Scotland',
          description:
            'I\'m currently enrolled in the Life Coaching and Coaching Level 5 Course. I can feel that the course has already enhanced my communication in both professional and swift, so it makes sense in so many ways, especially when you\'re trying.',
        },
        {
          image: E1,
          name: 'Laura',
          country: 'Canada',
          description:
            'The team provided exceptional support throughout my learning journey. The materials were comprehensive and easy to follow, making the learning experience enjoyable.',
        },
        {
          image: E2,
          name: 'Tom',
          country: 'Australia',
          description:
            'The course structure was fantastic, and the support from the mentors was invaluable. I would highly recommend it to anyone looking to further their education.',
        },
        {
          image: E3,
          name: 'Emily',
          country: 'United States',
          description:
            'I had a great experience with the program. The instructors were knowledgeable and always available to help. The course content was relevant and up-to-date.',
        },
        {
          image: E4,
          name: 'Carlos',
          country: 'Spain',
          description:
            'The platform was user-friendly, and the support team was always ready to assist. The course material was engaging and made learning fun.',
        },
        {
          image: E1,
          name: 'Marie',
          country: 'France',
          description:
            'I enjoyed the flexibility of the course, which allowed me to learn at my own pace. The support from the mentors was excellent, and I feel much more confident in my skills now.',
        },
      ],
      visibleStartIndex: 0,
      visibleEndIndex: 3,
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
    getColorClass(index) {
      const colors = ['bg-purple-200', 'bg-yellow-200', 'bg-purple-300'];
      return colors[index % 3];
    },
    barClass(index) {
      const currentBarIndex = Math.floor(this.visibleStartIndex / Math.ceil(this.categories.length / 2));
      return currentBarIndex === index - 1 ? 'bg-black' : 'bg-gray-300';
    },
  },
};
</script>

<style scoped>
.bg-black {
  background-color: #000;
}

.bg-white {
  background-color: #fff;

}

.text-black {
  color: #000;
}

.text-white {
  color: #fff;
}

.bg-purple-200 {
  background-color: #E8DCFA;
}

.bg-yellow-200 {
  background-color: #FFF3CF  ;
}

.bg-yellow-300 {
  background-color: #FFDA6E  ;
}

.bg-purple-300 {
  background-color: #D1C4E9;
}

img {
  width: 4rem; /* Adjust image size as needed */
  height: 4rem;
  object-fit: cover;
  border-radius: 50%;
}

.sloped-section {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  clip-path: polygon(0 0, 100% 20%, 100% 100%, 0 100%);
  z-index: -1;
  background-color: #000;
}

@media (max-width: 639px) { /* sm: breakpoint */
  .sloped-section {
    clip-path: polygon(0 0, 100% 10%, 100% 100%, 0 100%);
  }
}

@media (min-width: 1024px) { /* lg: breakpoint */
  .sloped-section {
    clip-path: polygon(0 0, 100% 30%, 100% 100%, 0 100%);
  }
}
</style>
