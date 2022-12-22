<script>
export default {
    data() {
        return {
            cardsArray: [
                {
                    img: "/images/news-1.jpg",
                    text: "Increasing creativity is possible for everyone"
                },
                {
                    img: "/images/news-2.jpg",
                    text: "Because market research is part of the business plan"
                },
                {
                    img: "/images/news-3.jpg",
                    text: "Working from home is now a trend"
                }
            ]

        }
    }
}

</script>

<template>
    <div class="container">
        <div class="inner-cont">
            <div class="text">
                <div class="text-green">
                    OUR EDITORIAL CONTENT
                </div>
                <div class="title">
                    LATEST <span>NEWS</span>
                </div>
                <div class="subtitle">
                    <span>Every week we publish content about what is best in the business world</span>

                    <a href="">
                        <span>SEE ALL</span> </a>

                </div>

            </div>
            <div class="cards">
                <div class="card" v-for="item in cardsArray"
                    v-bind:style="{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)),url(' + item.img + ')' }">
                    <!-- <img :src="item.img" alt=""> -->
                    <span>
                        {{ item.text }}
                    </span>
                </div>
            </div>


        </div>

    </div>

</template>

<style lang="scss" scoped>
@use "../styles/partials/variables-mixin.scss" as *;

.container {
    @include container;
    padding: 100px;

    .inner-cont {
        max-width: 1400px;
        width: 60%;
        height: 80%;

        .text {
            width: 100%;
            height: 25%;
            // background-color: aqua;

            .text-green {
                @include green-text
            }

            .title {
                font-weight: bold;
                font-size: 40px;
                color: #21333e;
                margin-bottom: 20px;

                span {
                    font-weight: bold;
                    font-size: 40px;
                    color: $color-type-button;
                    @include background-text
                }

            }

            .subtitle {
                height: 50px;
                width: 100%;
                display: flex;
                justify-content: space-between;

                span {
                    @include subtitle-text
                }



                a {

                    text-decoration: none;

                    span {
                        @include btn
                    }
                }


            }
        }

        .cards {
            width: 100%;
            height: 75%;
            // background-color: brown;
            display: flex;

            .card {
                width: calc(100% / 3 - 10px);
                padding: 150px;
                border-radius: 5px;
                margin: 0 10px;
                // height: 360px;
                position: relative;
                background-size: cover;
                background-repeat: no-repeat;
                background-position: center;

                span {
                    width: 80%;
                    color: white;
                    font-weight: bold;
                    font-size: 25px;
                    text-align: center;
                    position: absolute;
                    bottom: 10%;
                    left: 50%;
                    transform: translateX(-50%);
                }
            }
        }
    }
}
</style>
