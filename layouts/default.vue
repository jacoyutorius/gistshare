<template>
  <div>
    <section class="head section is-fullwidth">
      <div class="hero-head">
        <div class="container">
          <h1 class="title">
            Gisthub
          </h1>
          <h2 class="subtitle">
            share your Gist!
          </h2>
        </div>
      </div>
    </section>
    
    <nuxt/>
  </div>
</template>

<style>
section.head {
  background-image: url("~/assets/images/three_ats_beletsky.jpg");
  color: ghostwhite;
}
.hero-head > .container > .title {
  color: ghostwhite;
}
.hero-head > .container > .subtitle {
  color: grey;
}
.container {
  min-height: 20vh;
  /* display: flex; */
  justify-content: center;
  align-items: center;
  text-align: center;
}
.hero-head {
  margin-top: 100px;
}
.media-content {
  /* .media内のユーザー名の表示部分でスクロールできてしまうのを防ぐ */
  overflow: hidden;
}
</style>
