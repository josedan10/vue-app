<template>
    <div class="users-container">
        <h2 class="section-title">Users</h2>

        <table v-if="!isLoading" class="users-list">
            <thead>
                <th>Username</th>
                <th>Name</th>
                <th>Email</th>
                <th>Address</th>
                <th>Phone</th>
                <th>Actions</th>
            </thead>
            <tbody>
                <tr v-for="user in usersList" :key="'user-'+ user.id">
                    <td>{{user.username}}</td>
                    <td>{{user.name}}</td>
                    <td>{{user.email}}</td>
                    <td>{{}}</td>
                    <td>{{user.phone}}</td>
                    <td>
                        <router-link :to="`/users/${user.id}`">Show</router-link>
                        <button>Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>

        <h4 v-else>Loading users</h4>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import UserHelper from '../../helpers/user'

export default {
    name: 'UsersList',
    extends: UserHelper,
    data: () => ({
        isLoading: true,
    }),
    computed: {
        ...mapGetters([
            'usersList'
        ])
    },
    methods: {
        ...mapActions([
            'getUsers'
        ])
    },
    mounted () {
        const vm = this
       
        vm.getUsers().then(() => {
            setTimeout(() => vm.isLoading = false, 500)
        })
    }
}
</script>


<style lang="scss">
    @import '../../scss/_variables';
    .users-list {
        border-collapse: collapse;
        
        td, th {
            border: 1px solid #ddd;
            padding: 0.5rem;
        }

        th {
            background-color: $primary-blue;
            color: $white;
        }
    }
</style>