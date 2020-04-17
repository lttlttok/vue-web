<template>
  <div>
    <h2>小胖的儿子</h2>
    <p style="color:#3ca0e6;">小李子给小胖的儿子说 : {{woniu}}</p>
    <cube-button :primary="true" :inline="true" @click="$dispatch('dispatch','哈喽小李子 我是小胖的儿子')">dispatch</cube-button>
    <h3>{{msg}}</h3>
  </div>
</template>
<script>
export default {
  inject: ["woniu"],
  data() {
    return {
      msg: ""
    };
  },
  mounted(){
        this.$on("boardcast",msg=>{
            this.msg = '接收boardcast消息:'+ msg
        })
        this.$bus.$on("event-bus",msg=>{
            this.msg = '接收小胖消息:'+ msg
        })
  },
};
</script>
