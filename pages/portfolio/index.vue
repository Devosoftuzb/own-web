<template>
  <section class="portfolio__hero">
    <img
      class="portfolio__hero__bg1"
      src="/service/sr__hero__bg.png"
      alt="FOTO"
    />
    <img
      class="portfolio__hero__bg2"
      src="/service/sr__hero__bg2.png"
      alt="FOTO"
    />
    <img src="" alt="" />
    <div class="container mx-auto p-5">
      <h1 class="text-[#FFF]">{{ $t("header-portfolio") }}</h1>
      <p class="portfolio__hero__p text-[#6D6D6D]">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy
      </p>
    </div>
  </section>
  <section class="portfolio__menu">
    <div class="container mx-auto p-5">
      <nav>
        <ul>
          <img src="/portfolio/menu.png" alt="foto" />
          <li class="text-[#FFF]">Branding</li>
          <li class="text-[#FFF]">Moble app</li>
          <li class="text-[#FFF]">Web sayt</li>
          <li class="text-[#FFF]">CRM</li>
        </ul>
      </nav>
      <div class="menu__wrapper">
        <div class="menu__card">
          <img class="bg__card1" src="/portfolio/bg__card.png" alt="foto" />
          <img src="/portfolio/portfolio__card1.png" alt="foto" />
        </div>
        <div class="menu__card">
          <img class="bg__card1" src="/portfolio/bg__card2.png" alt="foto" />
          <img src="/portfolio/portfolio__card2.png" alt="foto" />
        </div>
        <div class="menu__card">
          <img class="bg__card1" src="/portfolio/bg__card.png" alt="foto" />
          <img src="/portfolio/portfolio__card1.png" alt="foto" />
        </div>
      </div>
      <div class="menu__wrapper">
        <div class="menu__card">
          <img class="bg__card1" src="/portfolio/bg__card2.png" alt="foto" />
          <img src="/portfolio/portfolio__card2.png" alt="foto" />
        </div>
        <div class="menu__card">
          <img class="bg__card1" src="/portfolio/bg__card.png" alt="foto" />
          <img src="/portfolio/portfolio__card1.png" alt="foto" />
        </div>
        <div class="menu__card">
          <img class="bg__card1" src="/portfolio/bg__card.png" alt="foto" />
          <img src="/portfolio/portfolio__card1.png" alt="foto" />
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

<style >
.portfolio__hero {
  margin-top: 255px;
  position: relative;
}
.portfolio__hero h1 {
  position: relative;
  z-index: 2;
  font-size: 54px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 40px;
}
.portfolio__hero__p {
  position: relative;
  z-index: 2;
  color: var(--body-text-color, #6d6d6d);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: 622px;
}
.portfolio__hero__bg1 {
  position: absolute;
  top: -258px;
  z-index: 0;
}

.portfolio__hero__bg2 {
  position: absolute;
  right: 0;
  top: -200px;
}

.portfolio__menu {
  position: relative;
  margin-top: 125px;
  z-index: 2;
}
.portfolio__menu nav ul li {
  cursor: pointer;
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
  border: 1px solid #656060;
}
.portfolio__menu nav ul {
  display: flex;
  align-items: center;
  gap: 25px;
}
.portfolio__menu nav ul img {
  cursor: pointer;
}
.menu__card {
  position: relative;
  cursor: pointer;
}
.menu__card:hover .bg__card1 {
  display: none;
}
.bg__card1 {
  position: absolute;
  top: 0;
  left: 0;
  cursor: pointer;
}
.menu__wrapper {
  margin-top: 51px;
  display: flex;
  align-items: center;
  gap: 45px;
}
@media (max-width: 628px) {
  .portfolio__hero__p {
    width: auto;
    margin-left: 10px;
  }
  .portfolio__hero h1 {
    margin-left: 10px;
  }
  .portfolio__menu nav ul {
    flex-wrap: wrap;
    margin-left: 10px;
  }
  .menu__wrapper {
    flex-wrap: wrap;
    gap: 45px;
    margin-left: 10px;
  }
}
</style>