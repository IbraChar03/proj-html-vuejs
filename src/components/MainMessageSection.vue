<script>
import { store } from "../store.js"
export default {
    data() {
        return {
            store,

        }
    }
}

</script>

<template>
    <div class="container">
        <div class="inner-cont">
            <div class="form">
                <div class="text-green">
                    SEND A MESSAGE
                </div>
                <div class="title">
                    Get in <span>Touch</span>
                </div>
                <div class="subtitle">
                    We will respond to your message as soon as possible
                </div>
                <form>
                    <label for="name"></label>
                    <input type="text" id="name" name="name" placeholder="Name">
                    <label for="email"></label>
                    <input type="text" id="email" name="email" placeholder="Email"> <br>
                    <label for="phone"></label>
                    <input type="text" id="phone" name="phone" placeholder="Phone">
                    <label for="info"></label>
                    <input type="text" id="info" name="info" placeholder="More Info"><br>
                    <label for="message"></label>
                    <textarea name="message" id="message" cols="30" rows="8" placeholder="Message"></textarea>
                    <button>
                        <span>SEND</span>
                    </button>
                </form>


            </div>
            <div class="contacts">
                <div class="title">
                    Example Inc.
                </div>
                <div class="subtitle">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
                <div class="subtitle">
                    Praesent diam lacus, dapibus sed imperdiet consectetur.
                </div>
                <div class="contact" v-for="item in store.contacts">
                    <div class="cont-icon">
                        <font-awesome-icon :icon="item.icon" class="icon" />
                    </div>
                    <span>{{ item.text }}</span>

                </div>
                <a href="">
                    <span>VIEW MAP</span>
                </a>
            </div>

        </div>

    </div>

</template>

<style lang="scss" scoped>
@use "../styles/partials/variables.scss" as *;

.container {
    // height: 850px;
    padding: 50px;
    background-color: $color-background;
    @include container;

    .inner-cont {
        width: 60%;
        height: 80%;
        // background-color: red;
        display: flex;

        .form {
            padding: 10px;
            width: 65%;
            height: 100%;
            // background-color: aqua;

            .text-green {
                @include green-text
            }

            .title {
                font-size: 40px;
                color: #21333e;
                font-weight: bold;

                span {
                    color: $color-type-button;
                    @include background-text;
                    padding: 7px 14px
                }
            }

            .subtitle {
                @include subtitle-text;
                margin: 30px 0px;
            }

            form {

                button {
                    margin-top: 20px;
                    @include btn;
                    border: none;
                    cursor: pointer;
                }

                input {
                    width: calc(50% - 10px);
                    margin-right: 10px;
                    padding: 15px;
                    border-radius: 5px;

                    background: #dce2db;
                    border: none;
                    outline: none;
                    color: black;
                    margin-bottom: 10px;
                }

                input::placeholder {
                    font-size: 15px;

                }

                textarea {
                    width: 98.5%;
                    padding: 15px;
                    border-radius: 5px;
                    background: #dce2db;
                    border: none;
                    outline: none;
                    color: black;

                }

                textarea::placeholder {
                    font-size: 15px;

                }
            }
        }
    }

    .contacts {
        margin-left: 20px;
        width: 35%;
        height: 100%;
        // background-color: blue;

        .title {
            color: black;
            font-size: 25px;
            margin-bottom: 20px;
            font-weight: bold
        }

        .subtitle {
            @include subtitle-text;
            margin-bottom: 20px;
        }

        .contact {
            height: 50px;
            width: 100%;
            margin-bottom: 20px;
            display: flex;

            .cont-icon {
                // display: inline-block;
                border-radius: 50%;
                // padding: 12px 12px;
                height: 40px;
                width: 40px;
                background-color: rgba(5, 130, 131, 0.3);
                vertical-align: middle;
                margin-right: 10px;
                object-fit: cover;
                display: flex;
                justify-content: center;
                align-items: center;


                .icon {
                    font-size: 18px;
                    color: $color-type-button;
                    // vertical-align: middle;

                }
            }


            span {
                margin-top: 8px;
                font-size: 19px;
                color: $color-type-button;
            }
        }

        a {
            text-decoration: none;

            span {
                padding: 10px 17px;
                text-align: center;
                border: 1px solid $color-type-button;
                border-radius: 5px;
                color: $color-type-button;
                margin-top: 10px;
            }
        }
    }
}
</style>
