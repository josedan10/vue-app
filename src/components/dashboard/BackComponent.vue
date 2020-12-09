<template>
    <div class="back">
        <button class="dashboard-btn" @click="back">Back</button>
    </div>
</template>

<script>
export default {
    name: 'BackComponent',
    methods: {
        back () {
            this.$router.go(-1)
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