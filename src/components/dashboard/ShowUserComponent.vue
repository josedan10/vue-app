<template>
    <div class="user-profile">
        <back-component></back-component>
        <h2 class="section-title">User Profile</h2>

        <!-- User template and form to edit -->
        <div v-if="!isLoading && !editUser" class="user-data">
            <div class="col">
                <b>Username: </b>{{ user.username }}
            </div>
            <div class="col">
                <b>Name: </b>{{ user.name }}
            </div>
            <div class="col">
                <b>Email: </b>{{ user.email }}
            </div>
            <div class="col">
                <b>Phone: </b>{{ user.phone }}
            </div>
            <div class="col">
                <b>Address: </b>{{ addressToString(user.address) }}
            </div>
            <div class="actions">
                <button
                    class="dashboard-btn"
                    @click="handleEdit"
                >Edit</button>
                <button
                    class="dashboard-btn"
                    @click="onDeleteUser"
                >Delete</button>
            </div>
        </div>
        <form
            v-else-if="editUser"
        >
            <div class="col">
                <label>Username: </label>
                <input class="form-input" placeholder="Username" v-model="editUserData.username" />
            </div>
            <div class="col">
                <label>Name: </label>
                <input class="form-input" placeholder="Name" v-model="editUserData.name" />
            </div>
            <div class="col">
                <label>Email: </label>
                <input class="form-input" placeholder="Email" v-model="editUserData.email" />
            </div>
            <div class="col">
                <label>Phone: </label>
                <input class="form-input" placeholder="Phone" v-model="editUserData.phone" />
            </div>
            <div class="col">
                <label>Address: </label>
                <div class="input-group">
                    <input class="form-input" placeholder="Street" v-model="editUserData.address.street" />
                    <input class="form-input" placeholder="Suite" v-model="editUserData.address.suite" />
                    <input class="form-input" placeholder="City" v-model="editUserData.address.city" />
                </div>
            </div>

            <div class="actions">
                <button type="submit" @click="onSubmitEdit" class="dashboard-btn">Save User</button>
                <button type="reset" @click="editUser = false" class="dashboard-btn">Discard Changes </button>
            </div>
        </form>
        <div v-else>Loading User...</div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
import UserHelper from '../../helpers/user'
import BackComponent from './BackComponent'

export default {
    name: 'ShowUser',
    extends: UserHelper,
    components: {
        BackComponent
    },
    data: () => ({
        user: null, 
        isLoading: true,
        editUser: false,
        editUserData: {}
    }),
    methods: {
        ...mapActions([
            'getUserById',
            'updateUser',
            'deleteUser'
        ]),
        handleEdit() {
            this.editUserData = {...this.user}
            this.editUser = true
        },
        onSubmitEdit () {
            const vm = this

            vm.updateUser(vm.editUserData)
                .then((updatedUser) => {
                    vm.editUser = false
                    vm.user = {...updatedUser}
                })
        },
        onDeleteUser () {
            const vm = this

            vm.deleteUser(vm.user.id)
                .then(() => vm.$router.push('/users'))
                .catch(err => console.log(err))
        }
    },
    mounted () {
        const vm = this

        vm.getUserById(vm.$route.params.id)
            .then((user) => {
                vm.user = user
                setTimeout(() => vm.isLoading = false, 500)
            })
            .catch(err => console.log(err))
    }
}
</script>

<style lang="scss">
    @import '../../scss/_variables';

    .user-profile {

        .user-data, form {
            display: flex;
            flex-wrap: wrap;
            max-width: 900px;
            
            .col {
                padding: 2rem;
                width: 50%;
            }
        }
    }

    .form-input {
        border-radius: 6px;
        border: 1.5px solid $black;
        padding: 1rem 1.2rem;
        color: $black;
        transition: all ease .3s;
        margin-left: 10px;

        &:focus {
            transition: all ease .3s;
            border: 1.5px solid $primary-purple;
            color: $primary-purple;
            outline: none;
        }
    }

    .input-group {
        .form-input {
            margin: 1rem 0;
        }
    }

    .actions {
        margin-top: 2rem;
    }
</style>