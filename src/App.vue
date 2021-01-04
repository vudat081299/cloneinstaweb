<template>
  <v-app>
    <Nav v-if="this.$store.state.didLogin"/>
    <v-main>
      <v-container fluid>
        <v-fade-transition mode="out-in">
          <router-view></router-view>
        </v-fade-transition>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Nav from '@/components/Nav.vue'

export default {
  name: 'App',

  components: {
    Nav
  },
  computed: {
    check () {
      return false
    }
  },
  watch: {
    check () {
      if (this.$store.state.didLogin === true) {
      } else {
        this.$router.push('/')
      }
    }
  },
  data: () => ({
    //
  })
}
</script>
