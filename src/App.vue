<template>
  <div id="app">
    <HeaderComponent></HeaderComponent>
    <PresentationComponent></PresentationComponent>
    <BenefitsComponent></BenefitsComponent>
    <GlobalizationComponent></GlobalizationComponent>
    <FooterComponent></FooterComponent>
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue'
import PresentationComponent from './components/PresentationComponent.vue'
import BenefitsComponent from './components/BenefitsComponent.vue'
import GlobalizationComponent from './components/GlobalizationComponent.vue'
import FooterComponent from './components/FooterComponent.vue'

export default {
  name: 'App',
  components: {
    HeaderComponent,
    PresentationComponent,
    BenefitsComponent,
    GlobalizationComponent,
    FooterComponent,
  }
}
</script>

<style lang="scss">
@import './scss/_variables';

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  width: 100vw;
  padding: 0 2rem;
}

.section-title {
  font-size: 2.4rem;
  margin-bottom: 1.8rem;
}

button {
  outline: none;
  border: 0;

  &:hover {
    cursor: pointer;
  }
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
  min-height: 100vh;
  
  display: flex;
  align-items: center;
  flex-direction: column;
  color: $black;

  @media only screen and (max-width: 900px) {
    padding: 0 2rem;
  }
}
</style>
