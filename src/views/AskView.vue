<template lang="">
    <p v-for="item in askItems" v-bind:key="item">
        <a :href="item.url" >
            {{ item.title }}
        </a>
        <small> 
            {{  item.time_ago }} 
            <router-link :to="{ name: 'item', params: { id: item.id } }">
                {{ item.user }}
            </router-link>
        </small>
    </p>
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