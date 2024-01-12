<template>
    <section class="service__hero">
        <div class="container">  
            <img class="sr__hero__bg1" src="/service/sr__hero__bg.png" alt="foto">
            <img class="sr__hero__bg2" src="/service/sr__hero__bg2.png" alt="foto">
            <h1>
                Biznesni avtomaylashtirish 
            </h1>
            <p class="sr__hero_p">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy 
            </p>
            <button class="sr__hero_btn">
                Bog’lanish
            </button>
            <button class="sr__hero__btn__mob">
                <img src="/about_img/Phone.png" alt="foto">qo’ng’iroq qilish
            </button>
            <div class="sr__hero__wrapper">
                <div class="sr__hero__card">
                    <img class="sr__hero__card__img" src="/service/sr__hero__card.png" alt="foto">
                    <div class="sr__hero__card__contetn">
                            <h3>
                                CRM sistema
                            </h3>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            </p>
                    </div>
                </div>
                <div class="sr__hero__card">
                    <img class="sr__hero__card__img" src="/service/sr__hero__card.png" alt="foto">
                    <div class="sr__hero__card__contetn">
                            <h3>
                                CRM sistema
                            </h3>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            </p>
                    </div>
                </div>
                <div class="sr__hero__card">
                    <img class="sr__hero__card__img" src="/service/sr__hero__card.png" alt="foto">
                    <div class="sr__hero__card__contetn">
                            <h3>
                                CRM sistema
                            </h3>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            </p>
                    </div>
                </div>
                <div class="sr__hero__card">
                    <img class="sr__hero__card__img" src="/service/sr__hero__card.png" alt="foto">
                    <div class="sr__hero__card__contetn">
                            <h3>
                                CRM sistema
                            </h3>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            </p>
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
                <form class="form2">
                    <span     id="form__h1" >
                        Biz bilan bog’lanish
                    </span>
                    <input style="" id="form__inp" type="text" placeholder="Ism familya *">
                    <input type="text" placeholder="Telefon raqamingiz *">
                    <input type="text" placeholder="Xizmat turi * " >
                    <input type="text" placeholder="Maqsadingiz *">
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
    .service__hero{
        position: relative;
        margin-top: 250px;
        margin-bottom: 125px;
        
    }
    .service__hero h1{
        position: relative;
        z-index: 15;
        color: #FFF;
        font-size: 54px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        text-align: center;
        margin-bottom: 40px;

    }
    .sr__hero_p{
        position: relative;
        z-index: 15;
        color: var(--body-text-color, #C9C9C9);
        text-align: center;
        font-size: 18px;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
        width: 622px;
        margin: 0 auto;
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
        .sr__hero__card__contetn{
            padding: 22px 16px;
            width: 520px;
            height: 166px;
            flex-shrink: 0;
            border-radius: 10px;
            background: #323459;
            position: relative;
            z-index: 5;
        }
        .sr__hero__card__contetn h3{
            color: #EBF4FF;
            font-size: 26px;
            font-style: normal;
            font-weight: 600;
            line-height: normal;
            margin-bottom: 8px;
        }
        .sr__hero__card__contetn p{
            color: #EBF4FF;
            font-size: 18px;
            font-style: normal;
            font-weight: 300;
            line-height: normal;
           
        }
        .sr__hero__card{
            position: relative;
            /* z-index: 2; */
            z-index: 9;
            width: 502px;
            cursor: pointer;
        }
        .sr__hero__card__img{
            position: absolute;
            width: 700px;
            height: 400px;
            top: -120px;
            left: 20px;
            z-index: 1;
            display: none;
        }
        .sr__hero__card:hover .sr__hero__card__img{
            cursor: pointer;
            display: block;
            
        }
        .sr__hero__wrapper{
            margin-top: 200px;
            display: grid;
            grid-template-columns: repeat(2,1fr);
            align-items: center;
            justify-content: center;
            gap: 75px;
            margin-left:140px ;
            position: relative;

            z-index: 9;
            
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
            width: 300px;
            height: auto;
           }
           .sr__hero__card{
                width:300px ;
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
        }
        @media(max-width:1025px){
            .sr__hero__bg2{
                right: 0px;
            }}
</style>