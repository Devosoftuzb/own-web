<template>
    <div class="mr__tp">

    </div>
        <section class="form">
        <div class="container">
            <img class="form__bg1" src="/about_img/about__hero__bg.png" alt="foto">
            <img class="form__bg2" src="/about_img/about__hero__bg2.png" alt="foto">
            <div class="form__wrapper">
                <form data-aos-duration="3000"  data-aos="fade-up"
                     data-aos-anchor-placement="top-bottom" class="form2">
                    <span     id="form__h1" >
                        Biz bilan bog’lanish
                    </span>
                    <label for="form__inp" >Ism familya *</label><input   class="outline-none"  required style="" id="form__inp" type="text" >
                     <label for=" tel">Telefon raqamingiz</label><input id="tel"  class="outline-none" required type="text" >
                     <label for="Xizmat">Xizmat turi * </label><input id="Xizmat" class="outline-none" required type="text"  >
                     <label for="Maqsadingiz">Maqsadingiz *</label><input id="Maqsadingiz" class="outline-none" required type="text" >
                    <button required class="form__btn" type="submit">
                        Yuborish
                    </button>
                </form>
                <div data-aos-duration="3000" data-aos="zoom-in"  class="form__img">
                    <img src="/about_img/form__img1.png" alt="foto">
                    <img src="/about_img/form__ten.png" alt="foto">
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>

</script>

<style>
    .mr__tp{
        margin-bottom: 300px;
    }
    .form2{
        position: relative;
        z-index: 5;
    }
    

</style>