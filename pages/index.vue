<template>
  <section class="section is-fullwidth">
    <div v-if="user" class="card">

      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-48x48">
              <img v-bind:src="user.photoURL" alt="Placeholder image">
            </figure>
          </div>
          <div class="media-content">
            <p class="title is-4">{{ user.displayName }}</p>
            <p class="subtitle is-6">{{ user.email }}</p>
          </div>
          <div class="media-right">
            <a class="button is-small" @click="onSignout">
              <span class="icon">
                <i class="fa fa-user"></i>
              </span>
                SignOut
            </a>
          </div>
        </div>

        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Gist embeded URL</label>
          </div>
          <div class="field-body">
            <input class="input is-medium is-primary" type="text" placeholder="<script src='https://gist.github.com/jacoyutorius/d247836e6e17a241bb7e3abda748f17f.js'></script>" v-model="url">
          </div>
        </div>
        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Comment</label>
          </div>
          <div class="field-body">
            <input class="input is-medium is-primary" type="text" placeholder="comment" v-model="comment">
          </div>
        </div>

        <div class="field is-horizontal">
          <div class="field-label is-normal">
          </div>
          <div class="field-body">
            <button class="button is-primary" @click="addGist">Share your Gist!</button>
          </div>
        </div>
        
      </div>
    </div>
    <div class="media signin" v-else>
      <div>
        <button class="button" @click="callAuth"><i class="fa fa-google"></i>  Sign in with Google</button>
        <button class="button" @click="callGithubAuth"><i class="fa fa-github"></i>  Sign in with Github</button>
      </div>
    </div>

    <!-- card -->
    <gist-card v-for="gist in gists" v-bind:key="gist.key" v-bind:gist="gist"></gist-card>

  </section>
</template>

<script>
import auth from "~/plugins/auth"
import GistCard from "~/components/GistCard"
import { mapGetters, mapActions } from "vuex"

export default {
  name: "index",
  data(){
    return {
      comment: "",
      url: "",
      isLoaded: false
    }
  },
  async mounted(){
    let user
    if (!this.user) user = await auth()
    await Promise.all([
      this.user ? Promise.resolve() :this.$store.dispatch("SET_CREDENTIAL", { user: user || null})
    ])
    this.isLoaded = true
  },
  components: {
    GistCard
  },
  computed: {
    ...mapGetters(["user", "users", "gists"])
  },
  async mounted(){
    if (process.browser){
      let user
      if (!this.user) user = await auth()
      await Promise.all([
        this.user ? Promise.resolve() : this.$store.dispatch("SET_CREDENTIAL", { user: user || null }),
        this.gists.length ? Promise.resolve() : this.$store.dispatch("INIT_GISTS"),
        this.users.length ? Promise.resolve() : this.$store.dispatch("INIT_USERS")
      ])
      this.isLoaded = true
    }
  },
  methods: {
    async addGist(){
      await this.$store.dispatch("ADD_GIST", { 
        email: this.user.email,
        name: this.user.displayName,
        icon: this.user.photoURL,
        comment: this.comment,
        url: this.url.split('"')[1]
        })
      this.url = ""
      this.comment = ""
    },
    onSignout(){
      if (window.confirm("Sign out?")){
        this.signOut()
      }
    },
    ...mapActions(["callAuth", "callGithubAuth", "signOut"])
  }
}
</script>

<style>
.card {
  margin: 20px;
}
.media.signin {
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
