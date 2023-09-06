import {createStore} from 'vuex'

const state = {
    sum: 0
}
const actions = {
    increment(context, value) {
        context.commit('INCREMENT', value)
    }
}
const mutations = {
    INCREMENT(state, value) {
        state.sum += value
    }
}

export default createStore({
    state,
    actions,
    mutations
})
