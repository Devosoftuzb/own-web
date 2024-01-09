<template>
    <header class="bg-transparent fixed z-10 w-full">
        <div class="container mx-auto p-5 border-b">
            <nav class="w-full flex items-center justify-between">
                <div>
                    <NuxtLink to="/">
                        <img src="../public/Logo.png" alt="">
                    </NuxtLink>
                </div>
                <div>
                    <ul class="flex items-center gap-8 text-[18px] text-white font-['Poppins'] font-light">
                        <li class="hover:font-bold">
                            <NuxtLink to="/">Home</NuxtLink>
                        </li>
                        <li class="hover:font-bold">
                            <NuxtLink to="about">About</NuxtLink>
                        </li>
                        <li class="hover:font-bold">
                            <NuxtLink to="service">Service</NuxtLink>
                        </li>
                        <li class="hover:font-bold">
                            <NuxtLink to="contact">Contact</NuxtLink>
                        </li>
                        <li class="pl-5 border-l py-5">
                            <div class="relative">
                                <button @click="modallang" class="flex items-end text-white hover:font-bold font-['Poppins'] font-light cursor-pointer">Eng <i :class="lang ? 'bx bx-chevron-up text-[#1976DC]' : 'bx bx-chevron-down text-[#1976DC]'"></i></button>
                                <div :class="lang ? 'absolute z-10 left-0 top-8 bg-[#323459] flex flex-col' : 'hidden'">
                                    <button class="bg-transparent text-white font-['Poppins'] font-light px-5 py-3">Rus</button>
                                    <button class="bg-transparent text-white font-['Poppins'] font-light px-5 py-3">Uzb</button>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="relative">
                                <button @click="modalbell" class="text-[#1976DC] text-[25px] cursor-pointer flex items-center">
                                    <i class='bx bxs-bell flex items-start' >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                                            <circle cx="4" cy="4" r="4" fill="#E76514"/>
                                        </svg>
                                    </i>    
                                </button>
                                <div :class="bell ? 'absolute right-0 top-8 bg-[#323459] flex flex-col' : 'hidden'">
                                    <a href="#" class="p-5 w-[300px]">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</a>
                                    <hr>
                                    <a href="#" class="p-5 w-[300px]">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </header>
</template>

<script setup>
import { ref } from 'vue';
const lang = ref(false);
const modallang = () => (lang.value = !lang.value);

const bell = ref(false);
const modalbell = () => (bell.value = !bell.value);
console.log();
</script>

<style lang="scss" scoped>
.router-link-exact-active{
    color: #1976DC;
  }
</style>