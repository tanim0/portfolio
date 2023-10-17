<template>
  <div class="works_detail_paging">
    <p v-if="work.id < works_list.length">
      <router-link :to="{name:'works_detail', params:{id: work.id+1} }">&lt;&nbsp;&nbsp;prev</router-link>
    </p>
    <p v-else class="disable">&lt;&nbsp;&nbsp;prev</p>|
    <p>
      <router-link :to="{name: 'works'}">works</router-link>
    </p>|
    <p v-if="work.id > 1">
      <router-link :to="{name:'works_detail', params:{id: work.id-1} }">next&nbsp;&nbsp;&gt;</router-link>
    </p>
    <p v-else class="disable">prev&nbsp;&nbsp;&gt;</p>
  </div>
</template>

<script>
export default {
  props: [
    'work',
    'works_list'
  ]
}
</script>

<style>

</style>