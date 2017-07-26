import Vue from 'vue'

Vue.prototype.$alert = function(){
    return new Promise((resolve, reject) => {
        resolve('promist ------------------------')
    });
}