<template>
  <section>
    <h1 class="title">
      USERS
    </h1>
    <ul class="users">
      <li v-for="(user, index) in users" class="user">
        <nuxt-link :to="{ name: 'id', params: { id: index }}">
          {{ user.name }}
        </nuxt-link>
      </li>
    </ul>
    <nuxt-link :to="{ path: 'tea' }">
          tea
    </nuxt-link>
  </section>
</template>

<script>
import axios from '~plugins/axios'
import Logo from '~components/Logo.vue'

export default {
  scrollToTop: true,
  components: {
    Logo
  },
  async asyncData (context) {
    console.log(context)
    let { data } = await axios.get('/api/users')
    return {
      users: data
    }
  },
  head () {
    return {
      title: 'Users'
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
