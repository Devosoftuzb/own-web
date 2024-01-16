<template>
  <section class="sm:mt-60 mt-32 flex items-center">
    <div class="container mx-auto p-5">
      <div class="flex flex-col sm:items-start gap-5">
        <h1
          class="text-white lg:text-[65px] sm:text-[40px] text-[26px] font-['Roboto'] font-bold"
        >
          {{ $t("Hero-title") }}
        </h1>
        <p
          class="text-[#C9C9C9] lg:w-[622px] sm:w-[600px] pr-5 sm:text-[18px] text-[14px] font-['Poppins'] font-light"
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy
        </p>
        <button
          class="sm:flex z-10 hidden btn text-white font-['Roboto'] font-medium text-[21px] px-3 py-1 rounded-[5px]"
        >
          <a href="tel:+998 90 555 55 56">{{ $t("Hero-btn") }}</a>
        </button>
        <a
          href="tel:+998 90 555 55 56"
          class="sm:hidden flex items-center gap-3 text-white border-2 border-[#1976DC] rounded-md w-[198px] font-light font-['Poppins'] px-2 py-1"
        >
          <i class="bx bx-phone-call text-[#1976DC] text-[24px]"></i>
          {{ $t("Hero-brn-mobile") }}
        </a>
      </div>
    </div>
    <img
      class="dark:block hidden absolute top-0 left-0"
      src="/home/home-blue-effekt.png"
      alt=""
    />
    <img
      class="dark:block hidden absolute right-0 top-20"
      src="/home/home-orange-effekt.png"
      alt=""
    />
  </section>

  <section class="relative mt-20">
    <div class="container mx-auto p-5">
      <div class="flex justify-between items-center z-10">
        <div
          data-aos="fade-right"
          data-aos-duration="1500"
          class="lg:flex hidden items-center"
        >
          <img src="/about_img/dev__ib.png" alt="" />
        </div>

        <div
          data-aos="fade-left"
          data-aos-duration="1500"
          class="flex flex-col gap-5"
        >
          <h3
            class="text-white lg:text-[45px] sm:text-[37px] text-[26px] font-['Roboto'] font-bold"
          >
            {{ $t("section4-title") }}
          </h3>
          <p
            class="lg:block hidden text-[#6D6D6D] font-['Poppins'] font-light w-[521px] mb-10"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book. It has
            survived not only fives
          </p>

          <div
            class="hidden sm:flex items-center gap-10 border-l-[5px] p-5 border-[#E76514] lg:mb-10 mt-5"
          >
            <div class="flex items-center gap-5 text-white">
              <img src="/home/galochka.png" alt="" />
              <span class="w-20">{{ $t("section4-info1") }}</span>
            </div>
            <div class="flex items-center gap-5 text-white">
              <img src="/home/lamp.png" alt="" />
              <span class="w-20">{{ $t("section4-info2") }}</span>
            </div>
          </div>

          <p class="lg:hidden text-[#6D6D6D] font-['Poppins'] font-light">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the
          </p>
          <img
            class="lg:hidden mb-3"
            src="/about_img/about__hero_mobile.png"
            alt=""
          />
          <button
            class="btn sm:w-[167px] w-[121px] sm:py-3 py-2 rounded-lg text-white"
          >
            <nuxt-link to="/about">{{ $t("section4-btn") }}</nuxt-link>
          </button>
        </div>
      </div>
    </div>
    <img
      class="absolute top-0 right-0"
      src="/about_img/about__hero__bg2.png"
      alt=""
    />
  </section>

  <section class="relative mt-28">
    <div class="container mx-auto p-5">
      <div class="flex flex-col gap-5">
        <h2
          data-aos="fade-down"
          data-aos-duration="1500"
          class="text-white lg:text-[45px] sm:text-[40px] text-[26px] font-['Roboto'] font-semibold sm:mb-10 mb-5"
        >
          {{ $t("section3-title") }}
        </h2>
        <div
          data-aos="fade-up"
          data-aos-duration="1500"
          class="lg:flex hidden text-white text-[21px] font-['Roboto'] font-medium flex justify-between gap-28 p-10 overflow-x-auto self-stretch"
        >
          <div
            class="cart-1 relative bg-[#323459] min-w-[270px] p-10 rounded-tl-[25px] rounded-br-[25px] flex flex-col gap-5"
          >
            <img src="/home/Quality.png" width="70px" alt="" />
            <h3>{{ $t("section3-card1-title") }}</h3>
          </div>
          <div
            class="cart-2 relative bg-[#323459] min-w-[270px] p-10 rounded-tl-[25px] rounded-br-[25px] flex flex-col gap-5"
          >
            <img src="/home/Security Shield.png" width="70px" alt="" />
            <h3>{{ $t("section3-card2-title") }}</h3>
          </div>
          <div
            class="cart-3 relative bg-[#323459] min-w-[270px] p-10 rounded-tl-[25px] rounded-br-[25px] flex flex-col gap-5"
          >
            <img src="/home/Money Bag.png" width="70px" alt="" />
            <h3>{{ $t("section3-card3-title") }}</h3>
          </div>
          <div
            class="cart-4 relative bg-[#323459] min-w-[270px] p-10 rounded-tl-[25px] rounded-br-[25px] flex flex-col gap-5"
          >
            <img src="/home/Quality.png" width="70px" alt="" />
            <h3>{{ $t("section3-card4-title") }}</h3>
          </div>
        </div>

        <div
          class="lg:hidden text-white text-[21px] font-['Roboto'] font-medium flex flex-wrap justify-between gap-5"
        >
          <div
            class="bg-[#323459] md:w-[48%] w-[46%] text-center p-5 items-center text-[16px] rounded-lg flex flex-col gap-5"
          >
            <img src="/home/Quality.png" width="50px" alt="" />
            <h3>{{ $t("section3-card1-title") }}</h3>
          </div>
          <div
            class="bg-[#323459] md:w-[48%] w-[46%] text-center p-5 items-center text-[16px] rounded-lg flex flex-col gap-5"
          >
            <img src="/home/Security Shield.png" width="50px" alt="" />
            <h3>{{ $t("section3-card2-title") }}</h3>
          </div>
          <div
            class="bg-[#323459] md:w-[48%] w-[46%] text-center p-5 items-center text-[16px] rounded-lg flex flex-col gap-5"
          >
            <img src="/home/Money Bag.png" width="50px" alt="" />
            <h3>{{ $t("section3-card3-title") }}</h3>
          </div>
          <div
            class="bg-[#323459] md:w-[48%] w-[46%] text-center p-5 items-center text-[16px] rounded-lg flex flex-col gap-5"
          >
            <img src="/home/Quality.png" width="50px" alt="" />
            <h3>{{ $t("section3-card4-title") }}</h3>
          </div>
        </div>
      </div>
    </div>
    <img
      class="absolute top-0 left-0"
      src="/about_img/about__hero__bg.png"
      alt=""
    />
  </section>

  <section class="mt-20">
    <div class="container mx-auto p-5">
      <div class="flex flex-col gap-16">
        <h2
          data-aos="fade-down"
          data-aos-duration="1500"
          class="text-white lg:text-[45px] sm:text-[40px] text-[26px] font-['Roboto'] font-bold"
        >
          {{ $t("section5-title") }}
        </h2>
        <div
          data-aos="fade-up"
          data-aos-duration="1500"
          class="flex flex-wrap justify-between gap-10 z-10"
        >
          <div
            class="2xl:w-[420px] lg:w-[385px] w-full bg-[#323459] flex flex-col gap-3 p-5 rounded-lg"
          >
            <h3 class="text-white text-[26px] font-['Roboto'] font-bold">
              {{ $t("section5-card1-title") }}
            </h3>
            <p class="text-white font-['Poppins'] font-light">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an
            </p>
            <div class="flex items-center justify-between mt-5">
              <button
                class="btn w-[112px] py-2 rounded-lg text-white font-['Roboto'] font-medium"
              >
                <nuxt-link to="/service">{{ $t("section5-btn") }}</nuxt-link>
              </button>
              <button
                @click="modalInfo"
                class="text-[30px] flex items-center text-[#1976DC]"
              >
                <i
                  :class="info ? 'bx bx-chevron-up' : 'bx bx-chevron-down'"
                ></i>
              </button>
            </div>
            <div
              :class="
                info
                  ? 'flex flex-wrap items-center gap-x-20 gap-y-2 border-t pt-5 mt-5 border-[#8B8B8B] bg-[#323459]'
                  : 'hidden'
              "
            >
              <span
                class="info w-[100px] flex items-center gap-5 text-white font-['Roboto'] font-medium"
              >
                <svg
                  width="33"
                  height="3"
                  viewBox="0 0 33 3"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    y1="1.5"
                    x2="33"
                    y2="1.5"
                    stroke="#1976DC"
                    stroke-width="3"
                  />
                </svg>
                CRM</span
              >
              <span
                class="info w-[100px] flex items-center gap-5 text-white font-['Roboto'] font-medium"
              >
                <svg
                  width="33"
                  height="3"
                  viewBox="0 0 33 3"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    y1="1.5"
                    x2="33"
                    y2="1.5"
                    stroke="#1976DC"
                    stroke-width="3"
                  />
                </svg>
                WMS</span
              >
              <span
                class="info w-[100px] flex items-center gap-5 text-white font-['Roboto'] font-medium"
              >
                <svg
                  width="33"
                  height="3"
                  viewBox="0 0 33 3"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    y1="1.5"
                    x2="33"
                    y2="1.5"
                    stroke="#1976DC"
                    stroke-width="3"
                  />
                </svg>
                LMS</span
              >
              <span
                class="info w-[100px] flex items-center gap-5 text-white font-['Roboto'] font-medium"
              >
                <svg
                  width="33"
                  height="3"
                  viewBox="0 0 33 3"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    y1="1.5"
                    x2="33"
                    y2="1.5"
                    stroke="#1976DC"
                    stroke-width="3"
                  />
                </svg>
                HRM</span
              >
            </div>
          </div>
          <div
            class="2xl:w-[420px] lg:w-[385px] w-full bg-[#323459] flex flex-col gap-3 p-5 rounded-lg"
          >
            <h3 class="text-white text-[26px] font-['Roboto'] font-bold">
              {{ $t("section5-card1-title") }}
            </h3>
            <p class="text-white font-['Poppins'] font-light">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an
            </p>
            <div class="flex items-center justify-between mt-5">
              <button
                class="btn w-[112px] py-2 rounded-lg text-white font-['Roboto'] font-medium"
              >
                <nuxt-link to="/service">{{ $t("section5-btn") }}</nuxt-link>
              </button>
              <button
                @click="modalInfo2"
                class="text-[30px] flex items-center text-[#1976DC]"
              >
                <i
                  :class="info2 ? 'bx bx-chevron-up' : 'bx bx-chevron-down'"
                ></i>
              </button>
            </div>
            <div
              :class="
                info2
                  ? 'flex flex-wrap items-center gap-x-20 gap-y-2 border-t pt-5 mt-5 border-[#8B8B8B]'
                  : 'hidden'
              "
            >
              <span
                class="info w-[100px] flex items-center gap-5 text-white font-['Roboto'] font-medium"
              >
                <svg
                  width="33"
                  height="3"
                  viewBox="0 0 33 3"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    y1="1.5"
                    x2="33"
                    y2="1.5"
                    stroke="#1976DC"
                    stroke-width="3"
                  />
                </svg>
                CRM</span
              >
              <span
                class="info w-[100px] flex items-center gap-5 text-white font-['Roboto'] font-medium"
              >
                <svg
                  width="33"
                  height="3"
                  viewBox="0 0 33 3"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    y1="1.5"
                    x2="33"
                    y2="1.5"
                    stroke="#1976DC"
                    stroke-width="3"
                  />
                </svg>
                WMS</span
              >
              <span
                class="info w-[100px] flex items-center gap-5 text-white font-['Roboto'] font-medium"
              >
                <svg
                  width="33"
                  height="3"
                  viewBox="0 0 33 3"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    y1="1.5"
                    x2="33"
                    y2="1.5"
                    stroke="#1976DC"
                    stroke-width="3"
                  />
                </svg>
                LMS</span
              >
              <span
                class="info w-[100px] flex items-center gap-5 text-white font-['Roboto'] font-medium"
              >
                <svg
                  width="33"
                  height="3"
                  viewBox="0 0 33 3"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    y1="1.5"
                    x2="33"
                    y2="1.5"
                    stroke="#1976DC"
                    stroke-width="3"
                  />
                </svg>
                HRM</span
              >
            </div>
          </div>
          <div
            class="2xl:w-[420px] lg:w-[385px] w-full bg-[#323459] flex flex-col gap-3 p-5 rounded-lg"
          >
            <h3 class="text-white text-[26px] font-['Roboto'] font-bold">
              {{ $t("section5-card1-title") }}
            </h3>
            <p class="text-white font-['Poppins'] font-light">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an
            </p>
            <div class="flex items-center justify-between mt-5">
              <button
                class="btn w-[112px] py-2 rounded-lg text-white font-['Roboto'] font-medium"
              >
                <nuxt-link to="/service">{{ $t("section5-btn") }}</nuxt-link>
              </button>
              <button
                @click="modalInfo3"
                class="text-[30px] flex items-center text-[#1976DC]"
              >
                <i
                  :class="info3 ? 'bx bx-chevron-up' : 'bx bx-chevron-down'"
                ></i>
              </button>
            </div>
            <div
              :class="
                info3
                  ? 'flex flex-wrap items-center gap-x-20 gap-y-2 border-t pt-5 mt-5 border-[#8B8B8B]'
                  : 'hidden'
              "
            >
              <span
                class="info w-[100px] flex items-center gap-5 text-white font-['Roboto'] font-medium"
              >
                <svg
                  width="33"
                  height="3"
                  viewBox="0 0 33 3"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    y1="1.5"
                    x2="33"
                    y2="1.5"
                    stroke="#1976DC"
                    stroke-width="3"
                  />
                </svg>
                CRM</span
              >
              <span
                class="info w-[100px] flex items-center gap-5 text-white font-['Roboto'] font-medium"
              >
                <svg
                  width="33"
                  height="3"
                  viewBox="0 0 33 3"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    y1="1.5"
                    x2="33"
                    y2="1.5"
                    stroke="#1976DC"
                    stroke-width="3"
                  />
                </svg>
                WMS</span
              >
              <span
                class="info w-[100px] flex items-center gap-5 text-white font-['Roboto'] font-medium"
              >
                <svg
                  width="33"
                  height="3"
                  viewBox="0 0 33 3"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    y1="1.5"
                    x2="33"
                    y2="1.5"
                    stroke="#1976DC"
                    stroke-width="3"
                  />
                </svg>
                LMS</span
              >
              <span
                class="info w-[100px] flex items-center gap-5 text-white font-['Roboto'] font-medium"
              >
                <svg
                  width="33"
                  height="3"
                  viewBox="0 0 33 3"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    y1="1.5"
                    x2="33"
                    y2="1.5"
                    stroke="#1976DC"
                    stroke-width="3"
                  />
                </svg>
                HRM</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="ximoya lg:my-40 sm:my-20">
    <img class="ximoya__bg-blue" src="/home/ximoya-bg-blue.png" alt="foto" />
    <img class="ximoya__bg-red" src="/home/ximoya-bg-red.png" alt="foto" />
    <div class="container mx-auto p-5">
      <div class="ximoya__wrapper flex items-cneter justify-between">
        <div
          data-aos="fade-right"
          data-aos-duration="1500"
          class="ximoya__img lg:block hidden"
        >
          <img class="ximoya-img-1" src="/home/ximoya-img.png" alt="foto" />
          <img src="/about_img/form__ten.png" alt="foto" />
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="1500"
          class="ximoya__content m-5 sm:m-0"
        >
          <h2>{{ $t("section6-title") }}</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five
          </p>
          <div class="ximoya__card">
            <h3>
              <img src="/home/ximoya--icon.png" alt="foto" />
              {{ $t("section6-subtitle1") }}
            </h3>
            <h3>
              <img src="/home/ximoya--icon.png" alt="foto" />
              {{ $t("section6-subtitle2") }}
            </h3>
            <h3>
              <img src="/home/ximoya--icon.png" alt="foto" />
              {{ $t("section6-subtitle3") }}
            </h3>
          </div>
          <button>{{ $t("section6-btn") }}</button>
        </div>
      </div>
    </div>
  </section>

  <section class="narx">
    <div class="container mx-auto p-5">
      <div
        data-aos="fade-right"
        data-aos-duration="1500"
        id="narx__wrapper"
        class="narx__wrapper"
      >
        <div class="narx__content sm:m-0 m-5">
          <h2>{{ $t("section7-title") }}</h2>
          <h4 class="nr__p1" id="nr__p1">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five
          </h4>
          <div class="narx__card">
            <h3>
              <img src="/home/ximoya--icon.png" alt="icon" />{{
                $t("section7-subtitle1")
              }}
            </h3>
            <h3>
              <img src="/home/ximoya--icon.png" alt="icon" />
              {{ $t("section7-subtitle2") }}
            </h3>
            <h3>
              <img src="/home/ximoya--icon.png" alt="icon" />
              {{ $t("section7-subtitle3") }}
            </h3>
          </div>
          <button>{{ $t("section7-btn") }}</button>
        </div>
        <div class="narx__img lg:block hidden">
          <img class="narx-img1" src="/home/nerx-img.png" alt="foto" />
          <img src="/about_img/about__hero_ten.png" alt="foto" />
        </div>
      </div>
    </div>
  </section>

  <section class="mt-20 overflow-x-hidden">
    <div class="container mx-auto p-5">
      <div class="items" data-v-e33b1926="">
        <div class="entry" data-v-e33b1926="">
          <img
            class="sm:w-auto w-[150px]"
            src="/sponsors/epam.png"
            data-v-e33b1926
            alt=""
          />
        </div>
        <div class="entry" data-v-e33b1926="">
          <img
            class="sm:w-auto w-[150px]"
            src="/sponsors/epam.png"
            data-v-e33b1926
            alt=""
          />
        </div>
        <div class="entry" data-v-e33b1926="">
          <img
            class="sm:w-auto w-[150px]"
            src="/sponsors/epam.png"
            data-v-e33b1926
            alt=""
          />
        </div>
        <div class="entry" data-v-e33b1926="">
          <img
            class="sm:w-auto w-[150px]"
            src="/sponsors/epam.png"
            data-v-e33b1926
            alt=""
          />
        </div>
        <div class="entry" data-v-e33b1926="">
          <img
            class="sm:w-auto w-[150px]"
            src="/sponsors/epam.png"
            data-v-e33b1926
            alt=""
          />
        </div>
        <div class="entry" data-v-e33b1926="">
          <img
            class="sm:w-auto w-[150px]"
            src="/sponsors/epam.png"
            data-v-e33b1926
            alt=""
          />
        </div>
        <div class="entry" data-v-e33b1926="">
          <img
            class="sm:w-auto w-[150px]"
            src="/sponsors/epam.png"
            data-v-e33b1926
            alt=""
          />
        </div>
        <div class="entry" data-v-e33b1926="">
          <img
            class="sm:w-auto w-[150px]"
            src="/sponsors/epam.png"
            data-v-e33b1926
            alt=""
          />
        </div>
        <div class="entry" data-v-e33b1926="">
          <img
            class="sm:w-auto w-[150px]"
            src="/sponsors/epam.png"
            data-v-e33b1926
            alt=""
          />
        </div>
      </div>
    </div>
  </section>

  <section class="form">
    <div class="container mx-auto p-5">
      <div class="form__wrapper">
        <form class="form2 sm:w-[500px]">
          <span id="form__h1"> {{ $t("section8-title") }} </span>
          <label for="form__inp">{{ $t("section8-form-name") }}</label
          ><input
            class="outline-none"
            required
            style=""
            id="form__inp"
            type="text"
          />
          <label for="tel">{{ $t("section8-form-tel") }}</label
          ><input id="tel" class="outline-none" required type="text" />
          <label for="Xizmat">{{ $t("section8-form-xizmat") }}</label
          ><input id="Xizmat" class="outline-none" required type="text" />
          <label for="Maqsadingiz">{{ $t("section8-form-maqsad") }}</label
          ><input id="Maqsadingiz" class="outline-none" required type="text" />
          <button required class="form__btn" type="submit">
            {{ $t("section8-btn") }}</button
          >I
        </form>
        <div class="lg:flex flex-col items-center hidden">
          <img src="/about_img/form__img1.png" alt="foto" />
          <img src="/about_img/form__ten.png" alt="foto" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
