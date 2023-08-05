<template lang="">
    <div class="header">
        <router-link :to="{ name : 'news' }" >News</router-link> |
        <router-link :to="{ name : 'ask' }" >Ask</router-link> |
        <router-link :to="{ name : 'jobs' }" >Jobs</router-link>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .header{
        color:white;
        background-color: #42b883;
        display: flex;
        padding: 8px;
    }

    .header .router-link-exact-active{
        color: #35495e;
    }

    .header a{
        color:white;
    }
</style>