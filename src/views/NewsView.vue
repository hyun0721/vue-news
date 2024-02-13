<template lang="">
    <div>
        <ListItem></ListItem>
    </div>
</template>

<script>
import ListItem from '../components/ListItem.vue';
import { store } from '@/store';

export default {
    components: {
        ListItem,
    },
    beforeRouteEnter: (to, from, next) => {
        next(vm => {
            vm.emitter.emit('startSpinner', {});
            
            store.dispatch('FETCH_LIST', to.name)
                .then(() =>{
                    vm.emitter.emit('finishSpinner', {});
                })
                .catch((err) =>{
                    console.log(err);
                });
        });
    },
}
</script>

<style>
</style>