const info = ref(false);
const modalInfo = () => (info.value = !info.value);
const info2 = ref(false);
const modalInfo2 = () => (info2.value = !info2.value);
const info3 = ref(false);
const modalInfo3 = () => (info3.value = !info3.value);
</script>

<style lang="scss" scoped>
.items[data-v-e33b1926] {
  display: flex;
  gap: 44px;
  align-items: center;
  width: -moz-fit-content;
  width: fit-content;
  width: -moz-max-content;
  width: max-content;
  animation: carouselAnim-e33b1926 5s infinite alternate linear;
  overflow-x: auto;
}

@keyframes carouselAnim-e33b1926 {
  0% {
    transform: translate(0);
  }
  100% {
    transform: translate(calc(-100% + 1500px));
  }
}

.btn {
  background: linear-gradient(
      96deg,
      rgba(25, 118, 220, 0.95) 19%,
      rgba(231, 101, 20, 0.95) 88.27%
    ),
    #fff;
}

.cart-1::before {
  content: "";
  position: absolute;
  width: 100px;
  height: 100px;
  border-bottom: 5px solid #e76514;
  border-left: 5px solid #e76514;
  bottom: -20px;
  left: -20px;
}

.cart-1::after {
  content: "";
  position: absolute;
  width: 100px;
  height: 100px;
  border-top: 5px solid #1976dc;
  border-right: 5px solid #1976dc;
  top: -20px;
  right: -20px;
}

