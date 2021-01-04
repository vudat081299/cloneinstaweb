<template>
  <v-row justify="space-around">
    <v-col cols="auto">
      <v-dialog v-model="this.dialog"
        transition="dialog-bottom-transition"
        max-width="600"
      >
          <v-card>
            <v-toolbar
              color="primary"
              dark
            >Opening from the bottom</v-toolbar>
            <v-card-text>
              <div class="text-h2 pa-12">Hello world!</div>
            </v-card-text>
            <v-card-actions class="justify-end">
              <v-btn
                text
                @click="hideSelf"
              >Close</v-btn>
            </v-card-actions>
          </v-card>
      </v-dialog>
    </v-col>
</v-row>
</template>

<script>
export default {
  props: ['dialog'],
  data: () => ({
  }),
  watch: {
  },

  methods: {
    hideSelf () {
      this.$emit('hideCommentDialog')
    }
  }
}
</script>
