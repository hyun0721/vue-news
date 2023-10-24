<template lang="">
    <div>
        <ul class="news-list">
            <li class="post" v-for="item in this.$store.state.news" v-bind:key="item">
                <div class="points">
                    {{ item.points }}
                </div>
                <div>
                    <p class="news-title">
                        <a v-bind:href="item.url" >
                            {{ item.title }}
                        </a>
                    </p>
                    <small class="link-text">
                        {{ item.time_ago }} by 
                        <router-link class="link-text" :to="{ name: 'user', params: { id: item.user } }"> 
                            {{ item.user }} 
                        </router-link>
                    </small>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    created() {
        this.$store.dispatch('FETCH_NEWS');
    }
}
</script>

<style>

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