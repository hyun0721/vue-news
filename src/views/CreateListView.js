import ListView from './ListView.vue';
import { h } from 'vue';

export default function createListView (name) {
    return {
        name: name,
        created() {
            this.emitter.emit('startSpinner', {});

            this.$store.dispatch('FETCH_LIST', this.$route.name)
                        .then(() => { this.emitter.emit('finishSpinner', {}) } )
                        .catch(err => { console.log(err); });
        },
        render(){
            return h(ListView);
        }
    }
}