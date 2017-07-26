<template>
  <div id="app">
    <img v-ripple src="./assets/logo.png">
    <router-view></router-view>
    <wxjConfirm @confirm="confirm"></wxjConfirm>
  </div>
</template>

<script>
import wxjConfirm from './components/wxjConfirm'
export default {
  name: 'app',
  components:{
    wxjConfirm
  },
  methods:{
    confirm(pro){
      console.log(typeof pro)
      console.log(pro)
      if('string' == typeof pro){
        alert('string')
      }else{
        pro
        .then(()=>{
          alert('ok')
        })
        .catch((err)=>{
          alert('err')
        })
      }
      // this.$alert()
      //   .then((res)=>{
      //     console.log(res)
      //   })
      // return new Promise((resolve, reject) => {
      //     if(v==='ok'){
      //       resolve()
      //     }else{
      //       reject()
      //     }
      // });
    },
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
