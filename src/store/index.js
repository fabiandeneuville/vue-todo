import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        toDoList: []
    },
    mutations: {
        ADD_TO_DO(state, toDo){
            state.toDoList.push(toDo)
        },
        REMOVE_TO_DO(state, index){
            state.toDoList.splice(index, 1)
        }
    }
})