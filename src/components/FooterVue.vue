<script>
import { store } from "../store.js"
export default {
    data() {
        return {
            store,
            cards: [
                {
                    title: "About",
                    list: [
                        {
                            name: "The Company ",
                            href: "#"
                        },
                        {
                            name: "Institutional",
                            href: "#"
                        },
                        {
                            name: "Social & Events",
                            href: "#"
                        },
                        {
                            name: "Innovation",
                            href: "#"
                        },
                        {
                            name: "Environment",
                            href: "#"
                        },
                        {
                            name: "Technology",
                            href: "#"
                        },

                    ],

                },
                {
                    title: "Transport",
                    list: [
                        {
                            name: "Industrialized",
                            href: "#"
                        },
                        {
                            name: "Chemicals",
                            href: "#"
                        },
                        {
                            name: "Packaged Liquids",
                            href: "#"
                        },
                        {
                            name: "Construction",
                            href: "#"
                        },
                        {
                            name: "Laminated Wood",
                            href: "#"
                        },
                        {
                            name: "And others",
                            href: "#"
                        },

                    ],

                },
                {
                    title: "Support",
                    list: [
                        {
                            name: "Responsibility",
                            href: "#"
                        },
                        {
                            name: "Terms of Use",
                            href: "#"
                        },
                        {
                            name: "About Cookies",
                            href: "#"
                        },
                        {
                            name: "Privacy Policy",
                            href: "#"
                        },
                        {
                            name: "Accessibility",
                            href: "#"
                        },
                        {
                            name: "Information",
                            href: "#"
                        },

                    ],

                },
            ],

        }
    }
}

</script>

<template>
    <div class="jumbotron">
        <div class="inner-cont">
            <div class="cont-nexgen">
                <div class="nexgen">
                    <span class="color">N E X </span>&nbsp <span> G E N</span>
                </div>
                <div class="subtitle">
                    A Functional HTML Template for Corporate & Business.
                </div>
                <div class="contacts">

                    <div class="contact" v-for="item in store.contacts">

                        <font-awesome-icon :icon="item.icon" class="icon" />

                        <a href=""> <span>{{ item.text }}</span> </a>

                    </div>
                </div>
                <a href="" class="btn">
                    <span>GET IN TOUCH</span>
                </a>



            </div>
            <div class="card" v-for="item in cards">
                <div class="cont-card">
                    <div class="title">
                        {{ item.title }}

                    </div>
                    <ul>
                        <li v-for="items in item.list">
                            <a href="">
                                <font-awesome-icon icon="fa-solid fa-chevron-right" class="icon" /> {{ items.name }}
                            </a>
                        </li>
                    </ul>



                </div>
            </div>

        </div>

    </div>
    <div class="footer">
        <div class=container>
            <div class="text">
                Enjoy the low price. We are tracking any intention of privacy.
            </div>
            <div class="text">
                &#169; NEXGEN is Proudly Powered by <a href=""> <span>Codings</span></a>.
            </div>

        </div>
        <a href="">
            <span class="circle-arrow">
                <font-awesome-icon icon="fa-solid fa-arrow-up" class="arrow" />
            </span>
        </a>


    </div>

</template>

<style lang="scss" scoped>
@use "../styles/partials/variables-mixin.scss" as *;

.jumbotron {
    padding: 130px;
    background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url("/images/bg-10.jpg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    @include container;

    .inner-cont {
        max-width: 1400px;
        width: 65%;
        height: 60%;
        display: flex;
        // background-color: red;

        .cont-nexgen {
            width: calc(100% / 4 - 10px);
            margin: 0px 10px;
            height: 100%;

            .nexgen {
                display: flex;
                align-items: center;

                .color {
                    color: $color-type-button;
                    font-size: 25px;
                    font-weight: bold;
                    background-color: rgba(5, 130, 131, 0.1);
                    border-radius: 15px;
                    padding: 5px 0;
                    padding-left: 25px;

                }

                span {
                    color: #c0c3d0;
                    font-size: 25px;
                    font-weight: bold;
                }

            }

            .subtitle {
                margin-top: 15px;
                width: 100%;
                color: #c0c3d0;
                font-size: 18px;
                margin-bottom: 20px;
            }

            .contacts {
                margin-bottom: 40px;

                .contact {
                    margin-bottom: 10px;
                    display: flex;

                    a {
                        text-decoration: none;

                        span {
                            font-size: 18px;
                            color: #c0c3d0;
                        }
                    }

                    .icon {
                        font-size: 15px;
                        color: #c0c3d0;
                        margin-right: 10px;
                    }

                }
            }


            .btn {
                text-decoration: none;

                span {
                    padding: 10px 17px;
                    text-align: center;
                    border: 1px solid $color-type-button;
                    border-radius: 5px;
                    color: #c0c3d0;
                    margin-top: 10px;
                }
            }

        }

        .card {
            width: calc(100% / 4 - 10px);
            margin: 0px 10px;
            height: 100%;
            padding: 20px 0px;
            background-color: rgba(255, 255, 255, 0.02);
            border-radius: 5px;
            display: flex;
            justify-content: center;
            align-items: center;

            .cont-card {
                width: 80%;
                height: 80%;

                .title {
                    margin-bottom: 20px;
                    font-size: 25px;
                    color: white;
                    font-weight: bold;
                }

                li {
                    margin-bottom: 10px;
                    list-style-type: none;

                    a {
                        color: #c0c3d0;
                        font-size: 19px;
                        text-decoration: none;

                        .icon {
                            font-size: 15px;
                            color: #c0c3d0;
                        }
                    }
                }


            }
        }
    }

}

.footer {
    width: 100%;
    // height: 50px;
    padding: 20px;
    background-color: #08080a;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    .circle-arrow {
        top: -20%;
        right: 0;
        position: absolute;
        border-radius: 50%;
        height: 45px;
        width: 45px;
        background-color: rgba(255, 255, 255, 0.1);
        vertical-align: middle;
        margin-right: 10px;
        object-fit: cover;
        display: flex;
        justify-content: center;
        align-items: center;

        .arrow {
            font-size: 24px;
            color: rgba(5, 130, 131, 0.1);
            // vertical-align: middle;

        }
    }

    .container {
        max-width: 1400px;
        width: 60%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;

        .text {
            font-size: 15px;
            color: $color-type ;

            a {
                text-decoration: none;

                span {
                    font-size: 15px;
                    color: $color-type-button;
                }
            }


        }
    }
}
</style>
