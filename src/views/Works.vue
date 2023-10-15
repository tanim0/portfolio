<template>
  <div class="page page_works">
    <h2 class="page_title">Works</h2>

    <ul class="works_list">
      <li v-for="(work, index) in works_list" :key="index" class="work_list_item">
        <router-link :to="{name:'works_detail', params:{id: work.id} }">
          <p class="work_list_item_icon">
            <img :src="require(`@/assets/images/${work.icon}`)" alt=""/>
          </p>
          <p class="work_list_item_title">{{work.title}}</p>
          <p class="work_list_item_range">
            <!-- <span v-for="(category, index) in work.category" :key="index">[{{category}}]</span>
            &nbsp;&nbsp;&nbsp; -->

            <span v-for="(range, index) in work.range" :key="index">{{range}}&nbsp;<span class="slash">/</span>&nbsp;</span>
            <!-- <span v-if="work.inside">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;自社</span>
            <span v-else>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;他社様</span> -->
          </p>
        </router-link>
      </li>
    </ul>
    <p class="link_works_documents">
      <router-link to="">過去担当業務一覧ページへ</router-link>
    </p>
    
  </div>
</template>

<script>
import Works from '@/resources/works.js'
export default {
  data() {
    return {
      works_list: Works.works_list,
    }
  },
  components: {
    
  },
  computed: {
  },
  methods: {
  }
}
</script>