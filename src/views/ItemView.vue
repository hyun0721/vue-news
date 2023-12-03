<template>
    <div>
        <section>
            <UserProfile :info="fetchedItem">
                <template #username>
                    {{ username }}
                    <!-- <router-link :to="`/myProject/user/${fetchedItem.user}`"> -->
                    <router-link :to="{name: 'user', params: {id: fetchedItem.user} }">
                        {{ fetchedItem.user }}
                    </router-link> 
                </template>
                <template #time> {{ 'Posted ' + fetchedItem.time_ago }}</template>
            </UserProfile>
        </section>

        <section>
            <h2> {{ fetchedItem.title }}</h2>
        </section>

        <section>
            <!-- 질문 댓글-->
            <div v-html="fetchedItem.content"></div>
        </section>
    </div>
</template>

<script>
import UserProfile from '@/components/UserProfile.vue';
import { mapGetters } from 'vuex';

export default {

    components: {
        UserProfile
    },

    computed: {
        ...mapGetters([
            'fetchedItem'
        ]),
    },

    created() {
        const itemId = this.$route.params.id;

        this.$store.dispatch('FETCH_ITEM', itemId);
    }
}
</script>

<style scoped>
    
</style>