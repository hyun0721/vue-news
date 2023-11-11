<template lang="">
    <div>
        <ListItem :data=fetchedAsk>
            <template #title="{ item }">
                <router-link :to="`item/${item.id}`">
                    {{ item.title }}
                </router-link>
            </template>
            <template #info="{ item }">
                {{ item.time_ago }} by 
                <router-link :to="`user/${item.user}`">{{ item.user }}</router-link>
            </template>
        </ListItem>
    </div>
</template>

<script>
import ListItem from '../components/ListItem.vue'
import { mapGetters } from 'vuex';

export default {

    components: {
        ListItem
    },

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

<style>
</style>