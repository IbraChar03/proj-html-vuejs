<script>
export default {
    data() {
        return {

        }
    }
}

</script>

<template>
    <div class="container">
        <div class="inner-cont">
            <div class="text">
                <div class="text-green">
                    NEWSLETTER
                </div>
                <div class="title">
                    <span>KNOW</span> FIRST
                </div>
                <div class="subtitle">
                    Follow closely and receive content about our company and the news of the current market
                </div>
            </div>
            <div class="form">
                <form>
                    <label for="name"></label>
                    <input type="text" id="name" name="name" placeholder="Name"><br>
                    <label for="email"></label>
                    <input type="text" id="email" name="email" placeholder="Email">
                </form>
                <a href="">
                    <span>SUBSCRIBE</span>
                </a>
            </div>

        </div>

    </div>

</template>

<style lang="scss" scoped>
@use "../styles/partials/variables.scss" as *;

.container {
    padding: 100px;
    @include container;
    background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("/images/bg-1.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    .inner-cont {
        max-width: 1400px;
        width: 50%;
        height: 80%;
        // background-color: red;
        display: flex;
        align-items: center;


        .text {
            width: 60%;
            height: 50%;

            .text-green {
                @include green-text
            }

            .title {
                color: white;
                font-size: 40px;
                margin-top: 20px;
                margin-bottom: 25px;

                span {
                    @include background-text
                }
            }

            .subtitle {
                @include subtitle-text
            }
        }

        .form {
            width: 60%;
            height: 50%;
            margin-left: 20px;

            form {
                margin-bottom: 10px;

                input {
                    width: 100%;
                    padding: 15px;
                    border-radius: 5px;
                    margin-bottom: 20px;
                    background: rgba(255, 255, 255, 0.5);
                    border: none;
                    outline: none;
                    color: black;
                }

                input::placeholder {
                    color: #6c757d;
                    opacity: 1;
                    font-size: 16px;
                }

            }

            a {
                margin-top: 10px;
                text-decoration: none;

                span {
                    @include btn
                }
            }
        }

    }
}
</style>
