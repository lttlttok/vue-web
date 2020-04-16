<template>
    <div>
        <h2>元宵</h2>
        <h3>{{msg}}</h3>
        <cube-button :inline="true" @click="tobaba">元宵对爸爸说</cube-button>
        <h3 style="color:#3ca0e6;">{{toxiao}}</h3>
        <grand-child1>
        </grand-child1>
    </div>
</template>
<script>
import GrandChild1 from '@/components/GrandChild1'
export default {
    props:["toxiao"],
    data(){
        return {
            msg:""
        }
    },
    components:{
        GrandChild1,
    },
    methods:{
        tobaba(){
            this.$emit('getmsgs','元宵对爸爸说：爸爸,我是小元宵')
        }
    },
    mounted(){

        this.$on("dispatch",msg=>{
            this.msg = '接收dispatch消息:'+ msg
        })
    }
    
}
</script>

