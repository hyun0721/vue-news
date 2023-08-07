<template lang="">
    <p v-for="item in this.$store.state.jobList" v-bind:key="item">
        <a :href="item.url">
            {{ item.title }}
        </a>
        <small>{{ item.time_ago }} {{ item.domain }}</small>
    </p>
</template>

<script>

export default {
    created() {
        this.$store.dispatch('FETCH_JOBS');
    }    
}

</script>

<style lang="">
    
</style>