<script>
export default {
    data() {
        return {
            cards: [
                {
                    img: "/images/gallery-3.jpg",
                    title: "Technology",
                    subtitle: "Focused on developing technology solutions adapted to our client's needs."
                },

                {
                    img: "/images/gallery-5.jpg",
                    title: "Transport",
                    subtitle: "We develop operational strategies to improve logistical efficiency."
                },

            ],
            arrValues: [
                {
                    name: "Tradition"

                },
                {
                    name: "Quality"

                },
                {
                    name: "Security"

                }
            ]
        }
    }
}

</script>

<template>
    <div class="container">
        <div class="inner-cont">
            <div class="card">
                <div class="text-green">OUR BUSINESS AREAS</div>
                <div class="text-title">LOGISTICS SERVICES</div>
                <div class="paragraph">
                    We are leaders in providing logistics services with a set of cutting edge technologies and a team of
                    experienced and renowned professionals.
                </div>
                <div class="type">
                    <span v-for="item in arrValues">{{ item.name }}</span>
                </div>
                <div class="button">
                    <a href="">
                        <span>READ MORE</span>
                    </a>

                </div>

            </div>
            <div class="card-white" v-for="item in cards">
                <div class="inner-card">
                    <div class="img">
                        <img :src="item.img" :alt="item.title">
                    </div>
                    <div class="title">
                        {{ item.title }}
                    </div>
                    <div class="subtitle">
                        {{ item.subtitle }}
                    </div>

                </div>

            </div>

        </div>
        <div class="grip">
            <font-awesome-icon icon="fa-solid fa-grip" class="grip-icon" />
        </div>

    </div>

</template>

<style lang="scss" scoped>
@use "../styles/partials/variables-mixin.scss" as *;

.container {
    @include container;
    // height: 700px;
    padding: 150px;
    background-color: $color-background;
    position: relative;

    .grip {
        @include grip;

        .grip-icon {
            @include grip-icon
        }
    }

    .inner-cont {
        max-width: 1400px;
        width: 70%;
        // height: 420px;
        padding: 10px;
        display: flex;
        flex-wrap: wrap;

        .card {
            width: calc(100% / 3 - 20px);
            margin: 10px;
            height: 100%;
            // background-color: burlywood;

            .text-green {
                @include green-text
            }

            .text-title {
                font-size: 44px;
                color: #21333e;
                margin-bottom: 20px;
                font-weight: bold;
            }

            .paragraph {
                width: 85%;
                @include subtitle-text;
                margin-bottom: 20px;
            }

            .type {
                width: 80%;
                // height: 50px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 25px;

                span {
                    width: calc(100% / 3 - 10px);
                    margin: 5px;
                    text-align: center;
                    color: $color-type-button;
                    background-color: rgba(5, 130, 131, 0.1);
                    padding: 8px 5px;
                    border-radius: 2px;
                }
            }

            .button {
                a {
                    text-decoration: none;

                    span {
                        @include btn;
                    }
                }

            }
        }

        .card-white {
            width: calc(100% / 3 - 20px);
            margin: 10px;
            // height: 100%;
            padding: 20px;
            background-color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 5px;

            .inner-card {
                height: 80%;
                width: 80%;

                .img {
                    width: 100%;
                    height: 50%;
                    margin-bottom: 20px;

                    img {
                        width: 100%;
                        height: 100%;
                    }

                }

                .title {
                    width: 100%;
                    height: 10%;
                    color: $color-type-title;
                    font-size: 25px;
                    font-weight: bold;
                    margin-bottom: 20px;

                }

                .subtitle {
                    width: 100%;
                    height: 40%;
                    @include subtitle-text;

                }

            }
        }
    }

}
</style>
