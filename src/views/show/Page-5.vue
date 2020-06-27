<template>
  <div class="bg">
    <div class="content">
      <img class="center" width="90%;" src="../../assets/小馆标.png" />
      <div class="row animate__animated animate__fadeIn" style="justify-content:center;">
          <img class="hand-write" style="height:50px;" src="../../assets/借阅数量.png" />
      </div>
      <div class="row animate__animated animate__fadeIn" style="justify-content:center; animation-delay:1s; margin-top:10px;">
          <img class="hand-write" style="height:60px;" src="../../assets/在学院中排名.png" />
          <div class="print-font">{{checkoutCollegeRank}}</div>
      </div>
      <div class="row animate__animated animate__fadeIn" style="margin-top: 60px;justify-content:center; animation-delay:2s">
          <img style="height:30px;" src="../../assets/超过了.png" />
          <div class="print-font">{{checkoutSchoolRank}}%</div>
          <img style="height:50px;" src="../../assets/全校同届同学.png" />
      </div>
      <router-link to="/page-6" class="row animate__animated animate__fadeIn" style="justify-content:center; animation-delay:3s">
          <img style="height:50px;margin-top:60px;" src="../../assets/下一页.png" />
      </router-link>
    </div>
  </div>
</template>

<script>

export default {
  components: {
  },
  data() {
    return {
      checkoutCollegeRank:1,
      checkoutSchoolRank: 97.2,
    };
  },
  methods: {
  },
  async created() {
  }
};
</script>

<style lang="less" scoped>
</style>