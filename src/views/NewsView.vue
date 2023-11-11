<template lang="">
    <div>
        <ListItem :data=fetchedNews>
            <template #title="{ item }">
                <a v-bind:href="item.url" >
                    {{ item.title }}
                </a>
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
        ListItem,
    },

    computed: {
        ...mapGetters ([
            'fetchedNews'
        ])
    },

    created() {
        this.$store.dispatch('FETCH_NEWS');
    }
}
</script>

<style>
</style>