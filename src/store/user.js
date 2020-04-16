import us from "@/service/user";

export default {
  state: {
    isLogin:localStorage.getItem('token')?true:false
  },
  mutations: {
    setLoginState(state,b){
      state.isLogin = b
    }
  },
  actions: {
    login({commit},user){ 
      return us.login(user).then(res =>{
        const {code,token} = res.deta;
        if(code){
          commit('setLoginState',true)
          localStorage.setItem('token',token)
        }
        return code
      })
    },
    logout({commit}){
      localStorage.removeItem('token')
      commit('setLoginState',false)
    }
  }
}
