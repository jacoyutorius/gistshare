import Vue from "vue"
import Vuex from "vuex"
import firebase from "~/plugins/firebase"
import { firebaseMutations, firebaseAction } from "vuexfire"
const db = firebase.database()
const usersRef = db.ref("/users")
const gistsRef = db.ref("/gists")
const provider = new firebase.auth.GoogleAuthProvider()

Vue.use(Vuex)

const createStore = () => {
  return new Vuex.Store({
    state: {
      user: null,
      gist: null,
      users: [],
      gists: []
    },
    getters: {
      gists: state => state.gists.reverse(),
      users: state => state.users,
      user: state => state.user,
    },
    mutations: {
      setCredential(state, { user }){
        state.user = user
      },
      ...firebaseMutations
    },
    actions: {
      async SET_CREDENTIAL({commit}, { user }){
        if (!user) return
        await usersRef.child(user.email.replace("@", "_at_").replace(/\./g, "_dot_")).set({
          name: user.displayName,
          email: user.email,
          icon: user.photoURL
        })
        commit("setCredential", { user })
      },
      INIT_USERS: firebaseAction(({ bindFirebaseRef }) => {
        bindFirebaseRef("users", usersRef)
      }),
      INIT_GISTS: firebaseAction(({ bindFirebaseRef }) => {
        bindFirebaseRef("gists", gistsRef)
      }),
      ADD_GIST: firebaseAction((ctx, { email, name, icon, comment, url }) => {
        gistsRef.push({
          from: email,
          name: name,
          icon: icon,
          comment: comment,
          url: url
        })
      }),
      callAuth(){
        firebase.auth().signInWithRedirect(provider)
      }
    }
  })
}

export default createStore