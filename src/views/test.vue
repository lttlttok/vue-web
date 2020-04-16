<template>
  <div id="app">
    <h2>爸爸小李子</h2>
    <h3>{{msg}}</h3>
    <h3>{{msgs}}</h3>
    <child1 :title="title1" @getmsg="getmsg"></child1>
    <child2 :toxiao="toxiao" @getmsgs="getmsgs"></child2>
  </div>
</template>

<script>
import Child1 from '@/components/Child1'
import Child2 from '@/components/Child2'
export default {
  provide:{
    woniu:'我是帅气的小李子'
  },
  data(){
    return {
      msg:'',
      msgs:'',
      title1:'汤汤，你爸爸是我',
      toxiao:'宵宵，我是你爸爸'
    }
  },
  methods:{
    getmsg(msg){
      this.msg = msg
    },
    getmsgs(msg){
        this.msgs = msg
    }
  },
  components:{Child1,Child2},
  mounted(){

    this.$on("dispatch",msg=>{
        this.msg = '接收dispatch消息:'+ msg
    })
    this.$bus.$on("event-bus",msg=>{
        this.msg = '接收event-bus消息:'+ msg
    })
  }

}

</script>
<style scoped>

div{
  border:3px #666666 solid;
  padding:10px;
  display: inline-block;
  vertical-align: top;
  /* width:50%; */
}
h1,h2{
  font-size:18px;
  margin:5px 0;
  
}
h3{
  color:#3fb374;
  font-size:14px;
}
</style>

