import user from "../helpers/user"

export default {
    getUsers (state, users) {
        state.usersList = [...users]    
    },
    getUserById (state, user) {
        return user
    },
    /**
     * Find the user by id and store the updated user data
     *
     * @param {VuexState} state
     * @param {Object} updatedUser
     */
    updateUser (state, updatedUser) {
        const index = state.usersList.findIndex(user => user.id === updatedUser.id)
        let usersList = [...state.usersList]
        usersList[index] = user
        
        state.usersList = [...usersList]
    }
}