<template>
    <div>
        <section>
            <!-- 질문 상세 정보 -->
            <div>
                <div>
                    User
                </div>
                <div>
                    <!-- <router-link :to="`/user/${fetchedItem.user}`"> -->
                    <router-link :to="{ name: 'user', params: { id: fetchedItem.user } }"> 
                        {{ fetchedItem.user }}
                    </router-link>
                    <div>
                        {{ fetchedItem.time_ago }}
                    </div>
                </div>
                <h2> {{ fetchedItem.title }}</h2>
            </div>
        </section>

        <section>
            <!-- 질문 댓글-->
            <div v-html="fetchedItem.content"></div>
        </section>
    </div>
</template>

<script>

import { mapGetters } from 'vuex';

export default {

    computed: {
        ...mapGetters([
            'fetchedItem'
        ]),
    },

    created() {
        const itemId = this.$route.params.id;
        // console.log(itemId);

        this.$store.dispatch('FETCH_ITEM', itemId);
    }
}
</script>

<style scoped>
    
</style>