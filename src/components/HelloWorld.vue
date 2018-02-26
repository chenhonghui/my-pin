<style lang="less">
@import '~vux/src/styles/reset.less';
</style>
<template>
<!--   <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
  </div>
  <div> -->
    <group>
      <cell title="哈哈" value="value" @click.native="test"></cell>
    </group>
  </div>
</template>


<script>
import { Group, Cell } from 'vux'
export default {
  components: {
    Group,
    Cell
  },
  name: 'HelloWorld',
  data () {
     

    return {
      msg: '你好，世界'
    }
  },
  methods: {
    test: function () {
      console.log(1);
    },
    shout:function () {
      console.log('我触发了它');
      //注释测试
      
    }
  },
  created (){
    fetch("http://www.ygmduli.com/pintg/index.php?act=search&op=categoryAll")
      .then(rsponse => response.json())
      .then(json => {
        console.log(json)
      })
      .catch(function (e) {
      console.log('oops! error:',e.message)
      })
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
