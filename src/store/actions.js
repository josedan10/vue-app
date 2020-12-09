export default {
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
    }
}