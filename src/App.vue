<script >
import HeaderVue from './components/HeaderVue.vue'
import MainLogisticServices from './components/MainLogisticServices.vue'
import MainCompanySection from './components/MainCompanySection.vue'
import MainLogoSection from './components/MainLogoSection.vue'
import MainNewsSection from './components/MainNewsSection.vue'
import MainNewsLetterSection from './components/MainNewsLetterSection.vue'
import MainMessageSection from './components/MainMessageSection.vue'
import FooterVue from './components/FooterVue.vue'
export default {
  components: {
    HeaderVue,
    MainLogisticServices,
    MainCompanySection,
    MainLogoSection,
    MainNewsSection,
    MainNewsLetterSection,
    MainMessageSection,
    FooterVue
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
    <MainNewsLetterSection />
    <MainMessageSection />
  </main>

  <footer>
    <FooterVue />
  </footer>

</template>

<style lang="scss">
@use "./styles/general.scss" as *;
</style>
