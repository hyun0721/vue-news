<template lang="">
    <div v-for="item in jobsList" v-bind:key="item">
        {{ item.title }}
    </div>
</template>
<script>

import { fetchJobsList } from '@/api/index.js'

export default {

    data() {
        return {
            jobsList: []
        }
    },

    created() {
        const vm = this;

        fetchJobsList()
            .then( res => vm.jobsList = res.data)
            .catch( err => console.log(err) )
    }
    
}
</script>
<style lang="">
    
</style>