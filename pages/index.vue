<template>
  <section class="sm:mt-52 mt-32">
    <div class="container mx-auto p-5">
      <div class="flex flex-col sm:items-center gap-5">
        <h1
          class="text-white lg:text-[65px] sm:text-[40px] text-[21px] font-['Roboto'] font-bold"
        >
          DevoSoft - vaqtni qadirlovchilar uchun
        </h1>
        <p
          class="text-[#C9C9C9] lg:w-[622px] sm:w-[600px] pr-5 sm:text-[18px] text-[14px] sm:text-center font-['Poppins'] font-light"
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy
        </p>
        <button
          class="sm:flex hidden btn text-white font-['Roboto'] font-medium text-[21px] px-3 py-1 rounded-[5px]"
        >
          Bog’lanish
        </button>
        <a
          href="tel:+998 90 555 55 56"
          class="sm:hidden flex items-center gap-3 text-white border-2 border-[#1976DC] rounded-md w-[198px] font-light font-['Poppins'] px-2 py-1"
        >
          <i class="bx bx-phone-call text-[#1976DC] text-[24px]"></i>
          qo’ng’iroq qilish
        </a>
      </div>
    </div>
    <img
      class="absolute z-10 top-0 left-0 sm:w-[901.539px] w-[517.311px]"
      src="../public/home/home-blue-effekt.png"
      alt=""
    />
    <img
      class="absolute z-10 right-0 top-20 sm:w-[901.539px] w-[395.15px]"
      src="../public/home/home-orange-effekt.png"
      alt=""
    />
  </section>

  <section class="mt-28">
    <div class="container mx-auto p-5">
      <div class="flex flex-col gap-5">
        <h2 class="text-white text-[45px] font-['Roboto'] font-semibold">
          Bizning ustun taraflarimiz
        </h2>
        <div>
          <div>
            <img src="../public/home/Quality.png" alt="" />
            <h3>Sifatli xizmatlar</h3>
          </div>
          <div>
            <img src="../public/home" alt="" />
            <h3>Xafsizlik tizimi</h3>
          </div>
          <div>
            <img src="" alt="" />
            <h3>Hamyonbob narx</h3>
          </div>
          <div>
            <img src="" alt="" />
            <h3>Sifatli xizmatlar</h3>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.btn {
  background: linear-gradient(
      96deg,
      rgba(25, 118, 220, 0.95) 19%,
      rgba(231, 101, 20, 0.95) 88.27%
    ),
    #fff;
}
</style>