<template lang="">
    <div v-for="item in newsList" v-bind:key="item">
        {{ item.title }}
    </div>
</template>

<script>

import { fetchNewsList } from '@/api/index.js';

export default {

    data() {
        return {
            newsList: []
        }
    },

    created() {

        const vm = this;

        fetchNewsList()
            .then((res)=> { vm.newsList = res.data })
            .catch((error)=> console.log(error))
            ;
    }
}
</script>

<style scoped>
    
</style>