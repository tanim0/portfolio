<template>
  <section class="caption_box">
    <h2 class="work_title">{{work.title}}
      <a v-if="work.url" class="work_link" :href="work.url" target="_brank" rel="noopener noreferrer">
        <span class="material-symbols-outlined">open_in_new</span>
      </a>
    </h2>
    <p class="work_time">{{work.period}}</p>
    <p v-if="work.development_environment" class="work_environment">開発環境&nbsp;&nbsp;-&nbsp; 
      {{work.development_environment}}
    </p>
    <p v-if="work.member" class="work_member">メンバー&nbsp;&nbsp;-&nbsp; 
      {{work.member}}
    </p>
    <p class="work_range">part：
      <span v-for="(range, index) in work.range" :key="index">{{range}}&nbsp;<span class="slash">&#9585;</span>&nbsp;</span>
    </p>
    <p v-if="work.skill.length > 0" class="work_skill">skill：
      <span v-for="(skill, index) in work.skill" :key="index">{{skill}}&nbsp;<span class="slash">&#9585;</span>&nbsp;</span>
    </p>
    <p class="work_skill">tool：
      <span v-for="(tool, index) in work.tool" :key="index">{{tool}}&nbsp;<span class="slash">&#9585;</span>&nbsp;</span>
    </p>

    <div class="work_description">
      <p v-for="(val, index) in work.description" :key="index">{{val}}</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'WorkCaption',
  props: [
    'work'
  ]

}
</script>

<style>

</style>