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
      class="absolute top-0 left-0 sm:w-[901.539px] w-[517.311px]"
      src="../public/home/home-blue-effekt.png"
      alt=""
    />
    <img
      class="absolute right-0 top-20 sm:w-[901.539px] w-[395.15px]"
      src="../public/home/home-orange-effekt.png"
      alt=""
    />
  </section>

  <section class="mt-28">
    <div class="container mx-auto p-5">
      <div class="flex flex-col gap-5">
        <h2 class="text-white text-[45px] font-['Roboto'] font-semibold mb-20">
          Bizning ustun taraflarimiz
        </h2>
        <div class="text-white text-[21px] font-['Roboto'] font-medium	flex gap-28 pb-10">
          <div class="cart-1 relative bg-[#323459] w-[300px] p-10 rounded-tl-[25px] rounded-br-[25px] flex flex-col gap-5">
            <img src="../public/home/Quality.png" width="70px" alt="" />
            <h3>Sifatli xizmatlar</h3>
          </div>
          <div class="cart-2 relative bg-[#323459] w-[300px] p-10 rounded-tl-[25px] rounded-br-[25px] flex flex-col gap-5">
            <img src="../public/home/Security Shield.png" width="70px" alt="" />
            <h3>Xafsizlik tizimi</h3>
          </div>
          <div class="cart-3 relative bg-[#323459] w-[300px] p-10 rounded-tl-[25px] rounded-br-[25px] flex flex-col gap-5">
            <img src="../public/home/Money Bag.png" width="70px" alt="" />
            <h3>Hamyonbob narx</h3>
          </div>
          <div class="cart-4 relative bg-[#323459] w-[300px] p-10 rounded-tl-[25px] rounded-br-[25px] flex flex-col gap-5">
            <img src="../public/home/Quality.png" width="70px" alt="" />
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


.cart-1::before {
    content: '';
    position: absolute;
    width: 100px;
    height: 100px;
    border-bottom: 5px solid #E76514;
    border-left: 5px solid #E76514;
    bottom: -20px;
    left: -20px;
}

.cart-1::after {
    content: '';
    position: absolute;
    width: 100px;
    height: 100px;
    border-top: 5px solid #1976DC;
    border-right: 5px solid #1976DC;
    top: -20px;
    right: -20px;
}


.cart-2::before {
    content: '';
    position: absolute;
    width: 100px;
    height: 100px;
    border-bottom: 5px solid #E76514;
    border-left: 5px solid #E76514;
    bottom: -20px;
    left: -20px;
}

.cart-2::after {
    content: '';
    position: absolute;
    width: 100px;
    height: 100px;
    border-top: 5px solid #1976DC;
    border-right: 5px solid #1976DC;
    top: -20px;
    right: -20px;
}

.cart-3::before {
    content: '';
    position: absolute;
    width: 100px;
    height: 100px;
    border-bottom: 5px solid #E76514;
    border-left: 5px solid #E76514;
    bottom: -20px;
    left: -20px;
}

.cart-3::after {
    content: '';
    position: absolute;
    width: 100px;
    height: 100px;
    border-top: 5px solid #1976DC;
    border-right: 5px solid #1976DC;
    top: -20px;
    right: -20px;
}

.cart-4::before {
    content: '';
    position: absolute;
    width: 100px;
    height: 100px;
    border-bottom: 5px solid #E76514;
    border-left: 5px solid #E76514;
    bottom: -20px;
    left: -20px;
}

.cart-4::after {
    content: '';
    position: absolute;
    width: 100px;
    height: 100px;
    border-top: 5px solid #1976DC;
    border-right: 5px solid #1976DC;
    top: -20px;
    right: -20px;
}

</style>