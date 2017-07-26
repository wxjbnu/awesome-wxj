import {getTemplate} from './../compile-template';

const tt = `
<template>
  <div style="height:100%;display:flex;justify-content: center;align-items: center;">
    <input type="text"> <br>
    <p>{{token}}</p>
    <p>{{userData}}</p>
  </div>
</template>`

console.log(getTemplate(tt))