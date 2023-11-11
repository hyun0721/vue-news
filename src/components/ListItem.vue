<template>
    <div>
        <ul class="news-list">
            <li class="post" v-for="item in listItems" v-bind:key="item">
                <div class="points">
                    {{ item.points || "0" }}
                </div>
                <div>
                    <p class="news-title">
                        <template v-if="item.domain">
                            <a v-bind:href="item.url" >
                                {{ item.title }}
                            </a>
                        </template>
                        <template v-else>
                            <router-link :to="`item/${item.id}`"> 
                                {{ item.title }}
                            </router-link>
                        </template>
                    </p>
                    <small class="link-text">
                        {{ item.time_ago }} by 
                        <router-link
                            class="link-text"
                            :to="`user/${item.user}`"
                            v-if="item.user"
                            > 
                            {{ item.user }} 
                        </router-link>
                        <a :href="item.url" v-else>
                            {{  item.domain }}
                        </a>
                    </small>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    created() {
        const name = this.$route.name;
        let api = '';
        
        switch(name){

            case 'news' : api = 'FETCH_NEWS';
                break;
            case 'ask' : api = 'FETCH_ASK';
                break;
            case 'jobs' : api = 'FETCH_JOBS';
                break;
        }

        this.$store.dispatch(api);
    },

    computed: {
        listItems() {
            const name = this.$route.name;
        
            switch(name){

                case 'news' : return this.$store.state.news;
                case 'ask'  : return this.$store.state.askList;
                case 'jobs' : return this.$store.state.jobList;
            }

            return '';
        }
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