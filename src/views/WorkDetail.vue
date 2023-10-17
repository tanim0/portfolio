<template>
  <div class="page page_works_detail">
    <div class="works_detail_inner">
      <!-- <WorksSlot>
        <template v-slot:work_title>未来太郎</template>
        <template v-slot:n>未来太郎</template>
      </WorksSlot> -->

      <WorkDetailPaging :work="work" :works_list="works_list"/>

      <!-- 制作物が単一の場合はキャプションを表示-->
      <!-- (複数の場合は子コンポーネントにworks配列を渡して任意の場所で表示) -->
      <WorkCaptioin :work="works[0]" v-if="work.works.length < 2"/>

      <!-- 各ページ毎のコンテンツ -->
      <component :is="workDetailComponent" :works="works"/>

      <WorkDetailPaging :work="work" :works_list="works_list"/>

    </div>
  </div>
</template>

<script>
import Works from '@/resources/works.js'
import WorksSlot from '@/components/works/WorksSlot.vue'
import WorkCaptioin from '@/components/works/WorkCaptioin.vue'
import WorkDetailPaging from '@/components/works/WorkDetailPaging.vue'
import Work1 from '@/components/works/Work_Id_1.vue'
import Work2 from '@/components/works/Work_Id_2.vue'
import Work3 from '@/components/works/Work_Id_3.vue'
import Work4 from '@/components/works/Work_Id_4.vue'
import Work5 from '@/components/works/Work_Id_5.vue'
import Work6 from '@/components/works/Work_Id_6.vue'
import Work7 from '@/components/works/Work_Id_7.vue'
import Work8 from '@/components/works/Work_Id_8.vue'
import Work9 from '@/components/works/Work_Id_9.vue'

export default {
  components: {
    WorksSlot,
    WorkCaptioin,
    WorkDetailPaging,
    Work1,
    Work2,
    Work3,
    Work4,
    Work5,
    Work6,
    Work7,
    Work8,
    Work9
  },
  data() {
    return {
      works_list: Works.works_list,
    }
  },
  computed: {
    id() {
      return this.$route.params.id
    },
    work() {
      // パラメーターと同一idのworkオブジェクトを返す
      return this.works_list.filter((el) => el.id == this.id)[0]
    },
    works() {
      // パラメーターと同一idのworkオブジェクト内のworks配列を返す
      return this.works_list.filter((el) => el.id == this.id)[0].works
    },
    workDetailComponent() {
      // パラメーターに対応したidを持つコンポーネント
      return "Work"+this.id;
    }
  },
  methods: {
  }
}
</script>

<style>

</style>