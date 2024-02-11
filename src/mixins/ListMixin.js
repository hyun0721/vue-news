export default {
    // 재사용할 컴포넌트 옵션

    // created(){
    //     this.emitter.emit('startSpinner', {});
        
    //     this.$store.dispatch('FETCH_LIST', this.$router.name)
    //         .then(() =>{
    //             this.emitter.emit('finishSpinner', {});
    //         })
    //         .catch((err) =>{
    //             console.log(err);
    //         });
    // },

    //! [ISSUE] mixin에서 created 훅으로 데이터를 가져오기 때문에, 라우팅에 대한 참조값을 얻지 못함.
    //! 또한, 이 후 라우팅이 발생하여도 이미 created 훅은 진행되었으므로 동작하지 않음.

    /**
     * 
     * @param {*} to    : 이동할 경로
     * @param {*} from  : 현재 경로
     * @param {*} next  : 이동 시, 콜백함수
     */
    beforeRouteEnter(to, from, next) {
        console.log('fetched: ', to.name);
        this.emitter.emit('startSpinner', {});

        this.$store.dispatch('FETCH_LIST', to.name)
            .then(() =>{
                console.log('fetched: ', to.name);
                this.emitter.emit('finishSpinner', {});
                next();
            })
            .catch((err) =>{
                console.log(err);
                next(false);
            });
    }
}