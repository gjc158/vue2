export default {
    // 小写
    initmusicmes({commit}, value) {
        console.log(value)
        commit('INITMUSICMES', value);
    },
    login({commit}, user){
    	console.info(user);
    	commit('LOGIN', user);
    }
}