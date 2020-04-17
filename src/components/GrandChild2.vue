<template>
    
    <div>
        <h2>小胖</h2>
        <p style="color:#3ca0e6;">
            小李子爷爷对小胖说 : {{woniu}}
        </p>
        <cube-button :primary="true" :inline="true" @click="eventBus">eventBus</cube-button>
        <h3>{{msg}}</h3>
        <grand-grand-child1>
        </grand-grand-child1>
    </div>
</template>
<script>
import GrandGrandChild1 from '@/components/GrandGrandChild1'

export default {
    components:{GrandGrandChild1},
    inject:['woniu'],
    data(){
        return {
            msg:""
        }
    },
    methods:{
        eventBus(){
            this.$bus.$emit('event-bus','大家好，我是小胖')
        }
    },
    mounted(){

        this.$on("dispatch",msg=>{
            this.msg = '接收dispatch消息:'+ msg
        })
        this.$on("boardcast",msg=>{
            this.msg = '接收boardcast消息:'+ msg
        })

    }
}
</script>
