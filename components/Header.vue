<template>
  <header class="bg-transparent fixed top-0 z-20 w-full">
    <div class="container mx-auto p-5 border-b">
      <nav class="hidden lg:flex w-full flex items-center justify-between">
        <div>
          <NuxtLink
            :to="localPath('/')"
            class="bg-[url('/Logo.png')] bg-no-repeat bg-center bg-cover w-[170px] h-[80px] block"
          >
          </NuxtLink>
        </div>
        <div>
          <ul
            class="flex items-center gap-8 text-[18px] text-white font-['Poppins'] font-light"
          >
            <li class="hover:font-bold">
              <NuxtLink :to="localPath('/')">{{ $t("header-home") }}</NuxtLink>
            </li>
            <li class="hover:font-bold">
              <NuxtLink :to="localPath('/about')">{{
                $t("header-about")
              }}</NuxtLink>
            </li>
            <li class="hover:font-bold">
              <NuxtLink :to="localPath('/service')">{{
                $t("header-service")
              }}</NuxtLink>
            </li>
            <li class="hover:font-bold">
              <NuxtLink :to="localPath('/portfolio')">{{
                $t("header-portfolio")
              }}</NuxtLink>
            </li>
            <li class="hover:font-bold">
              <NuxtLink :to="localPath('/contact')">{{
                $t("header-contact")
              }}</NuxtLink>
            </li>
            <li class="pl-5 border-l py-5">
              <select
                v-model="language"
                class="bg-transparent outline-none text-[#1976dc]"
              >
                <option
                  class="bg-[#323459] text-white"
                  v-for="item in locales"
                  :key="typeof item === 'object' ? item.code : item"
                  :value="typeof item === 'object' ? item.code : item"
                >
                  {{ typeof item === "object" ? item.name : item }}
                </option>
              </select>
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
                      ? 'absolute right-2 top-8 rounded-l-lg rounded-b-lg bg-[#323459] flex flex-col'
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

      <!-- response mobile start -->

      <nav class="lg:hidden relative w-full flex items-center justify-between">
        <div class="flex items-center justify-between w-full">
          <button @click="modalmenu" class="text-[#1976DC] text-[30px]">
            <i class="bx bx-menu"></i>
          </button>

          <div
            :class="
              menu
                ? 'fixed left-0 top-0 z-10 pt-20 bg-[#323459] w-full h-[100vh] text-[18px] text-white font-[Poppins] font-light'
                : 'hidden'
            "
          >
            <div class="container mx-auto relative w-full">
              <div
                class="absolute top-[-60px] flex items-center justify-between w-full px-5"
              >
                <button @click="modalmenu" class="text-[#1976DC] text-[35px]">
                  <i class="bx bx-x"></i>
                </button>
                <button
                  @click="modalbell"
                  class="text-[#1976DC] mb-1 text-[25px] cursor-pointer flex items-center"
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
                    ? 'absolute left-14 border w-[300px] rounded-l-lg rounded-b-lg top-0 bg-[#323459] flex flex-col'
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
            <ul :class="bell ? 'hidden' : 'flex flex-col items-center gap-8'">
              <li @click="modalmenu" class="hover:font-bold">
                <NuxtLink :to="localPath('/')">{{
                  $t("header-home")
                }}</NuxtLink>
              </li>
              <li @click="modalmenu" class="hover:font-bold">
                <NuxtLink :to="localPath('/about')">{{
                  $t("header-about")
                }}</NuxtLink>
              </li>
              <li @click="modalmenu" class="hover:font-bold">
                <NuxtLink :to="localPath('/service')">{{
                  $t("header-service")
                }}</NuxtLink>
              </li>
              <li @click="modalmenu" class="hover:font-bold">
                <NuxtLink :to="localPath('/portfolio')">{{
                  $t("header-portfolio")
                }}</NuxtLink>
              </li>
              <li @click="modalmenu" class="hover:font-bold">
                <NuxtLink :to="localPath('/contact')">{{
                  $t("header-contact")
                }}</NuxtLink>
              </li>
            </ul>
          </div>

          <div>
            <NuxtLink to="/">
              <img src="/Logo.png" alt="" width="150px" height="50px" />
            </NuxtLink>
          </div>
          <select
            v-model="language"
            class="bg-transparent outline-none text-[#1976dc] border border-[#1976dc] p-1 rounded-lg"
          >
            <option
              class="bg-[#323459] text-white"
              v-for="item in locales"
              :key="typeof item === 'object' ? item.code : item"
              :value="typeof item === 'object' ? item.code : item"
            >
              {{ typeof item === "object" ? item.name : item }}
            </option>
          </select>
        </div>
      </nav>

      <!-- response mobile end -->
    </div>
  </header>
</template>
  
  <script setup>
import { ref, onMounted } from "vue";
const localPath = useLocalePath();

const { locales, locale, setLocale } = useI18n();

const language = computed({
  get: () => locale.value,
  set: (value) => {
    setLocale(value);
  },
});

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
const modalmenu = () => {
  if (menu.value || !menu.value) {
    lang.value = false;
    bell.value = false;
    menu.value = !menu.value;
  } else {
    menu.value = !menu.value;
  }
};

onMounted(() => {
  window.addEventListener("scroll", function () {
    let header = document.querySelector("header");
    let container = this.document.querySelector(".container");
    header.classList.toggle("headerScroll", window.scrollY > 0);
    container.classList.toggle("border-none", window.scrollY > 0);
  });
});
</script>
  
  <style lang="scss">
.router-link-exact-active {
  color: #1976dc;
}

.headerScroll {
  background: #07081a;
}
</style>