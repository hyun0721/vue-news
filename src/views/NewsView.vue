<template lang="">
    <div v-for="item in this.$store.state.news" v-bind:key="item">
        {{ item.title }}
    </div>
</template>

<script>

// import { fetchNewsList } from '@/api/index.js';

export default {
    created() {
        this.$store.dispatch('FETCH_NEWS');
    }
}
</script>

<style scoped>
    
</style>