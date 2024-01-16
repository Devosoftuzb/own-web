<template>
    <section class="service__hero m-5">
        <div class="container">  
            <img class="sr__hero__bg1" src="/service/sr__hero__bg.png" alt="foto">
            <img class="sr__hero__bg2" src="/service/sr__hero__bg2.png" alt="foto">
            <h1   data-aos="fade-down"
                data-aos-duration="3000" class="text-[#FFF]">
                Bizning xizmat turlarimiz
            </h1>
            <p class="sr__hero_p text-[#FFF]">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy 
            </p>
            <button class="sr__hero__btn__mob">
                <img src="/about_img/Phone.png" alt="foto">qo’ng’iroq qilish
            </button>
            <div class="sr__hero__wrapper">
                <div data-aos-duration="3000"  data-aos="fade-down-right" class="sr__hero__card">
                    <h3 class="text-[#FFF]">
                        Web sayt yaratish
                    </h3>
                    <p class="text-[#FFF]">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
                    </p>
                    <div class="card__btn__wrapper">
                        <button>
                            <NuxtLink to="service/1">
                            Ko’proq
                            </NuxtLink>
                        </button>
                        
                        <img src="/service/Forward (1).png" alt="foto">
                    </div>
                </div>
                <div data-aos-duration="3000"  data-aos="fade-down-left"  class="sr__hero__card">
                    <h3 class="text-[#FFF]">
                        Web sayt yaratish
                    </h3>
                    <p class="text-[#FFF]">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
                    </p>
                    <div class="card__btn__wrapper">
                        <button>
                            Ko’proq
                        </button>
                        <img src="/service/Forward (1).png" alt="foto">
                    </div>
                </div>
                <div data-aos-duration="3000"  data-aos="fade-down-right" class="sr__hero__card">
                    <h3 class="text-[#FFF]">
                        Web sayt yaratish
                    </h3>
                    <p class="text-[#FFF]">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
                    </p>
                    <div class="card__btn__wrapper">
                        <button>
                            Ko’proq
                        </button>
                        <img src="/service/Forward (1).png" alt="foto">
                    </div>
                </div>
                <div data-aos-duration="3000"  data-aos="fade-down-left" class="sr__hero__card">
                    <h3 class="text-[#FFF]">
                        Web sayt yaratish
                    </h3>
                    <p class="text-[#FFF]">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
                    </p>
                    <div class="card__btn__wrapper">
                        <button>
                            Ko’proq
                        </button>
                        <img src="/service/Forward (1).png" alt="foto">
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="form">
        <div class="container">
            <img class="form2__bg1" src="/about_img/about__hero__bg.png" alt="foto">
            <img class="form__bg2" src="/about_img/about__hero__bg2.png" alt="foto">
            <div class="form__wrapper">
                <form  data-aos-duration="2000" data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine" class="form2">
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
                <div data-aos-duration="1500" data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-back"
                    data-aos-delay="300"
                    data-aos-offset="0" class="form__img">
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
    .service__hero{
        position: relative;
        margin-top: 250px;
        margin-bottom: 175px;
        
    }
    .service__hero h1{
        position: relative;
        z-index: 9;
        color: #FFF;
        font-size: 54px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;

        margin-bottom: 40px;

    }
    .sr__hero_p{
        position: relative;
        z-index: 9;
        color: var(--body-text-color, #C9C9C9);
        text-align: center;
        font-size: 18px;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
        width: 622px;
        margin: 0 auto;
        display: none;
    }
    .sr__hero_btn{

        border-radius: 5px;
        display: inline-flex;
        padding: 10px 20px;
        justify-content: center;
        align-items: center;
        gap: 10px;
        background: linear-gradient(96deg, rgba(25, 118, 220, 0.95) 19%, rgba(231, 101, 20, 0.95) 88.27%), #FFF;
        color: #FFF;
        font-size: 21px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        cursor: pointer;
        margin: 0 auto;
        margin-top: 40px;
        display: block;
        }
        .sr__hero__btn__mob img{
            display: inline;
        }
        .sr__hero__btn__mob{
            color: #FFF;
            font-size: 18px;
            font-style: normal;
            font-weight: 300;
            line-height: normal;
            border-radius: 5px;
            border: 2px solid #1976DC;
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
        .sr__hero__bg1{
            position: absolute;
            left: -30px;
            top: -268px;
        }
        .sr__hero__bg2{
            position: absolute;
            top: -260px;
            right: -30px;
        }
      
        
        .sr__hero__wrapper{
            margin-top: 50px;
            display: grid;
            grid-template-columns: repeat(2,1fr);
            gap: 75px;
            
        }
        .sr__hero__card{
            position: relative;
            z-index: 2;
            border-radius: 10px;
            background: #323459;
            padding: 22px 32px;
            width: 100%;

        }
        .sr__hero__card h3{
            color: #EBF4FF;
            font-size: 26px;
            font-style: normal;
            font-weight: 600;
            line-height: normal;
            margin-bottom: 8px;
        }
        .sr__hero__card p{
            color: #EBF4FF;
            font-size: 18px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            /* width: 524px; */
        }
        .sr__hero__card button{
            color: #FFF;
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
            background: linear-gradient(96deg, rgba(25, 118, 220, 0.95) 19%, rgba(231, 101, 20, 0.95) 88.27%), #FFF;
            cursor: pointer;
    
        }
        .card__btn__wrapper{
            margin-top: 20px;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        .card__btn__wrapper img{
            cursor: pointer;
        }
        .form2__bg1{
            position: absolute;
            bottom: -500px;
            left: -50px;
            z-index: -1;
        }
        @media(max-width:580px){
            .sr__hero__wrapper{
                grid-template-columns: repeat(1,1fr);
                margin-left: 0px;
            }
            .sr__hero__btn__mob{
                display: block;
            }
            .sr__hero_p{
                display: block;
            }
            .sr__hero__card p{
                width: auto;
            }
            
        }
        @media(max-width:1180px){
            .sr__hero__wrapper{
                grid-template-columns: repeat(1,1fr);
                margin-left: 0px;
            }
            .sr__hero__card{
                margin: 0 auto;
            }
        }
        @media(max-width:545px){
            .sr__hero__card{
                margin: 0 auto  ;
            }
           .sr__hero__card__contetn{
            width: 100%;
            height: auto;
           }
           .sr__hero__card{
                width:100% ;
            }
           .sr__hero__card__img{
            left: -50px;
           }
        }
        @media(max-width:510px){
            .sr__hero__card__img{
                left: -10px;
            }
        }

        @media(max-width:700px){
            .sr__hero__bg2{
                right: 0px;
            }
        }
        @media(max-width:700px){
            .sr__hero__bg2{
                right: 0px;
            }
            .service__hero h1{
                text-align: left;
                color: #FFF;
                font-size: 31px;
                font-style: normal;
                font-weight: 500;
                line-height: normal;
            }
            .sr__hero_p{
                margin: 0;
                text-align: left;
                color: var(--body-text-color, #C9C9C9);
                width: 460px;
                font-size: 18px;
                font-style: normal;
                font-weight: 300;
                line-height: normal;
            }
            .sr__hero_btn{
                display: none;
            }
            
        }
        @media(max-width:480px){
            .sr__hero_p{
                width: auto;
            }
            .sr__hero__card{
                padding: 20px;
            
            }
        }
        @media(max-width:1025px){
            .sr__hero__bg2{
                right: 0px;
            }}
</style>