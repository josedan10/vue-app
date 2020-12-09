<template>
  <div id="app">
    <HeaderComponent></HeaderComponent>
    <PresentationComponent></PresentationComponent>
    <BenefitsComponent></BenefitsComponent>
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue'
import PresentationComponent from './components/PresentationComponent.vue'
import BenefitsComponent from './components/BenefitsComponent.vue'

export default {
  name: 'App',
  components: {
    HeaderComponent,
    PresentationComponent,
    BenefitsComponent
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
