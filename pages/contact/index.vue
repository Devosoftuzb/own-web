<template>
  <div class="mr__tp"></div>
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
          >
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
.mr__tp {
  margin-bottom: 200px;
}
.form2 {
  position: relative;
  z-index: 5;
}
</style>