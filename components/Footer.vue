<template>
  <footer class="relative bg-[#07081A] pb-20">
    <img class="lg:block hidden absolute 2xl:left-[400px] left-[200px] bottom-0" src="../public/footer/footer.png" alt="">
    <div class="lg:hidden container mx-auto p-5 border-t">
      <div class="flex justify-between">
        <div class="flex flex-col gap-4">
          <img src="../public/Logo.png" alt="Logo team" />
          <h3 class="text-white text-[26px] font-['Roboto'] ml-[40px]">
            Folow us on 
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

        <div class="flex gap-20">
          <div class="flex flex-col gap-3">
            <h3 class="text-white text-[26px] font-['Roboto']">Links</h3>
            <ul
              class="flex flex-col gap-3 text-[18px] text-white font-['Poppins'] font-light"
            >
              <li class="hover:underline">
                <NuxtLink to="/">Home</NuxtLink>
              </li>
              <li class="hover:underline">
                <NuxtLink to="about">About</NuxtLink>
              </li>
              <li class="hover:underline">
                <NuxtLink to="service">Service</NuxtLink>
              </li>
              <li class="hover:underline">
                <NuxtLink to="contact">Contact</NuxtLink>
              </li>
            </ul>
          </div>
          <div class="flex flex-col gap-3">
            <h3 class="text-white text-[26px] font-['Roboto']">Information</h3>
            <ul
              class="flex flex-col gap-10 text-[18px] text-white font-['Poppins'] font-light"
            >
              <li class="hover:underline flex flex-col gap-2">
                <a href="tel:+998 90 555 55 56">+998 90 555 55 56</a>
                <a href="tel:+998 90 555 55 56">+998 90 555 55 56</a>
              </li>
              <li class="hover:underline">
                <a
                  href="https://maps.app.goo.gl/qj5QUqChZja6GUL57"
                  target="_blank"
                  >Guliston shahar Yoshlar <br />
                  markazi Manzil:6-mavze</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
  
  <script setup>
</script>
  
  <style lang="scss" scoped>
</style>