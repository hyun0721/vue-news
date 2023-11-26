<template lang="">
    <div>
        <!-- <p>name : {{ userInfo.id }}</p>
        <p>karma : {{ userInfo.karma }}</p>
        <p>created : {{ userInfo.created }}</p> -->
        <UserProfile></UserProfile>
    </div>
</template>

<script>

import UserProfile from '../components/UserProfile.vue'
// import { mapGetters } from 'vuex';

export default {

    components: {
        UserProfile
    },

    // computed: {
    //     ...mapGetters({
    //         userInfo : 'fetchedUser'
    //     })
    // },

    created() {
        this.$store.dispatch('FETCH_USER', this.$route.params.id);
    },

}

</script>

<style lang="">
    
</style>