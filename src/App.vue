<template>
  <div id="app" :class="{'page_top' : is_page_top}">
    <div class="containar">
      <Header />
      <main class="ly_main">
        <div class="ly_main_inner">
          <router-view />
        </div>
      </main>
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  components: {
    Header,
    Footer,
  },
  computed: {
    is_page_top() {
      return this.$route.path == '/'
    }
  },
  
  // mounted() {
  //   const path = this.$route.path

  // }
};
</script>

