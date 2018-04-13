<template>
  <div class="card" v-bind:key="gist.key">
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img v-bind:src="gist.icon" alt="Placeholder image">
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4">{{ gist.name }}</p>
          <p class="subtitle is-6">{{ gist.from }}</p>
        </div>
      </div>
      <div class="content">
        <p>{{ gist.comment }}</p>
      </div> 
    </div>
    
    <iframe width="100%" :height="iframeHeightParam" v-bind:src="gist.url.replace('.js', '.pibb')" frameborder="0"></iframe>
  
    <footer class="card-footer">
      <a v-on:click="onExpand" class="card-footer-item">{{ expandStateLabel }}</a>
    </footer>
  </div>
</template>

<script>
export default {
  name: "gist-card",
  props: ["gist"],
  data(){
    return {
      expanded: false
    }
  },
  computed: {
    iframeHeightParam(){
      return this.expanded ? "700px" : "300px"
    },
    expandStateLabel(){
      return this.expanded ? "Collapse" : "Expand"
    }
  },
  methods: {
    onExpand(){
      this.expanded = !this.expanded
    }
  }
}
</script>