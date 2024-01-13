<template>
    <div class="mr__tp">

    </div>
        <section class="form">
        <div class="container">
            <img class="form__bg1" src="/about_img/about__hero__bg.png" alt="foto">
            <img class="form__bg2" src="/about_img/about__hero__bg2.png" alt="foto">
            <div class="form__wrapper">
                <form class="form2">
                    <span     id="form__h1" >
                        Biz bilan bog’lanish
                    </span>
                    <input required style="" id="form__inp" type="text" placeholder="Ism familya *">
                    <input required type="text" placeholder="Telefon raqamingiz *">
                    <input required type="text" placeholder="Xizmat turi * " >
                    <input required type="text" placeholder="Maqsadingiz *">
                    <button required class="form__btn" type="submit">
                        Yuborish
                    </button>
                </form>
                <div class="form__img">
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