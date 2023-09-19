<template lang="">
    <p v-for="item in fetchedAsk" v-bind:key="item">
        <!-- <a :href="item.url" >
            {{ item.title }}
        </a> -->
        <router-link :to="{ name: 'item', params: { id: item.id } }"> 
            {{ item.title }}
        </router-link>
        <small>
            {{ item.time_ago }} 
            by {{ item.user }}
        </small>
    </p>
</template>

<script>
import { mapGetters } from 'vuex';

export default {

    computed: {
        ...mapGetters([
            'fetchedAsk'
        ])
    },

    created() {
        this.$store.dispatch('FETCH_ASK');
    }
}
</script>

<style lang="">
    
</style>