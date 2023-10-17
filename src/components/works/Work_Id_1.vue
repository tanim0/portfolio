<template>
  <div> 
    <WorkCaptioin :work="work[0]"/>

    <!-- <div class="work_ly_column_2"> -->
      <div class="work_ly_column_2">
        <div class="img_box img_stamp">
          <p class="img_caption">スタンプカード&nbsp;&nbsp;W91×H55(オモテ&#9585;ウラ)</p>
          <img :src="require(`@/assets/images/works/work_1_card_1.png`)" alt=""/>
        </div>
        <div class="img_box img_rough">
          <p class="img_caption">ラフ</p>
          <img :src="require(`@/assets/images/works/work_1_rough_1.png`)" alt=""/>
          <img :src="require(`@/assets/images/works/work_1_rough_2.png`)" alt=""/>
        </div>
      </div>
    <!-- </div> -->

    <WorkCaptioin :work="work[1]"/>

    <div class="work_ly_column_2">
      <div class="img_box img_stamp">
        <p class="img_caption">スタンプカード&nbsp;&nbsp;W91×H55(オモテ&#9585;ウラ)</p>
        <img :src="require(`@/assets/images/works/work_1_card_2.png`)" alt=""/>
      </div>
      <div class="img_box img_movie pc">
        <p class="img_caption">Movie※音が出ます<span class="password">(Password：1972)</span></p>
        <iframe src="https://player.vimeo.com/video/190108729" width="400" height="300" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
      </div>
      <div class="img_box img_movie sp">
        <p class="img_caption">Movie※音が出ます<span class="password">(Password：1972)</span></p>
        <iframe src="https://player.vimeo.com/video/190108729" width="400" height="300" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
      </div>
    </div>

  </div>
</template>

<script>
import WorkCaptioin from '@/components/works/WorkCaptioin.vue'

export default {
  props: [
    'works'
  ],
  components: {
    WorkCaptioin
  },
  data() {
    return {
      work: this.works,
    }
  }
}
</script>

<style>

</style>