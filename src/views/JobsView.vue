<template lang="">
    <div> 
        <ListItem></ListItem>
    </div>
</template>

<script>
import ListItem from '../components/ListItem.vue';
import ListMixin from '@/mixins/ListMixin';
import { store } from '@/store';

export default {
    components: {
        ListItem,
    },

    mixins: [ListMixin],

    beforeRouteEnter: (to, from, next) => {
        next(vm => {
            vm.emitter.emit('startSpinner', {});
            
            store.dispatch('FETCH_LIST', to.name)
                .then(() =>{
                    console.log('fetched data...');
                    
                    // $nextTick을 사용하여 다음 DOM 업데이트 사이클에서 finishSpinner를 실행
                    vm.$nextTick(() => {
                        vm.emitter.emit('finishSpinner', {});
                    });
                })
                .catch((err) =>{
                    console.log(err);
                });
        });
    },
}
</script>

<style scoped>
</style>