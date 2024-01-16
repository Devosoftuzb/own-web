<template>
  <footer class="relative bg-[#07081A] sm:pb-20 z-20">
    <img
      class="md:block hidden absolute z-[-10] 2xl:left-[400px] lg:left-[200px] bottom-0"
      src="/footer/footer.png"
      alt=""
    />
    <div class="container mx-auto p-5 lg:border-t">
      <div class="flex md:flex-row flex-col justify-between">
        <div class="md:block hidden flex flex-col gap-4">
          <img src="/Logo.png" alt="Logo team" />
          <h3
            class="text-white text-[26px] font-['Roboto'] ml-[40px] font-semibold"
          >
            {{ $t("footer-mediya") }}
          </h3>
          <div
            class="text-[#1976DC] text-[24px] flex itmes-center gap-3 ml-[40px]"
          >
            <i class="bx bxl-youtube"></i>
            <i class="bx bxl-telegram"></i>
            <i class="bx bxl-instagram-alt"></i>
            <i class="bx bxl-facebook-circle"></i>
            <i class="bx bxl-linkedin"></i>
          </div>
        </div>

        <div
          class="flex md:gap-20 justify-between md:w-auto w-full md:border-none border-b md:pb-none pb-10"
        >
          <div class="flex flex-col gap-3">
            <h3 class="text-white text-[26px] font-['Roboto'] font-semibold">
              {{ $t("footer-links") }}
            </h3>
            <ul
              class="flex flex-col gap-3 text-[18px] text-white font-['Poppins'] font-light"
            >
              <li class="hover:underline">
                <NuxtLink :to="localPath('/')">{{ $t("footer-link-home") }}</NuxtLink>
              </li>
              <li class="hover:underline">
                <NuxtLink :to="localPath('/about')">{{ $t("footer-link-about") }}</NuxtLink>
              </li>
              <li class="hover:underline">
                <NuxtLink :to="localPath('/service')">{{ $t("footer-link-service") }}</NuxtLink>
              </li>
              <li class="hover:underline">
                <NuxtLink :to="localPath('/portfolio')">{{ $t("footer-link-portfolio") }}</NuxtLink>
              </li>
              <li class="hover:underline">
                <NuxtLink :to="localPath('/contact')">{{ $t("footer-link-contact") }}</NuxtLink>
              </li>
            </ul>
          </div>
          <div class="flex flex-col gap-3">
            <h3 class="text-white text-[26px] font-['Roboto'] font-semibold">
              {{ $t("footer-info") }}
            </h3>
            <ul
              class="flex flex-col md:gap-10 gap-5 text-[18px] text-white font-['Poppins'] font-light"
            >
              <div
                class="md:hidden text-[#1976DC] text-[24px] flex itmes-center gap-3"
              >
                <a href="#"><i class="bx bxl-youtube"></i></a>
                <a href="#"><i class="bx bxl-telegram"></i></a>
                <a href="#"><i class="bx bxl-instagram-alt"></i></a>
                <a href="#"><i class="bx bxl-facebook-circle"></i></a>
                <a href="#"><i class="bx bxl-linkedin"></i></a>
              </div>
              <li class="hover:underline flex flex-col gap-2">
                <a href="tel:+998 90 555 55 56">+998 90 555 55 56</a>
                <a href="tel:+998 90 555 55 56">+998 90 555 55 56</a>
              </li>
              <li class="hover:underline w-56">
                <a
                  href="https://maps.app.goo.gl/qj5QUqChZja6GUL57"
                  target="_blank"
                  >{{ $t("footer-location") }}</a
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="sm:hidden flex items-center justify-between mt-10">
          <h3 class="text-[21px] font-['Roboto'] font-semibold text-white">
            2024 DevoSoft IT group
          </h3>
          <NuxtLink :to="localPath('/')">
            <img src="/Logo.png" alt="" width="150px" height="50px" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>
  
  <script setup>
const localPath = useLocalePath();
</script>
  
  <style lang="scss" scoped>
</style>