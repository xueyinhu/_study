import { createApp } from 'vue'
import Vuex from 'vuex'

createApp().use(Vuex)

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
        console.log(state.sum);
    }
}

export default new Vuex.Store({
    state,
    actions,
    mutations
})
