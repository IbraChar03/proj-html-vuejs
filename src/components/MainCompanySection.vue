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
        <div class="inner-contText">


        </div>
        <div class="inner-contImg">

            <img src="/images/about-5.jpg" alt="">
        </div>


    </div>

</template>

<style lang="scss" scoped>
@use "../styles/partials/variables.scss" as *;

.container {
    width: 100%;
    height: 1000px;
    display: flex;
    background-color: red;

    .inner-contText {
        width: 50%;
        height: 100%;
        background-color: chartreuse;
    }

    .inner-contImg {
        width: 50%;
        height: 100%;
        background-color: aquamarine;

        img {
            width: 100%;
            height: 100%;
        }
    }
}
</style>
