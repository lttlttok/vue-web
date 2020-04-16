<template>
<div>
    <cube-form
  :model="model"
  :schema="schema"
  @validate="validateHandler"
  @submit="submitHandler"></cube-form>
</div>
</template>

<script>
export default {
data() {
    return {
      validity: {},
      valid: undefined,
      model: {
        username:"",
        password:""
      },
      schema: {//表单的结构定义
        groups: [
          {
            fields: [
              {
                type: 'input',
                modelKey: 'username',
                label:"用户名",
                props: {
                  placeholder:'请输入用户名'
                },
                rules: {
                  required: true
                },
                trigger:"blur"
              },
              {
                type: 'input',
                modelKey: 'password',
                label: '密码',
                props: {
                  type:"passward",
                  placeholder: '请输入密码',
                  eye:{
                      open:true
                  }
                },
                rules: {
                  required: true
                },
                // validating when blur
                trigger: 'blur'
              },
              {
                type: 'submit',
                label: '登录',
              }
            ]
          },
        ]
      }
    }
  },
  methods: {
    submitHandler(e) {
      e.preventDefault()
      this.$store.dispatch("login",this.model)
      .then(code=>{
            if(code){
                const path = this.$route.query.redirect || "/"
                this.$router.push(path)
            }  
        }
      )
    },
    validateHandler(result) {
      console.log('validity', result)
    },
  }
}
</script>
<style scoped>
/* @import url(); 引入css类 */

</style>