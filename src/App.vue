<template>
  <div id="app" :class="{'page_top' : is_page_top}">
    <div class="containar">
      <Header :class="{'bg' : visible && is_page_top}" :visible="visible"/>
      <main class="ly_main">
        <ScrollTop />
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
import ScrollTop from "./components/ScrollTop";

export default {
  components: {
    Header,
    Footer,
    ScrollTop
  },
  data() {
    return {
      visible: false,
    };
  },
  computed: {
    is_page_top() {
      return this.$route.path == '/'
    }
  },
  watch: {
    // ページ遷移毎にパラメータを確認し、ユーザーを判別
    '$route': function(to, from) {
      if(to.path !== from.path) {
        const path = location.pathname.split('/');
        if(path[1] == 'pf') {
            this.$store.state.user = true
        }
      }
    }
  },
  created() {
    const host = location.hostname.split('.');
    if(host[0] == 'tanifuji') {
        this.$store.state.user = true
    }
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.scrollY = window.scrollY;
      if (!this.visible) {
        this.visible = window.scrollY > 70;
      } else if (window.scrollY < 60) {
        this.visible = !this.visible;
      }
    },
    funcUser() {
      const path = location.pathname.split('/');
      if(path[1] == 'pf') {
        this.$store.state.user = true
      }
    }
  },
};
</script>

<style scoped>
</style>

