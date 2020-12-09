<template>
  <div id="app">
    <HeaderComponent></HeaderComponent>
    <PresentationComponent></PresentationComponent>
  </div>
</template>

<script>
import PresentationComponent from './components/PresentationComponent.vue'
import HeaderComponent from './components/HeaderComponent.vue'

export default {
  name: 'App',
  components: {
    PresentationComponent,
    HeaderComponent
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

  @media only screen and (max-width: 900px) {
    padding: 0 2rem;
  }
}
</style>
