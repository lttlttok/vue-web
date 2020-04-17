<template>
    
    <div>
        <h2>大胖</h2>
        <p style="color:#3ca0e6;">
            小李子爷爷对大胖说 : {{woniu}}
        </p>
        <h3>{{msg}}</h3>
    </div>
</template>
<script>
export default {
    data(){
        return {
            msg:""
        }
    },
    inject:['woniu'],
    mounted(){

        this.$on("dispatch",msg=>{
            this.msg = '接收dispatch消息:'+ msg
        })
        this.$on("boardcast",msg=>{
            this.msg = '接收汤圆爸爸消息:'+ msg
        })
        this.$bus.$on("event-bus",msg=>{
            this.msg = '接收小胖消息:'+ msg
        })
    }
}
</script>
