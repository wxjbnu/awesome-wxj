<template>
  <section class="container">
    <h1 class="title">
      Tea
    </h1>
    <p>{{this.$store.state.counter}}</p>
    <ul class="github">
      <li v-for="(d, index) in data" class="user" style="text-align:left;">
        <span style="font-size:20px;font-weight:bold">{{index+1}}</span>
        ☆:{{d.stargazers_count}}
        名称：<a style="color:red;" :href="d.homepage" target="_blank">{{d.name}}</a>
        git：<a :href="d.html_url" target="_blank">git地址</a>
        <p>{{d.description}}</p>
      </li>
    </ul>
    <nuxt-link :to="{ path: '/' }">
          index
    </nuxt-link>
  </section>
</template>

<script>
import axios from '~plugins/axios'

export default {
  async asyncData () {
    // let { data } = await axios.get('/api/users')
    let { data } = await axios.get('https://api.github.com/search/repositories?q=language:javascript&sort=stars&order=desc')
    return {
      data: data.items
    }
  },
  async fetch ({ store, params }) {
    // let { data } = await axios.get('https://api.github.com/search/repositories?q=language:javascript&sort=stars&order=desc')
    // store.commit('setStars', data)
    // console.log(data)
  },
  head () {
    return {
      title: 'Tea'
    }
  }
}
</script>

<style scoped>
.title
{
  margin: 30px 0;
}
.users
{
  list-style: none;
  margin: 0;
  padding: 0;
}
.user
{
  margin: 10px 0;
}
</style>
