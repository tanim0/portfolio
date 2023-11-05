<template>
  <div class="section_wrap">
    <!-- <ol class="ly_top_button">
      <li class="el_btn_borderd">
        <router-link to="About">About</router-link>
      </li>
      <li class="el_btn_borderd">
        <router-link to="Works">Works</router-link>
      </li>
    </ol> -->


    <!-- <div class="test"> -->
      <section class="section_top">
        <p id="top_img" class="top_img" :class="{'active': load}"><img src="../assets/images/img_top.jpeg" alt=""></p>
        <div class="top_txt">
          <p class="top_txt_name">
            <template v-if="$store.state.user">MOMOKA<br>TANIFUJI</template>
            <template v-else>HARUKA<br>ITOH</template>
          </p>
          <p class="top_txt_title">PORTFOLIO</p>
          <div class="fadeDown">
            <p class="top_txt_arrow">
              <span class="line01"></span>
              <span class="line02"></span>
            </p>
          </div>
        </div>
      </section>

    <!-- </div> -->

    <!-- <div class="test rellax" data-rellax-speed="4"> -->
      <section class="section section_about" ref="section_about">
        <div :class="{'fadeInAbout' : visible_about}" v-show="visible_about">
          <p class="section_title">About</p>
          <div class="section_text">
            <template v-if="$store.state.user">
              <p>大学卒業後、雑貨専門店の経営支援を行う会社で、デザインと販促動画制作を中心とした販売促進業務に3年半従事しました。</p>
              <p>その後Web関連にデザインの幅を広げようと転職したITベンチャー企業では、Webのデザインとコーディングを中心とした開発業務に2年半従事し、<br class="pc">1つの案件において、チラシ・Web・動画制作等を一括して担当することでスピード感のあるサービスリリースを行ってきました。</p>
              <p>最終職では前職までの経験を活かしながら、フルスクラッチ開発業務の主にデザイン・コーディング担当として4年間従事しました。<br>タスクランナーやフレームワーク(主にVue.js)を使用し、効率の良い開発を心がけ、また、担当できる範囲を広げられるよう取り組みました。</p>
            </template>
            <template v-else>
              <p>大学卒業後、雑貨専門店の経営支援を行う会社で、デザインと販促動画制作を中心とした販売促進業務に3年半従事しました。</p>
              <p>その後Web関連にデザインの幅を広げようと転職したITベンチャー企業では、Webのデザインとコーディングを中心とした開発業務に2年半従事し、<br class="pc">1つの案件において、チラシ・Web・動画制作等を一括して担当することでスピード感のあるサービスリリースを行ってきました。</p>
              <p>現職のシステム開発会社では前職までの経験を活かしながら、フルスクラッチ開発業務の主にデザイン・コーディング担当として従事し4年になります。</p>
            </template>

            
          </div>

        </div>
        

      </section>

    <!-- </div> -->

    <!-- <div class="test"> -->
      <section class="section section_works" ref="section_skill">
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
                <router-link :to="{name:'works_detail', params:{id: item.id} }">
                  <!-- <p>{{item.id}}</p> -->
                  <!-- <p class="swiper_img_wrapper"><img :src="item.image" alt=""/></p> -->
                  <p class="swiper_img_wrapper">
                    <img :src="require(`@/assets/images/${item.icon}`)" alt=""/>
                  </p>
                </router-link>
              </div>
          </div>
          <!-- <div class="swiper-pagination"></div> -->
          <!-- <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div> -->
        </div>
      </section>

    <!-- </div> -->
    
    

    

    <!-- <p  ref="section_skill"><router-link :to="{name: 'resume'}">れじゅめへああああああ</router-link></p> -->

    <!-- <p>{{Works}}</p> -->

    <section class="section section_skill">
      <div :class="{'fadeInSkill' : visible_skill}" v-show="visible_skill">
        <p class="section_title">Skill</p>
        <!-- <p class="section_text">サンプルテキストサンプルテキストサンプルテキストサンプルテキスト<br>テキストテキストテキストテキストテキスト</p> -->



        <div class="">
          <div class="skill_box">
            <p class="skill_box_title">◆&nbsp;紙媒体のデザイン(チラシ、店頭POP、ラッピング用包装紙、ギフトシール、展示会用パネル等)</p>
            <p>・Illustrator、Photoshop（9年）</p>
          </div>

          <div class="skill_box">
            <p class="skill_box_title">◆&nbsp;Web媒体のデザイン・コーディング(LP、ECサイト、CMS、Webサービスサイト等)</p>
            <p>・Adobe XD(3年)</p>
            <p>・HTML5、CSS3(7-8年)</p>
            <p>・jQuery(6年)</p>
            <p>・gulp(sass、pug等)(4年)</p>
            <p>・Vue.js、Vuetify(2年半)</p>
            <p>・PHP、フレームワーク(ZendFramework、CakePHP)</p>
            <p>・CMSのカスタム、テーマ作成(Wordpress)</p>
            <p>・ECプラットフォームのカスタム、テーマ作成(EC-CUBE、Magento、Yahoo!ショッピング)</p>
            <p>・モバイルファースト、レスポンシブ対応、SEO対策(マークアップ、キーワード、画像→テキスト化等、GoogleAnalytics)</p>
            <p>・GoogleFormをカスタムしたお問合せフォーム</p>
          </div>

          <div class="skill_box">
            <p class="skill_box_title">◆&nbsp;アプリのデザイン(iOS、Android)</p>
            <p>・UI/UX</p>
          </div>

          <div class="skill_box">
            <p class="skill_box_title">◆&nbsp;動画制作</p>
            <p>・VideoStudio、Premiere、After Effectsを使用した動画作成経験（7年）</p>
          </div>

        </div>
      </div>
      

    </section>
  </div>
