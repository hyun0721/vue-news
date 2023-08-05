<template lang="">
    <div v-for="item in this.$store.state.news" v-bind:key="item">
        {{ item.title }}
    </div>
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