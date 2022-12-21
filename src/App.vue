<script >
import HeaderVue from './components/HeaderVue.vue'
import MainLogisticServices from './components/MainLogisticServices.vue'
export default {
  components: {
    HeaderVue,
    MainLogisticServices
  }
}
</script>

<template>
  <header>
    <HeaderVue />
  </header>

  <main>
    <MainLogisticServices />
  </main>

</template>

<style lang="scss">
@use "./styles/general.scss" as *;
</style>
