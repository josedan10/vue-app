<template>
    <div>
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
                    @click="editUser = true"
                >Editar</button>
                <button class="dashboard-btn">Eliminar</button>
            </div>
        </div>
        <form
            v-else-if="editUser"
        >
            <div class="col">
                <label>Username: </label>
                <input :value="user.username" />
            </div>
            <div class="col">
                <label>Name: </label>
                <input :value="user.name" />
            </div>
            <div class="col">
                <label>Email: </label>
                <input :value="user.email" />
            </div>
            <div class="col">
                <label>Phone: </label>
                <input :value="user.phone" />
            </div>
            <div class="col">
                <label>Address: </label>
                <input :value="user.address.street" />
                <input :value="user.address.suite" />
                <input :value="user.address.city" />
            </div>

            <div class="actions">
                <button type="submit" class="dashboard-btn">Save User</button>
                <button type="reset" class="dashboard-btn">Discard Changes </button>
            </div>
        </form>
        <div v-else>Loading User...</div>
    </div>
</template>

<script>
import UserHelper from '../../helpers/user'

export default {
    name: 'ShowUser',
    extends: UserHelper,
    data: () => ({
        user: null,
        isLoading: true,
        editUser: false,
        editUserData: {}
    }),
    methods: {

    },
    mounted () {
        const vm = this

        fetch('https://jsonplaceholder.typicode.com/users/' + vm.$route.params.id)
            .then(response => response.json())
            .then(json => {
                vm.user = {...json}
                setTimeout(() => vm.isLoading = false, 500)
            })
    }
}
</script>