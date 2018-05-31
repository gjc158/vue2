export default {
    // 大写
    INITMUSICMES(state, value){
        state.musicMes = value;
        console.log(state.musicMes)
    },
    LOGIN(state, user){
    	state.user = user;
    	state.islogin = true;
    	console.log(state.user)
    },
    exit(state, user){
    	state.user = 'user';
    	state.islogin = false;
    },
    ADDCOUNT(state, value){
        state.count = state.count + 1;
    },
    updateMessage(state, value){
        state.obj.message = value;
    }
}