<template>  
  <ToolBar></ToolBar>
  <router-view></router-view>
</template>

<script>
import ToolBar from '@/components/ToolBar.vue';

export default {
  name: 'App',
  components: {
    ToolBar
  }
}

</script>

<style>
  body{
    padding: 0;
    margin: 0;
  }
</style>
