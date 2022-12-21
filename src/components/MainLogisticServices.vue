<script>
export default {
}

</script>

<template>
    <div class="container">
        <div class="inner-cont">
            <div class="card">
                <div class="text1">OUR BUSINESS AREAS</div>
                <div class="text-title">LOGISTICS SERVICES</div>
                <div class="paragraph">
                </div>

            </div>

        </div>

    </div>

</template>

<style lang="scss" scoped>
@use "../styles/partials/variables.scss" as *;

.container {
    @include container;
    height: 700px;

    .inner-cont {
        @include inner-cont;
        background-color: red;

        .card {
            width: calc(100% / 3 - 10px);
            margin: 0px 5px;
            height: 100%;
            background-color: burlywood;

            .text1 {
                font-size: 14px;
                color: $color-type-button;
                margin-bottom: 20px;
            }

            .text-title {
                font-size: 44px;
                color: #21333e;
            }
        }
    }

}
</style>
