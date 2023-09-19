<template>
    <div>
        <p>{{ this.$store.state.itemInfo.title }}</p>
        <div>
            {{ this.$store.state.itemInfo.content }}
        </div>
    </div>
</template>

<script>
export default {
    created() {
        const itemId = this.$route.params.id;
        // console.log(itemId);

        this.$store.dispatch('FETCH_ITEM', itemId);
    }
}
</script>

<style scoped>
    
</style>