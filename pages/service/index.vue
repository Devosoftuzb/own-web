<template>
  <section class="service__hero relative">
    <img class="sr__hero__bg1 absolute top-0 left-0" src="/service/sr__hero__bg.png" alt="foto" />
    <img class="sr__hero__bg2 absolute top-20 right-0" src="/service/sr__hero__bg2.png" alt="foto" />
    <div class="container mx-auto p-5">
      <h1 class="text-[#FFF]">
        {{ $t("page3-hero-title") }}
      </h1>
      <p class="sr__hero_p text-[#FFF]">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy
      </p>
      <button class="sr__hero__btn__mob z-20">
        <img src="/about_img/Phone.png" alt="foto" />{{ $t("Hero-brn-mobile") }}
      </button>
      <div class="sr__hero__wrapper">
        <div
          data-aos-duration="1500"
          data-aos="fade-right"
          class="sr__hero__card"
        >
          <h3 class="text-[#FFF]">{{ $t("page3-hero-card1-title") }}</h3>
          <p class="text-[#FFF]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an
          </p>
          <div class="card__btn__wrapper">
            <button>
              <NuxtLink to="service/1">{{ $t("page3-hero-btn") }}</NuxtLink>
            </button>

            <img src="/service/Forward (1).png" alt="foto" />
          </div>
        </div>
        <div
          data-aos-duration="1500"
          data-aos="fade-left"
          class="sr__hero__card"
        >
          <h3 class="text-[#FFF]">{{ $t("page3-hero-card2-title") }}</h3>
          <p class="text-[#FFF]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an
          </p>
          <div class="card__btn__wrapper">
            <button>{{ $t("page3-hero-btn") }}</button>
            <img src="/service/Forward (1).png" alt="foto" />
          </div>
        </div>
        <div
          data-aos-duration="1500"
          data-aos="fade-right"
          class="sr__hero__card"
        >
          <h3 class="text-[#FFF]">{{ $t("page3-hero-card3-title") }}</h3>
          <p class="text-[#FFF]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an
          </p>
          <div class="card__btn__wrapper">
            <button>{{ $t("page3-hero-btn") }}</button>
            <img src="/service/Forward (1).png" alt="foto" />
          </div>
        </div>
        <div
          data-aos-duration="1500"
          data-aos="fade-left"
          class="sr__hero__card"
        >
          <h3 class="text-[#FFF]">{{ $t("page3-hero-card4-title") }}</h3>
          <p class="text-[#FFF]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an
          </p>
          <div class="card__btn__wrapper">
            <button>{{ $t("page3-hero-btn") }}</button>
            <img src="/service/Forward (1).png" alt="foto" />
          </div>
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
            {{ $t("section8-btn") }}
          </button>
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
</script>

<style>
.service__hero {
  position: relative;
  padding-top: 250px;
  margin-bottom: 175px;
}
.service__hero h1 {
  position: relative;
  z-index: 9;
  color: #fff;
  font-size: 54px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  margin-bottom: 40px;
}
.sr__hero_p {
  position: relative;
  z-index: 9;
  color: var(--body-text-color, #c9c9c9);
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  width: 622px;
  margin: 0 auto;
  display: none;
}
.sr__hero_btn {
  border-radius: 5px;
  display: inline-flex;
  padding: 10px 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background: linear-gradient(
      96deg,
      rgba(25, 118, 220, 0.95) 19%,
      rgba(231, 101, 20, 0.95) 88.27%
    ),
    #fff;
  color: #fff;
  font-size: 21px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  cursor: pointer;
  margin: 0 auto;
  margin-top: 40px;
  display: block;
}
.sr__hero__btn__mob img {
  display: inline;
}
.sr__hero__btn__mob {
  color: #fff;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  border-radius: 5px;
  border: 2px solid #1976dc;
  width: 198px;
  height: 40px;
  gap: 10px;
  margin-top: 40px;

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  display: none;
}
/* .sr__hero__bg1 {
  position: absolute;
  left: -30px;
  top: -268px;
}
.sr__hero__bg2 {
  position: absolute;
  top: -260px;
  right: -60px;
} */

.sr__hero__wrapper {
  margin-top: 50px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 75px;
}
.sr__hero__card {
  position: relative;
  z-index: 2;
  border-radius: 10px;
  background: #323459;
  padding: 22px 32px;
  width: 100%;
}
.sr__hero__card h3 {
  color: #ebf4ff;
  font-size: 26px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 8px;
}
.sr__hero__card p {
  color: #ebf4ff;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  /* width: 524px; */
}
.sr__hero__card button {
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
  cursor: pointer;
}
.card__btn__wrapper {
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.card__btn__wrapper img {
  cursor: pointer;
}
.form2__bg1 {
  position: absolute;
  bottom: -500px;
  left: -50px;
  z-index: -1;
}
@media (max-width: 580px) {
  .sr__hero__wrapper {
    grid-template-columns: repeat(1, 1fr);
    margin-left: 0px;
  }
  .sr__hero__btn__mob {
    display: block;
  }
  .sr__hero_p {
    display: block;
  }
  .sr__hero__card p {
    width: auto;
  }
}
@media (max-width: 1180px) {
  .sr__hero__wrapper {
    grid-template-columns: repeat(1, 1fr);
    margin-left: 0px;
  }
  .sr__hero__card {
    margin: 0 auto;
  }
}
@media (max-width: 545px) {
  .sr__hero__card {
    margin: 0 auto;
  }
  .sr__hero__card__contetn {
    width: 100%;
    height: auto;
  }
  .sr__hero__card {
    width: 100%;
  }
  .sr__hero__card__img {
    left: -50px;
  }
}
@media (max-width: 510px) {
  .sr__hero__card__img {
    left: -10px;
  }
}

@media (max-width: 700px) {
  .sr__hero__bg2 {
    right: 0px;
  }
}
@media (max-width: 700px) {
  .sr__hero__bg2 {
    right: 0px;
  }
  .service__hero h1 {
    text-align: left;
    color: #fff;
    font-size: 31px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  .sr__hero_p {
    margin: 0;
    text-align: left;
    color: var(--body-text-color, #c9c9c9);
    width: 460px;
    font-size: 18px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
  }
  .sr__hero_btn {
    display: none;
  }
}
@media (max-width: 480px) {
  .sr__hero_p {
    width: auto;
  }
  .sr__hero__card {
    padding: 20px;
  }
}
@media (max-width: 1025px) {
  .sr__hero__bg2 {
    right: 0px;
  }
}
</style>