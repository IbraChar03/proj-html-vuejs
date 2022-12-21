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

                        <span>{{ item.text }}</span>

                    </div>
                </div>
                <a href="">
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

</template>

<style lang="scss" scoped>
@use "../styles/partials/variables.scss" as *;

.jumbotron {
    height: 600px;
    background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("/images/bg-10.jpg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    @include container;

    .inner-cont {
        width: 60%;
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
                    color: white;
                    font-size: 25px;
                    font-weight: bold;
                }

                p {
                    font-size: 17px;
                    color: white;
                }
            }

            .subtitle {
                margin-top: 15px;
                width: 80%;
                color: white;
                font-size: 18px;
                margin-bottom: 20px;
            }

            .contacts {
                margin-bottom: 40px;

                .contact {
                    margin-bottom: 10px;
                    display: flex;

                    .icon {
                        font-size: 15px;
                        color: white;
                        margin-right: 10px;
                    }

                    span {
                        font-size: 18px;
                        color: white;
                    }
                }
            }


            a {
                text-decoration: none;



                span {
                    padding: 10px 17px;
                    text-align: center;
                    border: 1px solid $color-type-button;
                    border-radius: 5px;
                    color: white;
                    margin-top: 10px;
                }
            }

        }

        .card {
            width: calc(100% / 4 - 10px);
            margin: 0px 10px;
            height: 100%;
            background-color: rgba(255, 255, 255, 0.05);
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
                        color: white;
                        font-size: 20px;
                        text-decoration: none;

                        .icon {
                            font-size: 15px;
                            color: white;
                        }
                    }
                }


            }
        }
    }

}
</style>
