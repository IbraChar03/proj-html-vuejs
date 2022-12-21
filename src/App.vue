<script >
import HeaderVue from './components/HeaderVue.vue'
import MainLogisticServices from './components/MainLogisticServices.vue'
import MainCompanySection from './components/MainCompanySection.vue'
export default {
  components: {
    HeaderVue,
    MainLogisticServices,
    MainCompanySection
  }
}
</script>

<template>
  <header>
    <HeaderVue />
  </header>

  <main>
    <MainLogisticServices />
    <MainCompanySection />
  </main>

</template>

<style lang="scss">
@use "./styles/general.scss" as *;
</style>
