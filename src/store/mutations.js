export default {
    add(state, payload) {
        state.number += payload
    },
    setToken(state, token) {
        state.token = token
    }
}