</template>

<script>
import Swiper from 'swiper/bundle'; 
import 'swiper/swiper-bundle.css';

import Rellax from 'rellax/rellax.min.js'

import Works from '@/resources/works.js'

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
      works_list: Works.works_list.slice().reverse(),
      hoverFlag: false,
      load: false,
      visible_about: false,
      visible_skill: false,
      lists: [], // works_list_doubleへ
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
      rect_about: 0,
      rect_skill: 0,
      
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
    rellax() {
      var rellax = new Rellax('.rellax', {
        // center: true,
      });
      console.log(rellax)
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
    },
    handleScrollAbout() {
      // console.log('visible_about', this.visible_about)
      if (!this.visible_about) {
        this.visible_about = window.pageYOffset > this.rect_about - 500;
      } else if(window.scrollY < 0){
        this.visible_about = !this.visible_about;
      }
    },
    handleScrollSkill() {
      // console.log('visible_skill', this.visible_skill)
      // console.log('test', this.$refs.section_skill.getBoundingClientRect().top)
      // console.log(window.pageYOffset, this.rect_skill - 1000)
      // スクロール量が絶対位置(-若干上)より多くなったら
      if (!this.visible_skill) {
        this.visible_skill = window.pageYOffset > this.rect_skill - 1600;
      }else if(window.scrollY < 0){
        this.visible_skill = !this.visible_skill;
      }
    },
  },
  created() {
    window.addEventListener("scroll", this.handleScrollAbout);
    window.addEventListener("scroll", this.handleScrollSkill);

    // swiper-slideが奇数の際のエラー、枚数が少ない際のエラー回避
      for(let i = 0; i < 2; i++) {
        for(let k=0; k < this.list.length; k++) {
        // for(let k=0; k < this.works_list.length; k++) {
          let item = this.works_list[k];
          // let item = this.list[k];
          this.lists.push(item)
        }
      }
  },
  mounted() {
    this.rect_about = this.$refs.section_about.getBoundingClientRect().top;
    this.rect_skill = this.$refs.section_skill.getBoundingClientRect().top;
    // console.log('rect', this.rect_about , this.rect_skill)

    // topイメージ読み込み
    this.load = true;
    // this.rellax();
    this.swiper();
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScrollAbout);
    window.removeEventListener("scroll", this.handleScrollSkill);
  },
};
</script>
