<template>
    <v-card>
      <v-img
        height="400px"
        src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
      ></v-img>

      <v-card-title>Cafe Badilico</v-card-title>

      <v-card-text>
        <v-row
          align="center"
          class="mx-0"
        >
          <div class="red--text ml-4">
                  <v-btn
        class="ma-2"
        text
        icon
        color="blue lighten-2" v-if="likeStatus"
      >
        <v-icon @click="changeLikeStatus">mdi-thumb-up</v-icon>
      </v-btn>
                  <v-btn
        class="ma-2"
        text
        icon
        color="red lighten-2" v-if="!likeStatus"
      >
        <v-icon @click="changeLikeStatus">mdi-thumb-down</v-icon>
      </v-btn>
          </div>
        </v-row>
      </v-card-text>

      <v-card-actions>
          <v-btn text color="primary" @click="commentDialog = !commentDialog">
            Comment
          </v-btn>
        <v-spacer></v-spacer>
      </v-card-actions>
      <Comment @hideCommentDialog="hideCommentDialog" :dialog="commentDialog"/>
    </v-card>
</template>

<script>
import Comment from '@/components/Comment.vue'
export default {
  components: {
    Comment
  },
  props: ['postData'],
  data: () => ({
    loading: false,
    selection: 1,
    postComment: null,
    likeStatus: false,
    commentDialog: false
  }),
  watch: {
    postData () {
    }
  },

  methods: {
    hideCommentDialog () {
      this.commentDialog = false
    },
    comment () {

    },
    changeLikeStatus () {
      this.likeStatus = !this.likeStatus
    }
  }
}
</script>
