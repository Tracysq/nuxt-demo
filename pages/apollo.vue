<template>
  <div>
    apollo test

    <div v-if="$apollo.queries.users.loading">Loading...</div>
    <ul>
      <li v-for="user in users" :key="user.id">
        {{ user.username }} {{ user.isAdmin }}
      </li>
    </ul>

    <button @click="getUser">get user</button>
    <button @click="updateUser">update user</button>
  </div>
</template>

<script>
import administration from '~/apollo/queries/users'
import update_user from '~/apollo/queries/update_user'

export default {
  data(){
    return {
      users: []
    }
  },
  apollo: {
    users: {
      prefetch: true,
      query: administration,
      update: data => data.administration.users
    }
  },
  methods: {
    async updateUser() {
      const res = await this.$apollo.mutate({
        mutation: update_user,
        variables: {
          "userId": "0bb6c574-065c-43f8-869b-8e48083c53fa",
          "isAdmin": false,
          "banListed": false
        }
      })
      // this.users = res.administration.users
    },

    getUser() {
      const query = this.$apollo.queries.users
      console.log(query)
    },
  }
}
</script>