.cart-2::before {
  content: "";
  position: absolute;
  width: 100px;
  height: 100px;
  border-bottom: 5px solid #e76514;
  border-left: 5px solid #e76514;
  bottom: -20px;
  left: -20px;
}

.cart-2::after {
  content: "";
  position: absolute;
  width: 100px;
  height: 100px;
  border-top: 5px solid #1976dc;
  border-right: 5px solid #1976dc;
  top: -20px;
  right: -20px;
}

.cart-3::before {
  content: "";
  position: absolute;
  width: 100px;
  height: 100px;
  border-bottom: 5px solid #e76514;
  border-left: 5px solid #e76514;
  bottom: -20px;
  left: -20px;
}

.cart-3::after {
  content: "";
  position: absolute;
  width: 100px;
  height: 100px;
  border-top: 5px solid #1976dc;
  border-right: 5px solid #1976dc;
  top: -20px;
  right: -20px;
}

.cart-4::before {
  content: "";
  position: absolute;
  width: 100px;
  height: 100px;
  border-bottom: 5px solid #e76514;
  border-left: 5px solid #e76514;
  bottom: -20px;
  left: -20px;
}

.cart-4::after {
  content: "";
  position: absolute;
  width: 100px;
  height: 100px;
  border-top: 5px solid #1976dc;
  border-right: 5px solid #1976dc;
  top: -20px;
  right: -20px;
}

