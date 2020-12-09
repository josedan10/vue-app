<template>
    <header
        class="app-bar"
    >
        <img src="../assets/visa-logo.svg" alt="" class="logo">
        <nav class="nav-bar">
            <ul class="nav-menu">
                <li class="nav-menu__item"><a class="nav-menu__item__link" href="#">Benefits</a></li>
                <li class="nav-menu__item"><a class="nav-menu__item__link" href="#">Globalization</a></li>
                <li class="nav-menu__item"><a class="nav-menu__item__link" href="#">Get your card</a></li>
            </ul>
        </nav>

        <div class="login-wrapper">
            <button class="btn">Register</button>
            <button class="btn">Login</button>
        </div>
    </header>
</template>

<script>
export default {
    data: () => ({

    })
}
</script>

<style lang="scss">
    @import '../scss/_variables';

    .app-bar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100vw;
        max-width: 1500px;
        padding: 0 2rem;
        position: absolute;
        top: 0;
        z-index: 3;
        color: $white;

        .logo {
            width: 85px;
        }

        .nav-bar {
            .nav-menu {
                display: flex;
                list-style: none;                

                &__item {
                    margin: 0 20px;

                    &:first-child {
                        margin-left: 0;
                    }

                    &:last-child {
                        margin-right: 0;
                    }

                    &__link {
                        font-size: 1rem;
                        text-decoration: none;
                        color: $white;
                    }
                }
            }
        }

        .login-wrapper {
            display: flex;
            justify-content: center;

            .btn {
                margin: 0 15px;
                background: none;
                border: 0;
                color: $white;
                text-decoration: underline;
            }
        }
    }
</style>