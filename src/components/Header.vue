<template>
  <header class="ly_header">
    <div class="ly_header_inner">
      <h1>
        <router-link :to="{name: 'home'}">MOMOKA TANIFUJI</router-link>
      </h1>
      <ol class="bl_headerNav">
        <li>
          <router-link :to="{name: 'home'}" :class="{'active' : is_page_top && visible}"><span>Top</span></router-link>
        </li>
        <li>
          <router-link :to="{name: 'works'}" :class="{'active' : is_page_works}"><span>Works</span></router-link>
        </li>
      </ol>
    </div>
  </header>
</template>

<script>
export default {
  props: [
    'visible'
  ],
  computed: {
    is_page_top() {
      return this.$route.path == '/'
    },
    is_page_works() {
      return this.$route.path == '/works'
    }
  },
};
</script>

<style>
</style>