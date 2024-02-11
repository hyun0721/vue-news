export default {
    // 재사용할 컴포넌트 옵션

    created(){
        this.emitter.emit('startSpinner', {});
        
        this.$store.dispatch('FETCH_LIST', this.$route.name)
            .then(() =>{
                this.emitter.emit('finishSpinner', {});
            })
            .catch((err) =>{
                console.log(err);
            });
    },
}