// начало sectiona ximoya
.ximoya {
  position: relative;
}

.ximoya__content h2 {
  color: #fff;
  font-size: 37px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 25px;
}

.ximoya__content p {
  color: #6d6d6d;
  width: 521px;
  font-size: 18px;
  font-weight: 300;
  margin-bottom: 38px;
}

.ximoya__content h3 {
  margin-bottom: 18px;
  display: flex;
  align-items: center;
  gap: 11px;
  color: #fff;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
}

.ximoya__card {
  border-left: solid 6px #e76514;
  padding-left: 17px;
}

// .ximoya__wrapper {
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   border: 2px solid red;
// }

.ximoya__content button {
  border-radius: 5px;
  background: linear-gradient(
      96deg,
      rgba(25, 118, 220, 0.95) 19%,
      rgba(231, 101, 20, 0.95) 88.27%
    ),
    #fff;
  display: inline-flex;
  padding: 10px 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: #fff;
  font-size: 21px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-top: 50px;
}

.ximoya__content {
  position: relative;
  z-index: 2;
}

.ximoya__bg-blue {
  position: absolute;
  left: 0;
  top: -10px;
}

.ximoya__bg-red {
  position: absolute;
  right: 0;
  top: 300px;
}

.ximoya-img-1 {
  margin-left: 60px;
}

