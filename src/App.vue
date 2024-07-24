<template>
  <div id="app">
      <HeaderSection />
      <HeroSection />
      <CompanySection />
      <CoursesSection />
      <FeaturesSection />
      <CategoriesSection />
      <ExpertsSection />
      <TestinomialsSection />
      <FooterSection />
  </div>
</template>

<script>
import CategoriesSection from './components/CategoriesSection.vue';
import CompanySection from './components/CompanySection.vue';
import CoursesSection from './components/CoursesSection.vue';
import ExpertsSection from './components/ExpertsSection.vue';
import FeaturesSection from './components/FeaturesSection.vue';
import FooterSection from './components/FooterSection.vue';
import HeaderSection from './components/HeaderSection.vue';
import HeroSection from './components/HeroSection.vue';
import TestinomialsSection from './components/TestinomialsSection.vue';



export default {
  name: 'App',
  components: {
    HeaderSection,
    HeroSection,
    CompanySection,
    CoursesSection,
    FeaturesSection,
    CategoriesSection,
    ExpertsSection,
    TestinomialsSection,
    FooterSection,
  }
}
</script>

<!-- <style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style> -->
