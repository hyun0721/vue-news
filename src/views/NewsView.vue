<template lang="">
    <p v-for="item in this.$store.state.news" v-bind:key="item">
        <a v-bind:href="item.url" >
            {{ item.title }}
        </a>
        <small>
            {{  item.time_ago }} by 
            <!-- <router-link :to="{ name: 'user', params: { id: item.user } }">              -->
                {{ item.user }} 
            <!-- </router-link> -->
        </small>
    </p>
</template>

<script>
export default {

    /**
     * Store의 dispatch가 반영되어, 반복인자인 state.news를 얻는 것 보다
     * 컴포넌트 생성순서가 먼저진행되었기 때문?
     * 
     */
    created() {
        this.$store.dispatch('FETCH_NEWS');
    },

}
</script>

<style scoped>
    
</style>