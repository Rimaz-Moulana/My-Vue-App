<template>
    <header class="bg-bgRose p-4 flex justify-between items-center">
        <div class="flex items-center">
            <img :src="imgSrc" alt="Logo" class="h-10 mr-4">
            <a class="text-black font-extrabold font-mono text-3xl">Global</a>
            <a class="text-gray-600 text-3xl font-mono ">Edulink</a>
        </div>
        <div :class="{'hidden md:flex space-x-4 mr-[35%]': true, 'flex flex-col mt-4 md:mt-0 md:space-x-4 md:flex-row': isOpen}">
            <select name="Explore Courses" id="" class="text-black bg-transparent font-semibold">
                <option>Explore Courses</option>
            </select>
        </div>
        <nav :class="{'hidden md:flex space-x-4': true, 'flex flex-col mt-4 md:mt-0 md:space-x-4 md:flex-row': isOpen}">
        
            <a href="#" class="text-black font-semibold mt-[10px]">Corporate Training</a>
            <a href="#" class="text-black font-semibold mt-[10px]">Blog</a>
            <div class="flex space-x-4 items-center">
                <a href="#" class="flex items-center text-black font-semibold">
                Login
                <img :src="Arrow" alt="Arrow" class="h-4 w-6 ml-2">
                </a>
                <button class="bg-bgRose border-slate-800 border-2 text-black px-4 py-2 rounded">Register</button>
                <button class="bg-green-500 text-white px-4 py-2 rounded">Contact Us</button>
            </div>
        </nav>

        <div class="md:hidden">
            <button @click="toggleMenu" class="text-gray-700 focus:outline-none">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
            </button>
        </div>
    </header>
</template>

<script>
import Arrow from '@/assets/Arrow.png';
import Logo from '@/assets/Logo.png';

export default {
    name: 'HeaderSection',
    data() {
        return {
            isOpen: false,
            imgSrc: Logo,
            Arrow : Arrow
        };
    },
    methods: {
        toggleMenu() {
            this.isOpen = !this.isOpen;
        }
    }
}
</script>
