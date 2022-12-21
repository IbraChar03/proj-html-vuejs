<script >
import HeaderVue from './components/HeaderVue.vue'
import MainLogisticServices from './components/MainLogisticServices.vue'
import MainCompanySection from './components/MainCompanySection.vue'
import MainLogoSection from './components/MainLogoSection.vue'
import MainNewsSection from './components/MainNewsSection.vue'
export default {
  components: {
    HeaderVue,
    MainLogisticServices,
    MainCompanySection,
    MainLogoSection,
    MainNewsSection
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
    <MainNewsSection />
  </main>

</template>

<style lang="scss">
@use "./styles/general.scss" as *;
</style>
