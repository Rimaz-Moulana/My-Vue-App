<template>
    <section class="relative bg-bgRose p-10 text-center overflow-hidden">
        <div class="grid md:grid-cols-5 lg:grid-cols-5 sm:grid-cols-1">
            <div class="p-10 mt-8">
                <div class="flex items-center justify-center">
                    <img :src="Logo" alt="Logo" class="h-10 mr-4">
                    <div class="flex items-baseline">
                        <span class="text-black font-extrabold font-mono text-3xl">Global</span>
                        <span class="text-gray-600 text-3xl font-mono ml-1">Edulink</span>
                    </div>
                </div>
                <div class="mt-12 text-left float-left">
                    <h2 class="text-xl text-left float-left">Global Edulink offers accessible, high-quality online education for all, with flexible programs tailored to fit into daily life, empowering learners worldwide to achieve personal and professional goals.</h2>
                </div>
                <div class="flex justify-center space-x-4 p-10 mt-8">
                    <a href="#" class="bg-white rounded-full p-4"><i class="fab fa-facebook-f text-black"></i></a>
                    <a href="#" class="bg-white rounded-full p-4"><i class="fab fa-instagram text-black"></i></a>
                    <a href="#" class="bg-white rounded-full p-4"><i class="fab fa-twitter text-black"></i></a>
                    <a href="#" class="bg-white rounded-full p-4"><i class="fab fa-linkedin-in text-black"></i></a>
                    <a href="#" class="bg-white rounded-full p-4"><i class="fab fa-youtube text-black"></i></a>
                </div>
                <div class="mt-6">
                    <button class="bg-green-500 text-white font-bold py-2 px-4 w-full rounded-[5px]">Verify Your Certificate</button>
                </div>
            </div>
            <div class="bg-bgRose p-4 mt-12">
                <a>Free Courses</a><br>
                <a>Free Courses</a><br>
                <a>Free Courses</a><br>
                <a>Free Courses</a><br>
                <a>Free Courses</a><br>
                <a>Free Courses</a><br>
                <a>Free Courses</a><br>
                <a>Free Courses</a><br>
            </div>
            <div class="p-4 mt-12">
                <a>Free Courses</a><br>
                <a>Free Courses</a><br>
                <a>Free Courses</a><br>
                <a>Free Courses</a><br>
                <a>Free Courses</a><br>
                <a>Free Courses</a><br>
                <a>Free Courses</a><br>
                <a>Free Courses</a><br>
            </div>
            <div class="bg-bgRose p-4 mt-12">
                <a>Free Courses</a><br>
                <a>Free Courses</a><br>
                <a>Free Courses</a><br>
                <a>Free Courses</a><br>
                <a>Free Courses</a><br>
                <a>Free Courses</a><br>
                <a>Free Courses</a><br>
                <a>Free Courses</a><br>
            </div>
            <div class="bg-bgRose p-4 mt-12">
                <a>Free Courses</a><br>
                <a>Free Courses</a><br>
                <a>Free Courses</a><br>
                <a>Free Courses</a><br>
                <a>Free Courses</a><br>
                <a>Free Courses</a><br>
                <a>Free Courses</a><br>
                <a>Free Courses</a><br>
            </div>
        </div>

        <div class="grid md:grid-cols-2 gap-1 lg:grid-cols-2 sm:grid-cols-1">
            <div class="mt-0 bg-bgRose px-8">
                <div class="py-5">
                    <p class="text-1xl text-left">Choose your preferred language</p>
                </div>
                <div class="flex flex-col md:flex-row md:items-center md:justify-center lg:w-[60%]">
                    <input type="text" placeholder="Enter your details" class="border lg:w-[20%] sm:w-[100%] border-gray-300 p-2 rounded-md mb-4 md:mb-0 md:mr-4 flex-grow">
                    <button class="bg-black text-white font-bold py-2 px-4 rounded-md">Apply</button>
                </div>
                <div class="lg:mt-20 float-left">
                    <a>Copyright © 2015 - 2024 - Global Edulink All rights reserved</a>
                </div>
                
            </div>
            
            <div class="grid md:grid-rows-2  lg:grid-rows-2 justify-center sm:grid-cols-1 lg:mt-5" >
                <div class="justify-center items-center flex lg:mr-40 py-16 lg:px-5 px-20">
                    <img :src="require('@/assets/image 26.png')" class="h-10 mr-10">
                    <img :src="require('@/assets/footer-logo-1.png')" class="h-10 mr-10">
                    <img :src="require('@/assets/footer-logo-2.png')" class="h-10 mr-10">
                    <img :src="require('@/assets/footer-logo-3.png')" class="h-10 mr-10">
                </div>
                <div class="justify-center flex lg:mr-40 sm:px-5">
                    <img :src="require('@/assets/image 59.png')" alt="Logo" class="h-10 mr-4">
                    <img :src="require('@/assets/image 61.png')" alt="Logo" class="h-10 mr-4">
                    <img :src="require('@/assets/image 63.png')" alt="Logo" class="h-10 mr-4">
                    <img :src="require('@/assets/image 74.png')" alt="Logo" class="h-10 mr-4">
                    <img :src="require('@/assets/image 73.png')" alt="Logo" class="h-10 mr-4">
                    <img :src="require('@/assets/image 60.png')" alt="Logo" class="h-10 mr-4">
                </div>
            </div>
            
        </div>
    </section>
</template>

<script>
import Logo from '@/assets/logo.png';

export default {
    name: 'FooterSection',
    data() {
        return {
            Logo: Logo,
        };
    },
};
</script>

<style scoped>
/* Add any additional styling if needed */
</style>
