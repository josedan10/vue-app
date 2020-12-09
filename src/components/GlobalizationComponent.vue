<template>
    <div
        class="globalization-container"
    >
        <div class="container">

            <div class="content-wrapper">
                <h2 class="section-title">Purchase Anywhere</h2>
                <p class="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint atque deserunt quasi dolores iure necessitatibus quae eos mollitia voluptatibus officia saepe ullam, a velit ipsum distinctio? Laudantium libero nostrum cupiditate!</p>
                <button class="btn">Purchase Now</button>
            </div>
            <img src="../assets/punto-de-venta.svg" alt="" class="globalization-img">
        </div>
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

    .globalization-container .container {
        display: flex;
        justify-content: space-around;
        align-items: center;

        .content-wrapper,
        .globalization-img {
            width: 48%;
            max-width: 400px;
        }

        .content-wrapper {
            .content {
                line-height: 2;
            }

            .btn {
                display: flex;
                justify-content: center;
                align-items: center;
                background: linear-gradient(to left, $primary-purple, $primary-blue);
                color: $white;
                font-size: 1.1rem;
                font-weight: bold;
                height: 60px;
                padding: 0 2rem;
                border-radius: 4px;
                margin-top: 20px;
                box-shadow: 0px 5px 10px rgba(0, 0, 0, .3);
            }
        }

        @media only screen and (max-width: 900px) {
            flex-wrap: wrap;

            .content-wrapper {
                width: 100%;
                max-width: 100%;

                .section-title,
                .content {
                    text-align: center;
                }

                .btn {
                    margin: 20px auto 70px;
                }
            }

            .globalization-img {
                width: 80%;
            }
        }
    }
</style>