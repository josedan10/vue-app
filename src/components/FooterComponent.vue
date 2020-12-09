<template>
    <footer
        class="app-footer"
    >
        <div class="grid-container container">
            <div v-for="i in 4" :key="'footer-section-' + i" class="col">
                <h3 class="col__title">Section here</h3>
                <ul class="links-list">
                    <li class="list-item" ><a class="list-item__link" href="#">Link with long text</a></li>
                    <li class="list-item" ><a class="list-item__link" href="#">Link with long text</a></li>
                    <li class="list-item" ><a class="list-item__link" href="#">Link with long text</a></li>
                </ul>
            </div>
        </div>
        <div class="footer-social">
            <ul class="links-list">
                <li class="list-item">
                    <a class="list-item__link" href="https://facebook.com" target="_blank">
                        <img class="list-item__icon" src="../assets/facebook-icon.png" alt="">
                    </a>
                </li>
                <li class="list-item">
                    <a class="list-item__link" href="https://twitter.com" target="_blank">
                        <img class="list-item__icon" src="../assets/twitter-icon.png" alt="">
                    </a>
                </li>
                <li class="list-item">
                    <a class="list-item__link" href="https://instagram.com" target="_blank">
                        <img class="list-item__icon" src="../assets/instagram-icon.png" alt="">
                    </a>
                </li>
                <li class="list-item">
                    <a class="list-item__link" href="https://linkedin.com" target="_blank">
                        <img class="list-item__icon" src="../assets/linkedin-icon.png" alt="">
                    </a>
                </li>
            </ul>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer',
}
</script>

<style lang="scss">
    @import '../scss/_variables';
    .app-footer {
        margin-top: 10rem;
        padding: 2rem;
        background-image: url('../assets/visa-logo-gray.svg');
        background-position: 0% -20px;
        background-size: 500px;
        background-repeat: no-repeat;

        .grid-container {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            grid-gap: 30px;

            .col {
                grid-column: span 3;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                
                &__title {
                    margin-bottom: 1.5rem;
                }
            }

            @media only screen and (max-width: 900px) {
                .col {
                    grid-column: span 6;
                }
            }
        }


        .links-list {
            list-style: none;

            .list-item {
                margin: 10px 0;

                &__link {
                    text-decoration: none;
                    color: $black;
                }
            }
        }

        .footer-social {
            max-width: 350px;
            margin: 2rem auto 0;

            .links-list {
                display: flex;
                justify-content: space-between;

                .list-item {
                    &__icon {
                        width: 40px;
                    }
                }
            }
        }
    }
</style>