@media (max-width: 1281px) {
  // .ximoya__wrapper {
  //   flex-wrap: wrap;
  //   justify-content: center;
  // }

  // .narx__wrapper {
  //   flex-wrap: wrap;
  //   justify-content: center;
  // }

  // #narx__wrapper {
  //   justify-content: center;
  // }
}

@media (max-width: 580px) {
  .ximoya {
    position: relative;
    margin-top: 100px;
    margin-bottom: 100px;
  }
  .ximoya__img {
    display: none;
  }

  .ximoya__content p {
    width: auto;
    margin-bottom: 30px;
  }

  .narx__img {
    display: none;
  }
}

@media (max-width: 581px) {
  #nr__p1 {
    width: auto;
  }
}

// Narx section
// .narx {
//   margin-bottom: 15px;
// }

.narx__content h2 {
  color: #fff;
  margin-bottom: 25px;
  font-size: 37px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.nr__p1 {
  color: #6d6d6d;
  width: 521px;
  font-size: 18px;
  font-weight: 300;
  margin-bottom: 38px;
}

.narx__card h3 {
  display: flex;
  align-items: center;
  gap: 11px;
  color: #fff;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  margin-bottom: 18px;
}

.narx__content button {
  color: #fff;
  font-size: 21px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  display: inline-flex;
  padding: 10px 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 5px;
  background: linear-gradient(
      96deg,
      rgba(25, 118, 220, 0.95) 19%,
      rgba(231, 101, 20, 0.95) 88.27%
    ),
    #fff;
  margin-top: 40px;
}

.narx__card {
  padding-left: 18px;
  border-left: #e76514 solid 6px;
}

.narx__wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.narx-img1 {
  margin-left: 50px;
}
</style>

              