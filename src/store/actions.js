export default {
    asyncAdd({ commit, state }, payload) {
        setTimeout(() => {
            commit('add', payload)
        }, 3000)
    }
}
