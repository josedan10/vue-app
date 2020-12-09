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
                    class="dashboard-btn danger"
                    @click="onDeleteUser"
                >Delete</button>
            </div>
        </div>
        <form
            v-else-if="editUser"
        >
            <div class="col">
                <label>Username: </label>
                <input id="username" class="form-input" @change="onChangeInput($event)" placeholder="Username" v-model="editUserData.username" />
                <span class="error">{{ validationErrors.username }}</span>
            </div>
            <div class="col">
                <label>Name: </label>
                <input id="name" class="form-input" @change="onChangeInput($event)" placeholder="Name" v-model="editUserData.name" />
                <span class="error">{{ validationErrors.name }}</span>
            </div>
            <div class="col">
                <label>Email: </label>
                <input id="email" class="form-input" @change="onChangeInput($event)" placeholder="Email" v-model="editUserData.email" />
                <span class="error">{{ validationErrors.email }}</span>
            </div>
            <div class="col">
                <label>Phone: </label>
                <input id="phone" class="form-input" @change="onChangeInput($event)" placeholder="Phone" v-model="editUserData.phone" />
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
                <button type="submit" @click="onSubmitEdit" class="dashboard-btn" :disabled="!notEmptyFields">Save User</button>
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
        editUserData: {},
        validationErrors: {
            username: '',
            name: '',
            email: '',
            phone: '',
        }
    }),
    computed: {
        notEmptyFields: function () {
            return (
                this.editUserData.username &&
                this.editUserData.email &&
                this.editUserData.name &&
                this.editUserData.phone
            )
        }
    },
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

            if (this.notEmptyFields) {
                vm.updateUser(vm.editUserData)
                    .then((updatedUser) => {
                        vm.editUser = false
                        vm.user = {...updatedUser}
                    })
            }
        },
        onDeleteUser () {
            const vm = this

            vm.deleteUser(vm.user.id)
                .then(() => vm.$router.push('/users'))
                .catch(err => console.log(err))
        },
        onChangeInput(e) {
            // const vm = this
            const inputName = e.target.id
            const { value } = e.target

            // Check type of validation
            switch (inputName) {
                case 'username':
                    this.validateUsername(value)
                    break;

                case 'name':
                    this.validateName(value)
                    break;

                case 'email':
                    this.validateEmail(value)
                    break;

                default:
                    break;
            }

        },

        // Validations
        validateUsername (username) {
            // username cannot be empty
            this.validationErrors.username = username.trim() ?  '' : 'Please fill this field'
        },
        validateName (name) {
            // name cannot be empty
            if (!name.trim()) {
                this.validationErrors.name = 'Please fill this field'
                return
            } else if (!/\w/.test(name.trim())) {
                this.validationErrors.name = 'Only letters and spaces are allowed'
                return
            } else {
                this.validationErrors.name = ''
            }
        },
        validateEmail (email) {
            const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

            if (!emailRegex.test(email)) {
                this.validationErrors.email = 'Please insert a valid email'
            } else {
                this.validationErrors.email = ''
            }
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

    .error {
        color: $red;
    }

    .actions {
        margin-top: 2rem;
    }
</style>