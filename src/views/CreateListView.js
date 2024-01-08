import ListView from './ListView.vue';

export default function createListView (name) {
    return {
        name: name,
        created() {
            this.$store.dispatch('FETCH_LIST', this.$store.name);
        },
        render(createElement){
            return createElement(ListView);
            // return createElement();
        }
    }
}