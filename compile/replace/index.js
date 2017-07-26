var cont = `<template>
  <view style="height:100%;display:flex;justify-content: center;align-items: center;">
    <input type="text"> <br>
    <p>{{token}}</p>
    <p>{{userData}}</p>
  </div>
</template>`
cont.replace(/<div/g, "<view")
cont.replace(/<\/div/g, "</view")
