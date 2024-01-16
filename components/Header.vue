<template>
  <header class="bg-transparent fixed top-0 z-20 w-full">
    <div class="container mx-auto p-5 border-b">
      <nav class="hidden lg:flex w-full flex items-center justify-between">
        <div>
          <NuxtLink :to="localPath('/')">
            <img src="/Logo.png" alt="" />
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
              <div class="relative">
                <button
                  @click="modallang"
                  class="flex items-end text-white hover:font-bold font-['Poppins'] font-light cursor-pointer"
                >
                  <span>{{ langName_1 }}</span>
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
                      ? 'absolute z-10 right-2 top-8 w-[100px] rounded-l-lg rounded-b-lg bg-[#323459] flex flex-col'
                      : 'hidden'
                  "
                >
                  <button
                    @click="modallang"
                    class="bg-transparent text-white font-['Poppins'] font-light px-5 py-3"
                  >
                    <a :href="localesKey">{{ langName_2 }}</a>
                  </button>
                  <button
                    @click="modallang"
                    class="bg-transparent text-white font-['Poppins'] font-light px-5 py-3"
                  >
                    <a :href="localesKey2">{{ langName_3 }}</a>
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
                    ? 'absolute right-14 border w-[100px] rounded-l-lg rounded-b-lg top-0 bg-[#323459] flex flex-col'
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
              <li class="hover:font-bold">
                <NuxtLink :to="localPath('/')">{{
                  $t("header-home")
                }}</NuxtLink>
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
            </ul>
          </div>

          <div>
            <NuxtLink to="/">
              <img src="/Logo.png" alt="" width="150px" height="50px" />
            </NuxtLink>
          </div>
          <div class="relative">
            <button
              @click="modallang"
              class="flex items-center gap-4 text-white hover:font-bold font-['Poppins'] font-light cursor-pointer border p-1 rounded-lg border-[#1976DC]"
            >
              <i class="bx bx-world text-[#1976DC]"></i>
              <span>{{ langName_1 }}</span>
            </button>
            <div
              :class="
                lang
                  ? 'absolute z-10 right-0 top-10 rounded-l-lg rounded-b-lg bg-[#323459] flex flex-col'
                  : 'hidden'
              "
            >
              <button
                @click="modallang"
                class="bg-transparent text-white font-['Poppins'] font-light px-5 py-3"
              >
                <a :href="localesKey">{{ langName_2 }}</a>
              </button>
              <button
                @click="modallang"
                class="bg-transparent text-white font-['Poppins'] font-light px-5 py-3"
              >
                <a :href="localesKey2">{{ langName_3 }}</a>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <!-- response mobile end -->
    </div>
  </header>
</template>
  
  <script setup>
import { ref, onMounted } from "vue";
const localPath = useLocalePath();

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

const localesKey = ref("/uz-UZ");
const localesKey2 = ref("/ru-RU");
const langName_1 = ref("🇺🇸 Eng")
const langName_2 = ref("🇺🇿 Uzb")
const langName_3 = ref("🇷🇺 Rus")

onMounted(() => {
  window.addEventListener("scroll", function () {
    let header = document.querySelector("header");
    let container = this.document.querySelector(".container");
    header.classList.toggle("headerScroll", window.scrollY > 0);
    container.classList.toggle("border-none", window.scrollY > 0);
  });
  
  const router = useRouter();
  const key = ref(router.currentRoute._value.path);
  console.log(router.currentRoute._value.path);

  if (key.value == "/uz-UZ") {
    localesKey.value = "/";
    localesKey2.value = "/ru-RU";
    langName_1.value = "🇺🇿 Uzb";
    langName_2.value = "🇺🇸 Eng";
    langName_3.value = "🇷🇺 Rus";
  }

  if (key.value == "/ru-RU") {
    localesKey.value = "/";
    localesKey2.value = "/uz-UZ";
    langName_1.value = "🇷🇺 Rus";
    langName_2.value = "🇺🇸 Eng";
    langName_3.value = "🇺🇿 Uzb";
  }

  if (key.value == "/") {
    localesKey.value = "/uz-UZ";
    localesKey2.value = "/ru-RU";
    langName_1.value = "🇺🇸 Eng";
    langName_2.value = "🇺🇿 Uzb";
    langName_3.value = "🇷🇺 Rus";
  }
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