<template lang="">
    <p v-for="item in this.$store.state.news" v-bind:key="item">
        <a v-bind:href="item.url" >
            {{ item.title }}
        </a>
        <small>
            {{ item.time_ago }} by 
            <router-link :to="{ name: 'user', params: { id: item.user } }"> 
                {{ item.user }} 
            </router-link>
        </small>
    </p>
</template>

<script>
export default {
    created() {
        this.$store.dispatch('FETCH_NEWS');
    }
}
</script>

<style scoped>
    
</style>