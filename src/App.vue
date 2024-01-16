<template>  
  <ToolBar></ToolBar>
  <transition name="page">
    <router-view></router-view>
  </transition>  
  <MySpinner :loading="this.loadingStatus"></MySpinner>
</template>

<script>
import ToolBar from '@/components/ToolBar.vue';
import MySpinner from '@/components/MySpinner.vue';

export default {
  name: 'App',
  components: {
    ToolBar,
    MySpinner
  },
  data() {
    return {
      loadingStatus: false
    }
  },
}

</script>

<style>

body{
  padding: 0;
  margin: 0;
}

/* Router Transition : {'page'} 라는 명칭에 대한 name에 대한 명명 규칙을 따름 */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}

</style>
