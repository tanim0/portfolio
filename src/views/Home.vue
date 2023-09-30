<template>
  <div>
    <!-- <ol class="ly_top_button">
      <li class="el_btn_borderd">
        <router-link to="About">About</router-link>
      </li>
      <li class="el_btn_borderd">
        <router-link to="Works">Works</router-link>
      </li>
    </ol> -->
    <section class="section_top">
      <p id="top_img" class="top_img"><img src="../assets/img_top.jpeg" alt=""></p>
      <div class="top_txt">
        <p class="top_txt_name">Momoka Tanifuji</p>
        <p class="top_txt_title">PORTFOLIO</p>
        <p class="top_txt_arrow">
          <span class="line01"></span>
          <span class="line02"></span>
        </p>
      </div>
    </section>
    <section class="section section_about">
      <p class="section_title">About</p>
      <p class="section_text">サンプルテキストサンプルテキストサンプルテキストサンプルテキスト<br>テキストテキストテキストテキストテキスト</p>

    </section>
    <section class="section section_works">
      <p class="section_title">Works
        <router-link to="works">
          <span v-if="!hoverFlag" v-on:mouseover="mouseOverAction" v-on:mouseleave="mouseLeaveAction" class="material-symbols-outlined">arrow_circle_right</span>
          <span v-if="hoverFlag" v-on:mouseover="mouseOverAction" v-on:mouseleave="mouseLeaveAction"  class="material-symbols-outlined fill">arrow_circle_right</span>
          <!-- <p v-if="hoverFlag">hoverされました</p> -->
        </router-link>
      </p>
      <p class="section_text">サンプルテキストサンプルテキストサンプルテキストサンプルテキスト<br>テキストテキストテキストテキストテキスト</p>

    </section>

    

    <section class="section section_skill">
      <p class="section_title">Skill</p>
      <p class="section_text">サンプルテキストサンプルテキストサンプルテキストサンプルテキスト<br>テキストテキストテキストテキストテキスト</p>

    </section>
  </div>
</template>

<script>
window.onload = function() {
  document.getElementById("top_img").classList.add("active")
};

export default {
  name: "Home",
  data() {
    return {
      hoverFlag: false
    }
    
  },
  components: {
    // HelloWorld
  },
  methods: {
    mouseOverAction(){
        this.hoverFlag = true
    },
    mouseLeaveAction(){
        this.hoverFlag = false
    }
  }
  
};
</script>
