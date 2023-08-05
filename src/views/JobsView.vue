<template lang="">
    <div v-for="item in this.$store.state.jobList" v-bind:key="item">
        {{ item.title }}
    </div>
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