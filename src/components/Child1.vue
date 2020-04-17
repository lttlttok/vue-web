<template>
  <div>
    <h2>汤圆</h2>
    <p style="color:#3ca0e6;">{{title}}</p>
    <h3>{{msg}}</h3>
    <cube-button :inline="true" @click="toParent">汤圆给爸爸说</cube-button>
    <cube-button :inline="true" @click="$boardcast('boardcast','我是汤圆')">汤圆对后代说</cube-button>
    <grand-child1></grand-child1>
    <grand-child2></grand-child2>
  </div>
</template>
<script>
import GrandChild1 from "@/components/GrandChild1";
import GrandChild2 from "@/components/GrandChild2";


export default {
  props: ["title"],
  data() {
    return {
      msg: ""
    };
  },
  components: {
    GrandChild1,
    GrandChild2
  },
  methods: {
    toParent() {
      this.$emit("getmsg", "汤汤对爸爸说：我要吃肉");
    }
  },
  mounted() {
    this.$on("dispatch", msg => {
      this.msg = "接收dispatch消息:" + msg;
    });
    this.$bus.$on("event-bus",msg=>{
        this.msg = '接收小胖消息:'+ msg
    })
  }
};
</script>

