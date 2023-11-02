<template>
  <div :class="['scroll_top', {'visible': visible}]">
    <p v-show="visible" @click="pageTop">
      <span class="dli_caret_up"></span>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
    };
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.scrollY = window.scrollY;
      if (!this.visible) {
        this.visible = window.scrollY > 150;
      } else if (window.scrollY < 140) {
        this.visible = !this.visible;
      }
    },
    pageTop() {
      window.scrollTo({
          top: 0,
          behavior: 'smooth'
      })
    },
  },
}
</script>