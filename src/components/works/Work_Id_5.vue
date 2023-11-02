<template>
  <div>
    <WorkCaptioin :work="work[0]" class="mb30"/>

    <div class="work_ly_column_2">
      <div class="img_box">
        <p class="img_caption">Movie※音が出ます<span class="password">(Password：1972)</span></p>
        <iframe src="https://player.vimeo.com/video/874787435" width="400" height="300" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
      </div>
    </div>

    <WorkCaptioin :work="work[1]"/>

    <div class="work_ly_column_2">
      <div class="img_box img_pc">
        <p class="img_caption">Web(PC)</p>
        <img :src="require(`@/assets/images/work_5_pc_1.png`)" alt=""/>
      </div>
      <div class="img_box img_sp">
        <p class="img_caption">Web(SP)</p>
        <img :src="require(`@/assets/images/work_5_sp_1.png`)"  class="mb0" alt=""/>
      </div>
    </div>

    


    <!-- <div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/874787435?badge=0&amp;autopause=0&amp;quality_selector=1&amp;progress_bar=1&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="kodomo"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script> -->


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