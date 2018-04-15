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
    <footer class="footer">
      <div class="container">
        <div class="content has-text-centered">
          <p>
            <strong>Gistshare</strong> by <a href="https://twitter.com/jacoyutorius">@jacoyutorius</a>.
            source code <a href="https://github.com/jacoyutorius/gistshare">https://github.com/jacoyutorius/gistshare</a>
          </p>
        </div>
      </div>
    </footer>
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
i.fa {
  padding: 0 5px;
}
.footer {
  padding: 1rem 0.5rem 1rem;
}
</style>
