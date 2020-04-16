<template>
  <div class="home">
    <vue-tree  :treeData='datas' ref='vtree' @clickNode ='clickNode' checkBox=true></vue-tree>
  </div>
</template>

<script>
import Vue from 'vue'
import vueTree from 'vue-tree-jf'
Vue.use(vueTree)
export default {
  name: 'Home',
  data(){
    return {
      datas:[{
          text: '一级 1',
          children: [{
            text: '二级 1-1',
            children: [{
              text: '三级 1-1-1'
            }]
          }]
        }, {
          text: '一级 2',
          children: [{
            text: '二级 2-1',
            children: [{
              text: '三级 2-1-1'
            }]
          }, {
            text: '二级 2-2',
            children: [{
              text: '三级 2-2-1'
            }]
          }]
        }, {
          text: '一级 3',
          children: [{
            text: '二级 3-1',
            children: [{
              text: '三级 3-1-1'
            }]
          }, {
            text: '二级 3-2',
            children: [{
              text: '三级 3-2-1'
            }]
          }]
        }],
    } 
  },
  methods:{
    clickNode(n){
      console.log(n)
    }
  }
}
</script>
