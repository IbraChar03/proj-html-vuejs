<script>
export default {
    data() {
        return {
            arrPercentage: [
                {
                    percentage: "0",
                    title: "Leadership",
                    subtitle: " Lorem ipsum dolor sit amet consectetur adipiscing elit.",
                    percent: false
                },
                {
                    percentage: "0",
                    title: "Psychology",
                    subtitle: " Lorem ipsum dolor sit amet consectetur adipiscing elit.",
                    percent: false
                },
                {
                    percentage: "1",
                    title: "Flexibility",
                    subtitle: " Lorem ipsum dolor sit amet consectetur adipiscing elit.",
                    percent: true
                }
            ]

        }
    }
}

</script>

<template>
    <div class="container">
        <div class="inner-contText">
            <div class="inner-cont">
                <div class="text-green">ABOUT THE NETWORK</div>
                <div class="title">
                    <span>THE</span> COMPANY
                </div>
                <div class="subtitle">
                    With all of this expertise and capability comes an unrivalled commitment to customer service.
                </div>
                <div class="section" v-for="item in arrPercentage">
                    <div class="percentage">
                        <div class="circle">
                            {{ item.percentage }} <span>%</span>
                            <div class="border" :class="{ margin: item.percent }"></div>
                        </div>
                    </div>
                    <div class="content">
                        <div class="title">
                            {{ item.title }}
                        </div>
                        <div class="paragraph">
                            {{ item.subtitle }}
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div class="inner-contImg">

            <img src="/images/about-5.jpg" alt="">
        </div>
        <div class="grip">
            <font-awesome-icon icon="fa-solid fa-grip" class="grip-icon" />
        </div>


    </div>

</template>

<style lang="scss" scoped>
@use "../styles/partials/variables-mixin.scss" as *;

.container {
    width: 100%;
    // height: 1000px;
    display: flex;
    background-color: #111117;
    position: relative;
    z-index: 1;

    .grip {
        @include grip;

        .grip-icon {
            @include grip-icon
        }
    }

    .inner-contText {
        padding-top: 80px;
        width: 50%;
        height: 100%;
        // background-color: chartreuse;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        z-index: 1;

        .inner-cont {
            max-width: 1400px;
            height: 80%;
            width: 60%;
            // background-color: rebeccapurple;

            .text-green {
                @include green-text
            }

            .title {
                color: white;
                font-size: 40px;
                font-weight: bold;

                span {
                    color: white;
                    font-size: 40px;
                    font-weight: bold;
                    background-color: rgba(5, 130, 131, 0.3);
                    padding: 7px 10px;
                    border-radius: 5px;
                }
            }

            .subtitle {
                @include subtitle-text;
                margin: 40px 0px;
            }

            .section {
                height: 120px;
                width: 80%;
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 60px;

                .percentage {
                    width: 30%;

                    .circle {
                        border-radius: 50%;
                        width: 100px;
                        height: 100px;
                        padding: 15px;
                        border: 8px solid #232328;
                        color: #c0c3d0;
                        text-align: center;
                        font-size: 32px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        font-weight: bold;
                        vertical-align: bottom;

                        span {
                            margin-top: 10px;
                            font-size: 18px;
                            color: #c0c3d0;

                        }

                        .border {
                            display: none;
                        }

                        .margin {
                            right: 62px;
                            position: relative;
                            display: block;
                            height: 2px;
                            width: 8px;
                            background-color: $color-type-button;

                        }
                    }

                }

                .content {
                    width: 80%;

                    .title {
                        font-size: 25px;
                        color: white;
                        margin-bottom: 15px;
                    }

                    .paragraph {
                        @include subtitle-text;

                    }

                }


            }
        }


    }

    .inner-contImg {
        width: 50%;
        // height: 100%;
        // background-color: aquamarine;
        z-index: 1;

        img {
            max-width: 1400px;
            display: block;
            width: 100%;
            height: 100%;

        }
    }
}
</style>
