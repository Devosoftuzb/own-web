<template>
  <header class="bg-transparent fixed z-10 w-full">
    <div class="container mx-auto p-5 border-b">
      <nav class="hidden lg:flex w-full flex items-center justify-between">
        <div>
          <NuxtLink to="/">
            <img src="../public/Logo.png" alt="" />
          </NuxtLink>
        </div>
        <div>
          <ul
            class="flex items-center gap-8 text-[18px] text-white font-['Poppins'] font-light"
          >
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
                <button
                  @click="modallang"
                  class="flex items-end text-white hover:font-bold font-['Poppins'] font-light cursor-pointer"
                >
                  Uzb
                  <i
                    :class="
                      lang
                        ? 'bx bx-chevron-up text-[#1976DC]'
                        : 'bx bx-chevron-down text-[#1976DC]'
                    "
                  ></i>
                </button>
                <div
                  :class="
                    lang
                      ? 'absolute z-10 left-0 top-8 bg-[#323459] flex flex-col'
                      : 'hidden'
                  "
                >
                  <button
                    class="bg-transparent text-white font-['Poppins'] font-light px-5 py-3"
                  >
                    Eng
                  </button>
                  <button
                    class="bg-transparent text-white font-['Poppins'] font-light px-5 py-3"
                  >
                    Rus
                  </button>
                </div>
              </div>
            </li>
            <li>
              <div class="relative">
                <button
                  @click="modalbell"
                  class="text-[#1976DC] text-[25px] cursor-pointer flex items-center"
                >
                  <i class="bx bxs-bell flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                    >
                      <circle cx="4" cy="4" r="4" fill="#E76514" />
                    </svg>
                  </i>
                </button>
                <div
                  :class="
                    bell
                      ? 'absolute right-0 top-8 bg-[#323459] flex flex-col'
                      : 'hidden'
                  "
                >
                  <a href="#" class="p-5 w-[300px]"
                    >Lorem ipsum dolor sit amet consectetur, adipisicing
                    elit.</a
                  >
                  <hr />
                  <a href="#" class="p-5 w-[300px]"
                    >Lorem ipsum dolor sit amet consectetur, adipisicing
                    elit.</a
                  >
                </div>
              </div>
            </li>
          </ul>
        </div>
      </nav>

      <!-- response modile -->

      <nav class="lg:hidden relative w-full flex items-center justify-between">
        <div class="flex items-center justify-between w-full">
          <button @click="modalmenu" class="text-[#1976DC] text-[30px]">
            <i class="bx bx-menu"></i>
          </button>

          <ul
            :class="
              menu
                ? 'fixed left-0 top-0 z-10 pt-20 bg-[#323459] w-full h-[100vh] flex flex-col items-center gap-8 text-[18px] text-white font-[Poppins] font-light'
                : 'hidden'
            "
          >
            <div class="relative">
              <div class="flex items-center">
                <button class="text-[#1976DC] text-[30px]">
                  <i class="bx bx-x"></i>
                </button>
                <button
                  @click="modalbell"
                  class="text-[#1976DC] text-[25px] cursor-pointer flex items-center"
                >
                  <i class="bx bxs-bell flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                    >
                      <circle cx="4" cy="4" r="4" fill="#E76514" />
                    </svg>
                  </i>
                </button>
              </div>
              <div
                :class="
                  bell
                    ? 'absolute right-0 top-8 bg-[#323459] flex flex-col'
                    : 'hidden'
                "
              >
                <a href="#" class="p-5 w-[300px]"
                  >Lorem ipsum dolor sit amet consectetur, adipisicing elit.</a
                >
                <hr />
                <a href="#" class="p-5 w-[300px]"
                  >Lorem ipsum dolor sit amet consectetur, adipisicing elit.</a
                >
              </div>
            </div>
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
          </ul>

          <div>
            <NuxtLink to="/">
              <img
                src="../public/Logo.png"
                alt=""
                width="150px"
                height="50px"
              />
            </NuxtLink>
          </div>
          <div class="relative">
            <button
              @click="modallang"
              class="flex items-center gap-4 text-white hover:font-bold font-['Poppins'] font-light cursor-pointer border p-1 rounded-lg border-[#1976DC]"
            >
              <i class="bx bx-world text-[#1976DC]"></i>
              UZ
            </button>
            <div
              :class="
                lang
                  ? 'absolute z-10 left-0 top-10 bg-[#323459] flex flex-col'
                  : 'hidden'
              "
            >
              <button
                class="bg-transparent text-white font-['Poppins'] font-light px-5 py-3"
              >
                ENG
              </button>
              <button
                class="bg-transparent text-white font-['Poppins'] font-light px-5 py-3"
              >
                RU
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>
  
  <script setup>
import { ref } from "vue";
const lang = ref(false);
const modallang = () => {
  if (bell.value) {
    bell.value = false;
    lang.value = !lang.value;
  } else {
    lang.value = !lang.value;
  }
};

const bell = ref(false);
const modalbell = () => {
  if (lang.value) {
    lang.value = false;
    bell.value = !bell.value;
  } else {
    bell.value = !bell.value;
  }
};

const menu = ref(false);
const modalmenu = () => (menu.value = !menu.value);
</script>
  
  <style lang="scss" scoped>
.router-link-exact-active {
  color: #1976dc;
}
</style>