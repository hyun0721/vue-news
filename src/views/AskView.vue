<template lang="">
    <div>
        <ul class="news-list">
            <li class="post" v-for="item in fetchedAsk" v-bind:key="item">
                <div class="points">
                    {{ item.points || 0 }}
                </div>
                <div>
                    <p class="news-title">
                        <router-link :to="{ name: 'item', params: { id: item.id } }"> 
                            {{ item.title }}
                        </router-link>
                    </p>
                    <small class="link-text">
                        {{ item.time_ago }} by {{ item.user }}
                    </small>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {

    computed: {
        ...mapGetters([
            'fetchedAsk'
        ])
    },

    created() {
        this.$store.dispatch('FETCH_ASK');
    }
}
</script>

<style scoped>

a {
    color: #34495e;
    text-decoration: none;  /* 라우터링크의 텍스트 밑줄 효과제거 */
}

a:hover {
    color: #42b883;
    text-decoration: underline;
}

a.router-link-exact-active {
    text-decoration: underline;
}

.news-list {
    margin: 0;
    padding: 0;
}

.post {
    list-style: none;       /* li 태그 머리글 표시 제거 */
    display: flex;
    align-items: center;
    border-bottom: 1px solid #eee;
}

.points {
    width: 80px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #42b883;
}

.news-title {
    margin: 0px;
}

.link-text {
    color: gray;
}
    
</style>