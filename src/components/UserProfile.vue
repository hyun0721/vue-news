<template>
    <div>
        <section>
            <!-- 사용자정보 -->
            <div>
                <div>
                    [User Info]
                </div>
                <div>
                    <slot name="username"></slot>
                </div>
                <div class="time">
                    <slot name="time"></slot>
                    <slot name="karma"></slot>
                </div>
            </div>
        </section>
    </div>
</template>

<script>

export default {
    props: {
        info: Object
    },
}
</script>

<style scoped>
    
</style>