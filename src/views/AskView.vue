<template lang="">
    <div v-for="item in askItems" v-bind:key="item">
        {{ item.title }}
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {

    computed: {
        ...mapGetters({
            askItems : 'fetchedAsk'
        })
    },

    created() {
        this.$store.dispatch('FETCH_ASK');
    }
}
</script>

<style lang="">
    
</style>