<template>
  <div id="app" :class="{'page_top' : is_page_top}">
    <div class="containar">
      <Header :class="{'bg' : visible && is_page_top}" :visible="visible"/>
      <main class="ly_main">
        <ScrollTop />
        <div class="ly_main_inner">
          <!-- <transition>
            <div v-show="visible">
              <h1 id="header-logo">ここがフェードイン・アウトするよ</h1>
            </div>
          </transition> -->
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
  created() {
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
  },
};
</script>

<style scoped>
.v-enter {
  opacity: 0;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 1s;
}

.v-enter-to {
  opacity: 1;
}

.v-leave-to {
  opacity: 0;
  transition: opacity 1s;
}
</style>

