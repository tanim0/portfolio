<template>
  <header class="ly_header">
    <div class="ly_header_inner">
      <div>
        <a href="/">Momoka Tanifuji</a>
      </div>
      <ol class="bl_headerNav">
        <li>
          <router-link to="/">Top</router-link>
        </li>
        <li>
          <router-link :to="{name: 'works'}">Works</router-link>
        </li>
      </ol>
    </div>
  </header>
</template>

<script>
export default {
  // computed: {
  //   is_page_top() {
  //     return this.$route.path == '/'
  //   }
  // },
};
</script>

<style>
</style>