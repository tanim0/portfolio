<template>
  <div>
    <WorkCaptioin :work="work[0]" class="mb30"/>

    <div class="work_ly_column_2">
      <div class="img_box img_movie">
        <p class="img_caption">Movie※音が出ます<span class="password">(Password：1972)</span></p>
        <iframe src="https://player.vimeo.com/video/874787435" width="400" height="300" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
      </div>
    </div>

    <WorkCaptioin :work="work[1]"/>

    <div class="work_ly_column_2">
      <div class="img_box img_pc">
        <p class="img_caption">Web(PC)</p>
        <img :src="require(`@/assets/images/work_5_pc_1.png`)" alt="こども免許個別販売LPPC版"/>
      </div>
      <div class="img_box img_sp">
        <p class="img_caption">Web(SP)</p>
        <img :src="require(`@/assets/images/work_5_sp_1.png`)" class="mb0" alt="こども免許個別販売LPSP版"/>
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