export default {
    /**
     * Get all users
     * 
     * @param {VuexContext} context
     * 
     * @return {Array} users list
     */
    async getUsers ({commit}) {
        return new Promise((resolve, reject) => {
            fetch('https://jsonplaceholder.typicode.com/users')
                .then(response => response.json())
                .then(json => {
                    commit('getUsers', json)
                    resolve(json)
                })
                .catch(err => {
                    console.error('[UsersList Error] Error getting users')
                    reject(err)
                })
        })
    },
    /**
     * Get the user data using id
     * 
     * @param {VuexContext} context
     * @param {Integer} id
     * 
     * @return {Promise} after resolve return the user
     */
    async getUserById ({commit}, id) {
        return new Promise((resolve, reject) => {
            fetch('https://jsonplaceholder.typicode.com/users/' + id)
                .then(response => response.json())
                .then(json => {
                    commit('getUserById', json)
                    resolve(json)
                })
                .catch(err => {
                    console.error('[User Error] Error getting user using id: ' + id)
                    reject(err)
                })
        })
    },
    /**
     * Update user passing user data
     * 
     * @param {VuexContext} context
     * @param {Object} user
     * 
     * @return {Promise} updated user
     */
    async updateUser ({commit}, user) {
        return new Promise((resolve, reject) => {
            fetch('https://jsonplaceholder.typicode.com/users/' + user.id,
                {
                    method: 'PUT',
                    body: JSON.stringify(user),
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    }
                }
            )
                .then(response => response.json())
                .then(json => {
                    commit('updateUser', json)
                    resolve(json)
                })
                .catch(err => {
                    console.error('[User Error] Error updating user using id: ' + user.id)
                    reject(err)
                })
        })
    },
    /**
     * Delete user using id
     *
     * @param {VuexContext} context
     * @param {Integer} id
     * 
     * @return {Object}
     */
    async deleteUser (context, id) {
        return new Promise((resolve, reject) => {
            fetch('https://jsonplaceholder.typicode.com/users/' + id, {
                method: 'DELETE'
            })
                .then(response => response.json())
                .then(json => {
                    resolve(json)
                })
                .catch(err => {
                    console.error('[User Error] Error deleting user using id: ' + id)
                    reject(err)
                })
        })
    }
}