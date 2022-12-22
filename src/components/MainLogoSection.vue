<script>
export default {
    data() {
        return {
            logos: [
                {
                    img: "/images/logo-5.png"
                },
                {
                    img: "/images/logo-1.png"
                },
                {
                    img: "/images/logo-2.png"
                },
                {
                    img: "/images/logo-3.png"
                },
                {
                    img: "/images/logo-4.png"
                },
                {
                    img: "/images/logo-5.png"
                },


            ]

        }
    }
}

</script>

<template>
    <div class="container">
        <div class="inner-cont">
            <img :src="item.img" alt="" v-for="item in logos">

        </div>

    </div>

</template>

<style lang="scss" scoped>
@use "../styles/partials/variables-mixin.scss" as *;

.container {
    @include container;
    // height: 280px;
    padding: 80px;
    background-color: $color-background;


    .inner-cont {
        max-width: 1400px;
        width: 50%;
        height: 100%;
        // background-color: red;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-wrap: wrap;

        img {
            height: 30px;
            width: 70px;
            object-fit: contain;
            filter: invert(57%) sepia(5%) saturate(150%) hue-rotate(71deg) brightness(95%) contrast(90%);
        }
    }

}
</style>
