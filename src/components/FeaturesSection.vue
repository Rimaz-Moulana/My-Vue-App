<template>
  <section class="py-16 bg-white">
    <h2 class="text-3xl font-bold text-center mb-12">Choose us for tailored transformation journeys that<br>solve workforce challenges and deliver results.</h2>
    <div class="flex flex-wrap justify-center gap-2 px-4">
      <div v-for="(item, index) in journeyItems" :key="index" class="bg-white shadow-lg rounded-lg p-8 w-full md:w-1/5 text-center flex flex-col">
        <div class="text-2xl mb-4">
          <i :class="[item.icon, 'bg-bgIcon', 'text-black' , 'p-4', 'rounded-[50%]' ,'float-left']"></i>
        </div>
        <h3 class="text-xl font-bold mb-2 mt-2">{{ item.title }}</h3>
        <p class="text-gray-600 mb-4">{{ item.description }}</p>
        <div class="flex items-center mt-auto">
          <img :src="require('@/assets/logo.png')" alt="logo" class="h-5 mr-4">
          <a class="text-black font-extrabold font-mono text-1xl">Global</a>
          <a class="text-gray-600 text-1xl font-mono">Edulink</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FeaturesSection',
  data() {
    return {
      journeyItems: [
        {
          icon: 'fas fa-trophy ',
          title: '10+ Years of Experience',
          description: 'Industry expert tutors with real-world experience in your chosen field',
          link: 'GlobalEdulink'
        },
        {
          icon: 'fas fa-book-open',
          title: '900+ Free Courses',
          description: 'Accessible, high-quality study materials and flexible learning at an affordable price',
          link: 'GlobalEdulink'
        },
        {
          icon: 'fas fa-users',
          title: '4500+ Happy Learners !',
          description: 'We offer a huge range of online courses, qualifications and skills training, catering to a variety of industries',
          link: 'GlobalEdulink'
        },
        {
          icon: 'fas fa-chalkboard-teacher',
          title: '150+ Expert Instructors!',
          description: 'Empowering learners with new skills and the confidence to achieve their full potential',
          link: 'GlobalEdulink'
        }
      ]
    };
  }
};
</script>

<style scoped>
.bg-white {
  background-color: #fff;
}
</style>
