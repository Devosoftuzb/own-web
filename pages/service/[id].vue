<template>
    <section class="contact2">
        <img class="contact2__form__img" src="/service/sr__hero__bg.png" alt="foto">
        <img class="contact2__form__img2" src="/service/sr__hero__bg2.png" alt="foto">
        <div class="container">
            <h1 >
                CRM sistemasi
            </h1>
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy 
            </p>
            <button class="form__btn2">
                Bog’lanish  
            </button>
            <button class="form__btn3">
               <img src="/about_img/Phone.png" alt=""> qo’ng’iroq qilish
            </button>
            <form>
                <div class="form__grid">
                    <input type="text" placeholder="Tashkilot nomi *" required>
                    <input type="text" placeholder="Ism familya *" required>
                </div>
                <div class="form__grid">
                    <input type="text" placeholder="Telefon raqam *" required>
                    <input type="text" placeholder="CRM turi *" required>
                </div>
                <input class="coment1" type="text" placeholder="Qisqacha maqsadiz *" required>
                <button>
                    Jo’natish
                </button>
            </form>
        </div>
    </section>
    <section class="form">
        <div class="container">
            <img  id="bg12" class="form__bg1" src="/about_img/about__hero__bg.png" alt="foto">
            
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
    .contact2{
        margin-top: 200px;
        margin-bottom: 181px;
        position: relative;
    }
    .contact2 h1{
        color: #FFF;
        font-size: 54px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        margin-bottom: 40px;
        text-align: center;
    }
    .contact2 p{
        width: 622px;
        flex-shrink: 0;
        color: var(--body-text-color, #C9C9C9);
        text-align: center;
        margin: 0 auto;
        margin-bottom: 40px;
        font-size: 18px;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
    }
    .form__btn2{
        color: #FFF;
        display: flex;
        padding: 10px 20px;
        justify-content: center;
        align-items: center;
        gap: 10px;
        border-radius: 5px;
        background: linear-gradient(96deg, rgba(25, 118, 220, 0.95) 19%, rgba(231, 101, 20, 0.95) 88.27%), #FFF;
        font-size: 21px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        margin: 0 auto;
        margin-bottom: 125px;
    }

    .contact2 form{
        width: 980px;
        border-radius: 10px;
        background: #323459;
        padding: 45px;
        margin: 0 auto;
    }
    .contact2 form input{
        color: #FFF;
        font-size: 18px;
        font-style: normal;
        font-weight: 300;
        color: var(--main-color, #1976DC);
        font-size: 18px;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
        line-height: normal;
        width: 400px;
        background: none;
        border: none;
        border-bottom: solid 1px white;
        padding-bottom: 19px;
        margin-bottom: 45px;
        display: block;
    }
    .form__grid{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .contact2 form button{
        display: flex;
        width: 890px;
        padding: 10px 20px;
        justify-content: center;
        align-items: center;
        gap: 10px;
        border-radius: 5px;
        background: linear-gradient(96deg, rgba(25, 118, 220, 0.95) 19%, rgba(231, 101, 20, 0.95) 88.27%), #FFF;
        color: #FFF;
        font-size: 21px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
    }
    .form__btn3{
        color: #FFF;
        width: 198px;
        height: 40px;
        flex-shrink: 0;
        border-radius: 5px;
        border: 2px solid #1976DC;  
        font-size: 18px;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
        display: flex;
        align-items: center;
        gap: 10px;
        padding-left: 10px ;
        display: none;
    }
    .form__btn3 img{
        display: inline;
    }
    .contact2__form__img{
        position: absolute;
        top: -200px;
        left: 0;
    }
    .contact2__form__img2{
        position: absolute;
        right: 0;

    }
    @media(max-width:580px){
        .contact2 form{
            width: auto;
            margin: 20px 0;
        }
        .contact2 form button{
            width: auto;
        }
        .contact2 p{
            width: auto;
            text-align: start;
            margin-left: 10px;
        }
        .contact2 h1{
            color: #FFF;
            font-size: 31px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
            text-align: start;
            margin-left: 10px;
        }
        .form__btn2{
            display: none;
        }
        .form__btn3{
            display: block;
            margin-bottom: 100px;
            margin-left: 10px;
        }
        .form__grid{
            flex-direction: column;
            padding: 0;

            gap: 45px;
            margin-bottom: 45px;
        }
        .coment1{
            margin: 0 auto;
        }
    }
    @media(max-width:450px){
        .contact2 form input {
            width: auto;
        }
        .contact2 form {

        }
    }
    @media(max-width:980px){
        .contact2 form {
            width: auto;
        }
        .contact2 form button{
            width: auto;
        }
        .form__grid{
            gap: 20px;
        }
    }

</style>