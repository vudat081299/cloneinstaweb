<template>
  <nav>
    <v-navigation-drawer app left permanent clipped>

        <v-list>
          <v-list-item class="px-2">
            <v-list-item-avatar>
              <v-img src="https://randomuser.me/api/portraits/women/85.jpg"></v-img>
            </v-list-item-avatar>
          </v-list-item>

          <v-list-item link>
            <v-list-item-content>
              <v-list-item-title class="title">
                Sandra Adams
              </v-list-item-title>
              <v-list-item-subtitle>sandra_a88@gmail.com</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

      <v-divider></v-divider>

      <v-list
        dense
        nav
        active-class="slectedRow blue--text text--darken-3"
      >
        <v-list-item
          active-class="slectedRow blue--text text--darken-3"
          v-for="item in items"
          :key="item.title"
          link
          :to="item.route"
        >
            <v-list-item-icon active-class="slectedRow blue--text text--darken-3">
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content active-class="slectedRow blue--text text--darken-3">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
<v-app-bar
      app clipped-left
      color="primary"
      dark dense
    >
      <div class="d-flex align-center">
        <h2>Instagram</h2>
      </div>
      <v-spacer></v-spacer>
      <v-btn @click="logout">Đăng xuất</v-btn>
    </v-app-bar>
  </nav>
</template>

<script>
export default {
  beforeCreate: function () {
    if (!this.$session.exists()) {
      this.$router.push('/')
    }
  },
  data () {
    return {
      items: [
        { title: 'New feed', icon: 'mdi-view-dashboard', route: '/feed' },
        { title: 'Search user', icon: 'mdi-image', route: '/about' },
        { title: 'Friends', icon: 'mdi-help-box' }
      ],
      right: null
    }
  },
  methods: {
    logout () {
      this.didLogin = false
      this.$router.push('/')
      this.$store.state.didLogin = false
    }
  }
}
</script>
