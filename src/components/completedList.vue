<template>
    
    <ul class="completedList">
        <li v-bind:key="index" v-for="(item, index) in getCompletedList">
            <completedItem
            v-bind:task="item"
            >
            </completedItem>
        </li>
    </ul>

</template>

<script>

import store from '../store/index'

import completedItem from './completedItem.vue'

export default {
    
    name: 'completedList',
    components: {
        completedItem
    },
    computed: {
        getCompletedList(){
            return store.state.completedList
        }
    }
}

</script>