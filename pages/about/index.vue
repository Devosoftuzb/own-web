<template>
  <section class="st__hero">
    <div class="container mx-auto p-5">
      <div class="st__hero__wrapper">
        <div class="st__hero__content">
          <h1>{{ $t("section4-title") }}</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy
          </p>
          <button>{{ $t("section4-btn") }}</button>
        </div>
      </div>
      <img
        class="about__hero__img"
        src="/about_img/about__hero__bg.png"
        alt="foto"
      />
      <img
        class="about__hero__img2"
        src="/about_img/about__hero__bg2.png"
        alt="foto"
      />
    </div>
  </section>
  <section class="about__team">
    <div class="container mx-auto p-5">
      <div class="dev__ab">
        <div
          data-aos-duration="1500"
          data-aos="fade-right"
          class="dev__av__img"
        >
          <img src="/about_img/dev__ib.png" alt="foto" />
        </div>
        <div
          class="dev__av__content"
          data-aos-duration="1500"
          data-aos="fade-left"
        >
          <h3 class="text-[#FFF]">Devosoft haqida</h3>
          <p class="text-[#6D6D6D]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book. It has
            survived not only five
          </p>
          <button>{{ $t("section4-btn") }}</button>
        </div>
      </div>
      <button
        data-aos-duration="1500"
        data-aos="fade-left"
        id="team__btn"
        class="sm:ml-0 mt-10"
      >
        <img src="/about_img/Phone.png" alt="icon" />{{ $t("Hero-brn-mobile") }}
      </button>
      <div class="team__wrapper">
        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          class="team__card"
        >
          <div class="over__bg">
            <div class="icon__wrapper">
              <a href="!#"><img src="/about_img/YouTube.png" alt="icon" /></a>
              <a href="!#"><img src="/about_img/Instagram.png" alt="icon" /></a>
              <a href="!#"><img src="/about_img/LinkedIn.png" alt="icon" /></a>
              <a href="!#"><img src="/about_img/Telegram.png" alt="icon" /></a>
            </div>
          </div>
          <div class="taem__card__content">
            <h2>Anvar Rahimov</h2>
            <p>Frontend Dev</p>
          </div>
        </div>
        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          class="team__card"
        >
          <div class="over__bg">
            <div class="icon__wrapper">
              <a href="!#"><img src="/about_img/YouTube.png" alt="icon" /></a>
              <a href="!#"><img src="/about_img/Instagram.png" alt="icon" /></a>
              <a href="!#"><img src="/about_img/LinkedIn.png" alt="icon" /></a>
              <a href="!#"><img src="/about_img/Telegram.png" alt="icon" /></a>
            </div>
          </div>
          <div class="taem__card__content">
            <h2>Anvar Rahimov</h2>
            <p>Frontend Dev</p>
          </div>
        </div>
        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          class="team__card"
        >
          <div class="over__bg">
            <div class="icon__wrapper">
              <a href="!#"><img src="/about_img/YouTube.png" alt="icon" /></a>
              <a href="!#"><img src="/about_img/Instagram.png" alt="icon" /></a>
              <a href="!#"><img src="/about_img/LinkedIn.png" alt="icon" /></a>
              <a href="!#"><img src="/about_img/Telegram.png" alt="icon" /></a>
            </div>
          </div>
          <div class="taem__card__content">
            <h2>Anvar Rahimov</h2>
            <p>Frontend Dev</p>
          </div>
        </div>
        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          class="team__card"
        >
          <div class="over__bg">
            <div class="icon__wrapper">
              <a href="!#"><img src="/about_img/YouTube.png" alt="icon" /></a>
              <a href="!#"><img src="/about_img/Instagram.png" alt="icon" /></a>
              <a href="!#"><img src="/about_img/LinkedIn.png" alt="icon" /></a>
              <a href="!#"><img src="/about_img/Telegram.png" alt="icon" /></a>
            </div>
          </div>
          <div class="taem__card__content">
            <h2>Anvar Rahimov</h2>
            <p>Frontend Dev</p>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-duration="1500" class="team__card">
          <div class="over__bg">
            <div class="icon__wrapper">
              <a href="!#"><img src="/about_img/YouTube.png" alt="icon" /></a>
              <a href="!#"><img src="/about_img/Instagram.png" alt="icon" /></a>
              <a href="!#"><img src="/about_img/LinkedIn.png" alt="icon" /></a>
              <a href="!#"><img src="/about_img/Telegram.png" alt="icon" /></a>
            </div>
          </div>
          <div class="taem__card__content">
            <h2>Anvar Rahimov</h2>
            <p>Frontend Dev</p>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1500"
          id="card__tr"
          class="team__card"
        >
          <div class="over__bg">
            <div class="icon__wrapper">
              <a href="!#"><img src="/about_img/YouTube.png" alt="icon" /></a>
              <a href="!#"><img src="/about_img/Instagram.png" alt="icon" /></a>
              <a href="!#"><img src="/about_img/LinkedIn.png" alt="icon" /></a>
              <a href="!#"><img src="/about_img/Telegram.png" alt="icon" /></a>
            </div>
          </div>
          <div class="taem__card__content">
            <h2>Anvar Rahimov</h2>
            <p>Frontend Dev</p>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-duration="1500" class="team__card">
          <div class="over__bg">
            <div class="icon__wrapper">
              <a href="!#"><img src="/about_img/YouTube.png" alt="icon" /></a>
              <a href="!#"><img src="/about_img/Instagram.png" alt="icon" /></a>
              <a href="!#"><img src="/about_img/LinkedIn.png" alt="icon" /></a>
              <a href="!#"><img src="/about_img/Telegram.png" alt="icon" /></a>
            </div>
          </div>
          <div class="taem__card__content">
            <h2>Anvar Rahimov</h2>
            <p>Frontend Dev</p>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-duration="1500" class="team__card">
          <div class="over__bg">
            <div class="icon__wrapper">
              <a href="!#"><img src="/about_img/YouTube.png" alt="icon" /></a>
              <a href="!#"><img src="/about_img/Instagram.png" alt="icon" /></a>
              <a href="!#"><img src="/about_img/LinkedIn.png" alt="icon" /></a>
              <a href="!#"><img src="/about_img/Telegram.png" alt="icon" /></a>
            </div>
          </div>

          <div class="taem__card__content">
            <h2>Anvar Rahimov</h2>
            <p>Frontend Dev</p>
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
.st__hero {
  position: relative;
  padding-top: 150px;
  padding-bottom: 100px;
}
.container {
  margin: 0 auto;
}
.st__hero__content p {
  margin-bottom: 20px;
}
.st__hero__wrapper {
  display: flex;
  align-items: center;
  gap: 30px;
  justify-content: space-between;
}
.st__hero__content h1 {
  margin-top: 100px;
  color: #fff;
  font-size: 54px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
.st__hero__content p {
  width: 521px;

  flex-shrink: 0;
  color: #6d6d6d;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  margin-top: 25px;
}
.st__hero__content button {
  margin-top: 30px;
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
  widows: 170px;
  border-radius: 5px;
  background: linear-gradient(
      96deg,
      rgba(25, 118, 220, 0.95) 19%,
      rgba(231, 101, 20, 0.95) 88.27%
    ),
    #fff;
}
.about__hero__img {
  position: absolute;
  top: -200px;
  left: -100px;
}
.about__hero__img2 {
  position: absolute;
  right: -15px;
  top: 0;
}
.st__mobile__foto {
  display: none;
}

/* section 2 start  */

.about__team h1 {
  margin-bottom: 40px;
  color: #fff;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
.team__p {
  width: 622px;
  height: 42px;
  flex-shrink: 0;
  color: var(--body-text-color, #c9c9c9);
  /* size - 18px */
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
}
#team__btn {
  border-radius: 5px;
  border: 2px solid #1976dc;
  width: 220px;
  height: 40px;
  flex-shrink: 0;
  color: #fff;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  text-align: center;
  /* display: block; */
  gap: 10px;
  padding: 5px;
  display: flex;
  align-items: center;
  display: none;
}
#team__btn img {
  display: inline;
}
.team__btn1 {
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
  display: block;
  margin: 0 auto;
  margin-top: 40px;
  background: linear-gradient(
      96deg,
      rgba(25, 118, 220, 0.95) 19%,
      rgba(231, 101, 20, 0.95) 88.27%
    ),
    #fff;
}
.team__card {
  width: 300px;
  height: 350px;
  background-image: url("/about_img/team__1.png");
  /* background-position: center; */
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
}
.taem__card__content {
  height: 92px;
  background: rgba(231, 101, 20, 0.75);
  padding: 20px;
  position: absolute;
  bottom: 0px;
  right: 0px;
  left: 0px;
  z-index: 1;
}
.taem__card__content h2 {
  color: #fff;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}
.taem__card__content p {
  color: #cfcfcf;
  font-size: 15px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
}
.team__wrapper {
  position: relative;
  z-index: 9;
  margin-top: 125px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
}
.team__card:hover .over__bg {
  color: #6d6d6d;
  display: block;
  display: flex;
  align-items: center;
  gap: 10px;
  left: 0px;
  z-index: 2;
}

.team__card:hover .icon__wrapper {
  display: block;
  display: flex;
  align-items: center;
  gap: 10px;
  left: 0px;
}

.over__bg {
  position: absolute;
  background: rgba(0, 0, 0, 0.8);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: none;
  z-index: 2;
}
.team__card {
  position: relative;
  z-index: 10;
}
.icon__wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  position: absolute;
  top: 180px;
  margin-left: 20px;
  right: 5px;
  /* display: none; */
}
@media (max-width: 580px) {
  .team__wrapper {
    grid-template-columns: repeat(2, 1fr);
  }
  .team__p {
    width: auto;
  }
  .team__card {
    width: 240px;
    height: 265px;
    padding-top: 172px;
  }
  .icon__wrapper {
    top: 120px;
  }
  .team__btn1 {
    display: none;
  }
  #team__btn {
    display: block;
  }
}
@media (max-width: 1325px) {
  .team__wrapper {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media (max-width: 1020px) {
  .team__wrapper {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 660px) {
  .team__card {
    width: 240px;
    height: 265px;
    padding-top: 200px;
  }
  .icon__wrapper {
    top: 120px;
  }
}
@media (max-width: 540px) {
  .team__wrapper {
    grid-template-columns: repeat(1, 1fr);
  }
  .team__card {
    margin: 0 auto;
  }
}
@media (max-width: 600px) {
  .team__p {
    width: auto;
  }
}
@media (max-width: 870px) {
  .st__hero__wrapper {
    flex-direction: column;
  }
  .about__hero__img2 {
    display: none;
  }
}
@media (max-width: 580px) {
  .st__hero__content p {
    color: #6d6d6d;
    width: auto;
    font-size: 18px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
  }
  .st__hero__img img {
    display: none;
  }
  .st__mobile__foto {
    display: block;
  }
  .st__hero__content h1 {
    color: #fff;
    font-size: 26px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
}
/* form section  */
.form {
  position: relative;
  z-index: 0;
  margin-bottom: 100px;
}
#form__h1 {
  display: block;
  color: #fff;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 55px;
}
.form {
  margin-top: 100px;
}
.form input {
  color: none;
  display: block;
  background: none;
  /* background: #07081A; */
  color: #fff;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  border: none;
  border: #1976dc;
  border-bottom: 2px solid white;
  height: 50px;
  padding: 18px;
  margin-bottom: 50px;
  width: 100%;
}
.form__wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 200px;
}
.form__bg1 {
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 0;
  left: -50px;
}
.form__bg2 {
  position: absolute;
  bottom: -490px;
  right: 0px;
  z-index: -1;
}
/* .bg12{
      position: absolute;
      z-index: 0;
  } */
#card__tr {
  position: relative;
  z-index: 5;
}
@media (max-width: 580px) {
  .st__hero__content h1 {
    font-size: 31px;
  }

  #form__h1 {
    font-size: 25px;
  }
  .form__img {
    display: none;
  }
  .form2 {
    padding: 62px 106px;
    border-radius: 10px;
    background: #323459;
    /* box-shadow: 0px 0px 25px 0px rgba(255, 255, 255, 0.25); */
  }
  .form2 input {
    width: 100%;
  }
  .form2 {
    width: 100%;
  }
}
@media (max-width: 470px) {
  .form2 {
    padding: 30px;
  }
}
@media (max-width: 320px) {
  .form2 {
    padding: 10px;
  }
}
.form__btn {
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
  color: #fff;
  font-size: 21px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}
.team__wrapper {
  margin-left: 70px;
}
.st__hero__content {
  position: relative;
  z-index: 2;
}
.dev__av__content h3 {
  color: #fff;
  font-size: 37px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 25px;
}
.dev__av__content p {
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 62px;
  width: 521px;
}
.dev__av__content button {
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
}
.dev__ab {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 50px;
  margin-bottom: 50px;
}
@media (max-width: 990px) {
  .dev__ab {
    flex-direction: column;
    gap: 50px;
  }
}
@media (max-width: 580px) {
  .team__wrapper {
    margin-left: 0;
  }
  /* .dev__av__content {
    margin-left: 10px;
  } */
  .dev__av__img {
    display: none;
  }
  .dev__av__content p {
    width: auto;
    margin-bottom: 10px;
  }
  .dev__av__content button {
    display: none;
  }
  .team__card {
    height: 300px;
    width: 90%;
  }
}
@media (max-width: 930px) {
  .form__img {
    display: none;
  }
}
/* .form__wrapper form {
  margin-left: 0;
  margin-left: 20px;
  margin-right: 20px;
} */
label {
  cursor: pointer;
  color: #fff;
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
</style>