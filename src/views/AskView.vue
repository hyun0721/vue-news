<template lang="">
    <div v-for="item in askList" v-bind:key="item">
        {{ item.title }}
    </div>
</template>
<script>

import { fetchAskList } from '@/api/index.js'

export default {

    data() {
        return {
            askList: []
        }
    },

    created() {

        const vm = this;

        fetchAskList()
            .then(res => vm.askList = res.data)
            .catch(err => console.log(err));
    }

}
</script>
<style lang="">
    
</style>