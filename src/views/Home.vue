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
      <p id="top_img" class="top_img" :class="{'active': load}"><img src="../assets/images/img_top.jpeg" alt=""></p>
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

      <div class="swiper" ref="mySwiper">
        <div class="swiper-wrapper">
            <div v-for="(item, index) in lists" class="swiper-slide" :key="index">
              <router-link :to="{name:'works', params:{id: item.id} }">
                <!-- <p>{{item.id}}</p> -->
                <!-- <p class="swiper_img_wrapper"><img :src="item.image" alt=""/></p> -->
                <p class="swiper_img_wrapper">
                  <img :src="require(`@/assets/images/${item.url}`)" alt=""/>
                </p>
              </router-link>
            </div>
        </div>
        <!-- <div class="swiper-pagination"></div> -->
        <!-- <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div> -->
      </div>
    </section>

    <section class="section section_skill">
      <p class="section_title">Skill</p>
      <p class="section_text">サンプルテキストサンプルテキストサンプルテキストサンプルテキスト<br>テキストテキストテキストテキストテキスト</p>

    </section>
  </div>
</template>

<script>
import Swiper from 'swiper/bundle'; 
import 'swiper/swiper-bundle.css';

export default {
  name: "Home",
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      }
    }
  },

  data() {
    return {
      hoverFlag: false,
      load: false,
      lists: [],
      list: [
        {
          id: 1,
          url: 'icon_muscut.jpg'
        },
        {
          id: 2,
          url: 'icon_muscut.jpg'
        },
        {
          id: 3,
          url: 'icon_muscut.jpg'
        },
        {
          id: 4,
          url: 'icon_muscut.jpg'
        },
        {
          id: 5,
          url: 'icon_muscut.jpg'
        },
        {
          id: 6,
          url: 'icon_muscut.jpg'
        },
        {
          id: 7,
          url: 'icon_muscut.jpg'
        },
        {
          id: 8,
          url: 'icon_muscut.jpg'
        },
        {
          id: 9,
          url: 'icon_muscut.jpg'
        },
      ],
      
    }
    
  },
  components: {
  },
  methods: {
    mouseOverAction(){
        this.hoverFlag = true
    },
    mouseLeaveAction(){
        this.hoverFlag = false
    },
    swiper() {
      var mySwiper = new Swiper('.swiper', {
        loop: true, // ループ
        slidesPerView: 3, // 一度に表示する枚数
        spaceBetween: 15,
        threshold:10,
        // loopedSlides: 12,
        speed: 7000, // ループの時間
        allowTouchMove: false, // スワイプ無効
        autoplay: { //自動再生
          delay: 0, // 途切れなくループ
          disableOnInteraction: false, // 矢印をクリックしても自動再生を止めない
        },
        // pagination: {
        //   el: '.swiper-pagination',
        // },
        // navigation: {
        //   nextEl: '.swiper-button-next',
        //   prevEl: '.swiper-button-prev',
        // },
        // scrollbar: {
        //   el: '.swiper-scrollbar',
        // },
        breakpoints: {
          // ~px以上の場合
          768: {
            slidesPerView: 5,
            spaceBetween: 20
          },
          1080: {
            slidesPerView: 7,
            spaceBetween: 25
          }
        }
      })
      console.log(mySwiper)
    }
  },
  created() {
    // swiper-slideが奇数の際のエラー、枚数が少ない際のエラー回避
      for(let i = 0; i < 2; i++) {
        for(let k=0; k < this.list.length; k++) {
          let item = this.list[k];
          this.lists.push(item)
        }
      }
  },
  mounted() {
    // topイメージ読み込み
    this.load = true;
    this.swiper();
  },
};
</script>
