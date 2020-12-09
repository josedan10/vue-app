<template>
    <div
        class="benefits-container"
    >
        <div class="container">

            <h2 class="section-title">Benefits</h2>

            <p class="benefits-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eaque necessitatibus dolorem culpa commodi dignissimos maxime, tempore doloribus eligendi quis! Assumenda dicta, eos doloribus quos similique.</p>

            <div class="grid-container">
                <div v-for="i in 3" :key="'benefit-card-' + i" class="card">
                    <div class="card-img">
                        <img src="../assets/bombilla.png" alt="">
                    </div>
                    <h3 class="card-title">Benefit N°{{ i }}</h3>
                    <p class="card-content">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem, sint tenetur alias deleniti molestiae possimus totam! Iste in consequatur.
                    </p>
                </div>
            </div>

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
    .benefits {
        &-container {
            // Separate from previous container
            margin-top: 20rem;
            padding: 40px 0;
            margin-bottom: 5rem;
            width: 100vw;

            background-image: url('../assets/visa-logo-gray.svg');
            background-position: 80% -180px;
            background-size: 500px;
            background-repeat: no-repeat;

            .grid-container {
                margin: 100px auto 0;
                display: grid;
                grid-template-columns: repeat(6, 1fr);
                grid-gap: 70px;
            }

            .section-title {
                text-align: center;
            }

            .card {
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                width: 100%;
                padding: 1.5rem;
                background: $white;
                grid-column: span 2;
                border-radius: 1rem;

                transition: all .5s ease;

                &:hover {
                    transition: all .3s ease;
                    box-shadow: 0px 15px 50px rgba(0, 0, 0, 0.3);
                    transform: translateY(-30px);
                }

                &-img {
                    width: 90px;
                    margin-bottom: 2rem;
                    padding: 1rem;
                    border-radius: 50%;
                    background: linear-gradient(to left, $primary-purple, $primary-blue);

                    img {
                        width: 100%;
                    }
                }

                &-title {
                    text-align: center;
                    margin-bottom: 1.5rem;
                    color: $primary-purple;
                }

                &-content {
                    line-height: 2;
                    text-align: center;
                }

                @media only screen and (max-width: 900px) {
                    grid-column: span 3;
                }
                
                @media only screen and (max-width: 600px) {
                    grid-column: span 6;
                }
            }
        }

        &-content {
            line-height: 2;
            text-align: center;
            max-width: 900px;
            margin: 0 auto;
        }
    }
</style>