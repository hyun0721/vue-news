<template>
    <div>
        <section>
            <!-- 질문 상세 정보 -->
            <div>
                <div>
                    User
                </div>
                <div>
                    {{ userInfo.id }}
                </div>
                <div>
                    {{ userInfo.created }}
                </div>
            </div>
        </section>

        <section>
            <!-- 질문 댓글-->
            <!-- <div v-html="fetchedItem.content"></div> -->
        </section>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters({
            userInfo : 'fetchedUser'
        })
    },
}
</script>

<style scoped>
    
</style>