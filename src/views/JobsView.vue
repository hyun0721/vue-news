<template lang="">
    <div>
        <ListItem :data='fetchedJobs'>
            <template #title="{ item }">
                <a v-bind:href="item.url" >
                    {{ item.title }}
                </a>
            </template>
            <template #info="{ item }">
                {{ item.time_ago }} by {{ item.domain }}
            </template>
        </ListItem>
    </div>
</template>

<script>
import ListItem from '@/components/ListItem.vue';
import { mapGetters } from 'vuex';

export default {

    components: {
        ListItem
    },

    computed: {
        ...mapGetters([
            'fetchedJobs'
        ])
    },

    created() {
        this.$store.dispatch('FETCH_JOBS');
    }
}

</script>

<style>
</style>