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
                <div class="mt-8">
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

       <div class="grid md:grid-cols-2 gap-20 lg:grid-cols-2 sm:grid-cols-1">
        <div class="mt-12 bg-bgRose p-8 rounded-lg shadow-lg">
            
            <h3 class="text-2xl font-bold mb-4">Apply Now</h3>
            <div class="flex flex-col md:flex-row md:items-center md:justify-center">
                <input type="text" placeholder="Enter your details" class="border border-gray-300 p-2 rounded-md mb-4 md:mb-0 md:mr-4 flex-grow">
                <button class="bg-black text-white font-bold py-2 px-4 rounded-md">Apply</button>
            </div>
        </div> 
        <div>
            
        </div>
         <a >Copyright © 2015 - 2024 -Global Edulink All rights reserved</a>
    </div>
    </section>
</template>

<script>
import Logo from '@/assets/Logo.png';

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
