<template lang="">
    <div>
        <ListItem></ListItem>
    </div>
</template>

<script>
import ListItem from '../components/ListItem.vue';

export default {
    components: {
        ListItem,
    },
    created() {
        this.emitter.emit('startSpinner', {});
        
        setTimeout(() => {
            this.$store.dispatch('FETCH_NEWS');
            this.emitter.emit('finishSpinner', {});
        }, 3000);
    },
}
</script>

<style>
</style>