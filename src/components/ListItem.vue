<template>
    <div>
        <ul class="news-list">
            <li class="post" v-for="item in props.data" v-bind:key="item">
                <div class="points">
                    {{ item.points || "0"}}
                </div>
                <div>
                    <p class="news-title">
                        <slot name="title" :item="item"></slot>
                    </p>
                    <small class="link-text">
                        <slot name="info" :item="item"></slot>
                    </small>
                </div>
            </li>
        </ul>
    </div>
</template>

<script setup>

import { defineProps } from 'vue';

const props = defineProps({
    data: Array
});

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