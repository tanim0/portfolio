<template>
  <div class="section_wrap">
    <section class="section_top">
      <p id="top_img" class="top_img" :class="{'active': load}"><img src="../assets/images/img_top.jpeg" alt=""></p>
      <div class="top_txt">
        <p class="top_txt_name">
          <template v-if="$store.state.user">MOMOKA<br>TANIFUJI</template>
          <template v-else>MOMOKA<br>TANIFUJI</template>
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

    <section class="section section_about" ref="section_about">
      <div :class="{'fadeInAbout' : visible_about}" v-show="visible_about">
        <p class="section_title">About</p>
        <div class="section_text">
          <template v-if="$store.state.user">
            <p>大学卒業後、雑貨専門店の経営支援を行う会社で、デザインと販促動画制作を中心とした販売促進業務に3年半従事しました。</p>
            <p>その後Web関連に挑戦しようと転職したITベンチャー企業では、Webのデザインとコーディングを中心とした開発業務に2年半従事し、<br class="pc">1つの案件において、チラシ・Web・動画制作等を一括して担当することでスピード感のあるサービスリリースを行ってきました。</p>
            <p>最終職歴ではフルスクラッチのWebシステムや自社サービス・LP等のデザイン・コーディング業務に4年間従事しました。<br>デザインではUI/UXを意識し使いやすいシステム・サービスとなるよう心がけ、<br>コーディングではプロダクトに応じたコーディングをタスクランナーやフレームワークを使用し、効率的に行えるよう心がけました。</p>
          </template>
          <template v-else>
            <p>大学卒業後、雑貨専門店の経営支援を行う会社で、デザインと販促動画制作を中心とした販売促進業務に3年半従事しました。</p>
            <p>その後Web関連に挑戦しようと転職したITベンチャー企業では、Webのデザインとコーディングを中心とした開発業務に2年半従事し、<br class="pc">1つの案件において、チラシ・Web・動画制作等を一括して担当することでスピード感のあるサービスリリースを行ってきました。</p>
            <p>最終職歴ではフルスクラッチのWebシステムや自社サービス・LP等のデザイン・コーディング業務に4年間従事しました。<br>デザインではUI/UXを意識し使いやすいシステム・サービスとなるよう心がけ、<br>コーディングではプロダクトに応じたコーディングをタスクランナーやフレームワークを使用し、効率的に行えるよう心がけました。</p>
          </template>
        </div>
      </div>
    </section>

    <section class="section section_works" ref="section_skill">
      <p class="section_title">Works
        <router-link to="works">
          <span v-if="!hoverFlag" v-on:mouseover="mouseOverAction" v-on:mouseleave="mouseLeaveAction" class="material-symbols-outlined">arrow_circle_right</span>
          <span v-if="hoverFlag" v-on:mouseover="mouseOverAction" v-on:mouseleave="mouseLeaveAction"  class="material-symbols-outlined fill">arrow_circle_right</span>
        </router-link>
      </p>

      <div class="swiper" ref="mySwiper">
        <div class="swiper-wrapper">
            <div v-for="(item, index) in lists" class="swiper-slide" :key="index">
              <router-link :to="{name:'works_detail', params:{id: item.id} }">
                <p class="swiper_img_wrapper">
                  <img :src="require(`@/assets/images/${item.icon}`)" alt=""/>
                </p>
              </router-link>
            </div>
        </div>
      </div>
    </section>

    <section class="section section_skill">
      <div :class="{'fadeInSkill' : visible_skill}" v-show="visible_skill">
        <p class="section_title">Skill</p>

        <div class="">
          <dl class="skill_box">
            <dt class="skill_box_title">◆&nbsp;Web媒体のデザイン・コーディング(LP、ECサイト、CMS、Webサービスサイト等)</dt>
            <dd>・Adobe XD(3年)</dd>
            <dd>・HTML5、CSS3(7-8年)</dd>
            <dd>・jQuery(6年)</dd>
            <dd>・gulp(sass、pug等)(4年)</dd>
            <dd>・Vue.js、Vuetify(2年半)</dd>
            <dd>・PHP、フレームワーク(ZendFramework、CakePHP)</dd>
            <dd>・CMSのカスタム、テーマ作成(Wordpress)</dd>
            <dd>・ECプラットフォームのカスタム、テーマ作成(EC-CUBE、Magento、Yahoo!ショッピング)</dd>
            <dd>・モバイルファースト、レスポンシブ対応、SEO対策(マークアップ、キーワード、画像→テキスト化等、GoogleAnalytics)</dd>
            <dd>・GoogleFormをカスタムしたお問合せフォーム</dd>
          </dl>

          <dl class="skill_box">
            <dt class="skill_box_title">◆&nbsp;アプリのデザイン(iOS、Android)</dt>
            <dd>・UI/UX</dd>
          </dl>

          <dl class="skill_box">
            <dt class="skill_box_title">◆&nbsp;紙媒体のデザイン(チラシ、店頭POP、ラッピング用包装紙、ギフトシール、展示会用パネル等)</dt>
            <dd>・Illustrator、Photoshop（9年）</dd>
          </dl>

          <dl class="skill_box">
            <dt class="skill_box_title">◆&nbsp;動画編集ソフト</dt>
            <dd>・VideoStudio(3年半)、Premiere・After Effects(3年)</dd>
          </dl>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Swiper from 'swiper/bundle'; 
import 'swiper/swiper-bundle.css';
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
    swiper() {
      var mySwiper = new Swiper('.swiper', {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 15,
        threshold:10,
        speed: 7000,
        allowTouchMove: false,
        autoplay: {
          delay: 0,
          disableOnInteraction: false,
        },
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
      if (!this.visible_about) {
        this.visible_about = window.pageYOffset > this.rect_about - 500;
      } else if(window.scrollY < 0){
        this.visible_about = !this.visible_about;
      }
    },
    handleScrollSkill() {
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
      for(let k=0; k < this.works_list.length; k++) {
        let item = this.works_list[k];
        this.lists.push(item)
      }
    }
  },
  mounted() {
    this.rect_about = this.$refs.section_about.getBoundingClientRect().top;
    this.rect_skill = this.$refs.section_skill.getBoundingClientRect().top;

    // topイメージ読み込み
    this.load = true;
    this.swiper();
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScrollAbout);
    window.removeEventListener("scroll", this.handleScrollSkill);
  },
};
</script>
