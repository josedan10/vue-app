<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
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

  &.dashboard-btn {
    min-width: 100px;
    height: 40px;
    padding: 0 2rem;
    margin-right: 1rem;
    background: linear-gradient(to left, $primary-purple, $primary-blue);
    border-radius: 4px;
    font-weight: bold;
    color: $white;
    box-shadow: 0 5px 10px rgba(0, 0, 0, .2);

    &.danger {
      background: $red !important;
    }

    &:disabled {
      background: #cecece !important;
    }
  }
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
  min-height: 100vh;
  color: $black;

  & > div {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  @media only screen and (max-width: 900px) {
    padding: 0 2rem;
  }
}
</style>
