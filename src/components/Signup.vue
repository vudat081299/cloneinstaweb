<template>
  <v-row justify="center">
    <v-dialog
      v-model="this.dialog"
      persistent
      max-width="600px"
    >
      <v-card>
        <v-card-title>
          <span class="headline">Sign up</span>
        </v-card-title>

        <v-card-text>
          <v-text-field
            ref="name"
            v-model="name"
            :rules="[() => !!name || 'This field is required']"
            :error-messages="errorMessages"
            label="Your account's name"
            placeholder="Your account's name using with our system!"
            required
          ></v-text-field>
          <v-text-field
            ref="username"
            v-model="name"
            :rules="[() => !!name || 'This field is required']"
            :error-messages="errorMessages"
            label="Login account"
            placeholder="your phone number or your email!"
            required
          ></v-text-field>

          <v-text-field
            ref="zip"
            v-model="zip"
            :rules="[() => !!zip || 'This field is required']"
            label="Password"
            type="password"
            required
            placeholder="enter your password!"
          ></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="hideSelf"
          >
            Close
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="hideSelf"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  props: ['dialog'],
  data: () => ({

  }),
  methods: {
    hideSelf () {
      this.$emit('hideSignUp')
    }
  }
}
</script>
