<script >
import HeaderVue from './components/HeaderVue.vue'
import MainLogisticServices from './components/MainLogisticServices.vue'
import MainCompanySection from './components/MainCompanySection.vue'
import MainLogoSection from './components/MainLogoSection.vue'
export default {
  components: {
    HeaderVue,
    MainLogisticServices,
    MainCompanySection,
    MainLogoSection
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
    <MainLogoSection />
  </main>

</template>

<style lang="scss">
@use "./styles/general.scss" as *;
</style>
