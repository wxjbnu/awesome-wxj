<template>
  <div class="wxj-confirm" v-show="show">
    <div class="wxj-confirm-body">
      <h3>弹窗</h3>
    </div>
    <div class="wxj-confirm-footer" >
      <span @click="ok" v-ripple class="wxj-confirm-btn">确定</span>
      <span @click="cancel" v-ripple class="wxj-confirm-btn">取消</span>
    </div>
    <div class="wxj-confirm-footer" >
      <span @click="confirm('ok')" v-ripple class="wxj-confirm-btn">promise确定</span>
      <span @click="confirm('cancel')" v-ripple class="wxj-confirm-btn">promise取消</span>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

Vue.prototype.$alert = function(){
    return new Promise((resolve, reject) => {
        resolve('promise ------------------------')
    });
}
export default {
  name: 'confirm',
  props:{
    show:{
      type:Boolean,
      default:true
    }
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
    }
  },
  methods:{
    resolve(){
      // this.
    },
    reject(){

    },
    ok(){
      const self = this;
      this.$emit('confirm','ok')
      // this.resolve()
      // return new Promise((resolve, reject) => {
      //     this.$emit('confirm',resolve)
      // });
    },
    cancel(){
      const self = this;
      this.$emit('confirm','cancel')
      // this.reject('cancel');
      // return new Promise((resolve, reject) => {
      //     this.$emit('confirm',reject)
      // });
    },
    confirm(v){
      const myPromise = new Promise((resolve, reject) => {
        if(v=='ok'){
          resolve()
        }else{
          reject()
        }
        // this.resolve = resolve;
        // this.reject = reject;
      });
      this.$emit('confirm',myPromise)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wxj-confirm{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: #222;
  z-index: 9999;
}
.wxj-confirm-body{
  width: 200px;
  padding: 20px 0;
  background: #fff;
}
.wxj-confirm-footer{
  display: flex;
  width: 200px;
  
  background: #fff;
  border-top: 1px solid red;
  align-items: center;
}
.wxj-confirm-btn{
  height: 40px;
  line-height: 40px;
  display: block;
  flex: 0 0 50%;
  cursor: pointer;
}
.wxj-confirm-btn:first-child{
  border-right: 1px solid #333;
}
</style>
