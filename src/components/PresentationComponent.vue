<template>
    <div
        class="presentation-container"
    >
        <div class="presentation-background"></div>
        <div class="presentation-content-wrapper container">
            <h1 class="presentation-title">
                Be Smart Take Card
            </h1>

            <p class="presentation-content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore culpa molestias quos nesciunt ipsa optio eum architecto. Expedita ex, dolorem corporis nostrum repudiandae eum dolorum quos. Quas repellat minus incidunt.
            </p>

            <button class="presentation-action-btn">
                Get yours now!
            </button>
        </div>

        <img src="../assets/credit-card-1.png" alt="" class="credit-card">
    </div>
</template>

<script>
export default {
    data: () => ({

    })
}
</script>

<style lang="scss">
    @import '../scss/_variables';

    .presentation {
        &-container {
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 75vh;
            position: relative;

            .credit-card {
                position: absolute;
                z-index: 2;
                bottom: -200px;
                max-width: 500px;
                width: 46%;
    
                @media only screen and (max-width: 600px) {
                    width: 65%;
                    bottom: -150px;
                }
            }
        }

        &-background {
            position: absolute;
            z-index: -1;
            top: 0;
            height: 85vh;
            width: 150vw;
            background: linear-gradient(to left, $primary-purple, $primary-blue);
            border-radius: 0 0 50% 50%;
        }

        &-content-wrapper {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            color: $white;
            text-align: center;
        }

        &-title {
            font-size: 2.7rem;
            margin-bottom: 2rem;
        }

        &-content {
            font-size: 1rem;
            line-height: 2;
            max-width: 900px;
        }

        &-action-btn {
            display: flex;
            justify-content: center;
            align-items: center;

            border: 0;
            border-radius: 4px;
            width: 200px;
            height: 60px;
            margin-top: 2rem;

            font-size: 1.1rem;
            font-weight: bold;

            // colors
            background: $white;
            color: $primary-purple;
            box-shadow: 0px 5px 10px rgba(0, 0, 0, .1);
        }
    }
</style>