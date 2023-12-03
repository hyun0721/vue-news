<template lang="">
    <div>
        <UserProfile :info="userInfo">
            <template #username> {{ userInfo.id }} </template>
            <template #time>
                <span>
                    {{ 'Joined ' + userInfo.created }}  , 
                </span>
            </template>
            <template #karma> {{ userInfo.karma }} </template>
        </UserProfile>
    </div>
</template>

<script>

import UserProfile from '../components/UserProfile.vue'
import { mapGetters } from 'vuex';

export default {

    components: {
        UserProfile
    },

    computed: {
        ...mapGetters({
            userInfo : 'fetchedUser'
        })
    },

    created() {
        this.$store.dispatch('FETCH_USER', this.$route.params.id);
    },

}

</script>

<style lang="">
    
</style>