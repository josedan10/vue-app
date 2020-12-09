<template>
    <div class="back">
        <button class="dashboard-btn" @click="back">Back</button>
        <button class="dashboard-btn" @click="home">Home</button>
    </div>
</template>

<script>
export default {
    name: 'BackComponent',
    methods: {
        back () {
            this.$router.go(-1)
        },
        home () {
            this.$router.push('/')
        }
    }
}
</script>

<style lang="scss">
    @import '../../scss/_variables';

    .back {
        position: absolute;
        top: 1rem;
        left: 1rem;

        button {

        }
    }
</style>