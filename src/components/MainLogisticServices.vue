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
                    subtitle: "We develop operational strategies to improve logistical efficiency"
                },

            ]
        }
    }
}

</script>

<template>
    <div class="container">
        <div class="inner-cont">
            <div class="card">
                <div class="text1">OUR BUSINESS AREAS</div>
                <div class="text-title">LOGISTICS SERVICES</div>
                <div class="paragraph">
                    We are leaders in providing logistics services with a set of cutting edge technologies and a team of
                    experienced and renowned professionals.
                </div>
                <div class="type">
                    <span>Tradition</span>
                    <span>Quality</span>
                    <span>Security</span>
                </div>
                <div class="button">
                    <span>READ MORE</span>
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
@use "../styles/partials/variables.scss" as *;

.container {
    @include container;
    // height: 700px;
    padding: 150px;

    background-color: #eef4ed;
    position: relative;

    .grip {
        position: absolute;
        bottom: -5%;
        left: 50%;
        transform: translateX(-50%);

        .grip-icon {
            font-size: 80px;
            color: rgba(5, 130, 131, 0.3);
        }
    }

    .inner-cont {
        // @include inner-cont;
        width: 70%;
        height: 420px;
        display: flex;
        // background-color: red;

        .card {
            width: calc(100% / 3);
            // margin: 0px 5px;
            height: 100%;
            // background-color: burlywood;

            .text1 {
                font-size: 15px;
                color: $color-type-button;
                margin-bottom: 20px;
                font-weight: bold;
            }

            .text-title {
                font-size: 44px;
                color: #21333e;
                margin-bottom: 20px;
                font-weight: bold;
            }

            .paragraph {
                width: 85%;
                font-size: 18px;
                color: #8e8e8e;
                margin-bottom: 20px;
            }

            .type {
                width: 80%;
                height: 50px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 25px;

                span {
                    color: $color-type-button;
                    background-color: rgba(5, 130, 131, 0.1);
                    padding: 8px 14px;
                    border-radius: 2px;
                }
            }

            .button {
                span {
                    @include btn;
                }
            }
        }

        .card-white {
            width: calc(100% / 3 - 10px);
            margin: 0px 10px;
            height: 100%;
            background-color: white;
            display: flex;
            justify-content: center;
            align-items: center;

            .inner-card {
                height: 80%;
                width: 70%;

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
                    font-size: 18px;
                    color: #8e8e8e;

                }

            }
        }
    }

}
</style>
