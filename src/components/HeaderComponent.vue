<template>
    <header
        class="app-bar"
    >
        <img src="../assets/visa-logo.svg" alt="" class="logo">

        <div class="menu-wrapper" :class="{open: menuIsOpen}">
            <nav class="nav-bar">
                <ul class="nav-menu">
                    <li @click="toggleMenu" class="nav-menu__item"><a class="nav-menu__item__link" href="#">Benefits</a></li>
                    <li @click="toggleMenu" class="nav-menu__item"><a class="nav-menu__item__link" href="#">Globalization</a></li>
                    <li @click="toggleMenu" class="nav-menu__item"><a class="nav-menu__item__link" href="#">Get your card</a></li>
                </ul>
            </nav>

            <div class="login-wrapper">
                <button @click="toggleMenu" class="btn">Register</button>
                <router-link to="/users" class="btn">Login</router-link>
            </div>
        </div>

        <button @click="toggleMenu" class="menu-icon">
            <img v-if="!menuIsOpen" src="../assets/menu-icon.svg" alt="">
            <img v-else src="../assets/close-icon.svg" alt="">
        </button>
    </header>
</template>

<script>
export default {
    data: () => ({
        menuIsOpen: false,
    }),
    methods: {
        toggleMenu () {
            this.menuIsOpen = !this.menuIsOpen
        }
    }
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

        .menu-wrapper {
            display: flex;
            justify-content: space-between;
            width: 70%;

            @media only screen and (max-width: 900px) {
                width: 100%;
                flex-direction: column;
                max-width: 300px;
                position: absolute;
                background-color: rgba($color: $white, $alpha: 0.9);
                color: $black;
                right: 0;
                top: 85.4px;
                border-radius: 0 0 4px 4px;
                height: 0;
                transition: height ease 0.3s;
                overflow: hidden;

                &.open {
                    padding: 2rem;
                    height: 400px;
                    box-shadow: 0 10px 10px rgba(0, 0, 0, .1);
                    transition: height ease 0.3s;
                    
                }
            }
        }

        .logo {
            width: 85px;
        }

        .nav-bar {
            .nav-menu {
                display: flex;
                list-style: none;                

                &__item {
                    margin: 0 20px;
                    display: flex;
                    justify-content: center;

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

            @media only screen and (max-width: 900px){
                .nav-menu {
                    flex-direction: column;

                    &__item {
                        margin: 10px 0;

                        &__link {
                            display: block;
                            padding: 1rem;
                            color: $black;
                        }
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
                font-size: 1rem;
                color: $white;
                text-decoration: underline;
            }

            @media only screen and (max-width: 900px){
                .btn {
                    color: $primary-purple;
                }
            }
        }

        .menu-icon {
            display: none;
        }

        @media only screen and (max-width: 900px) {
            position: fixed;
            background: linear-gradient(to right, $primary-purple, $primary-blue);
            box-shadow: 0 10px 10px rgba(0, 0, 0, .1);

            .menu-icon {
                display: block;
                background: none;

                img {
                    height: 40px;
                }
            }
        }
    }
</style>