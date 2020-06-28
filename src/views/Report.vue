<template>
  <div class="bg">
    <div class="content">
      <img class="center" width="90%;" src="../assets/小馆标.png" />
      <div class="row animate__animated animate__fadeIn" style="justify-content:center;">
          <img class="hand-write" style="height:120px;" src="../assets/根据我的借阅记录.png" />
      </div>
      <div v-for="item in recommendList" :key="item" class="row animate__animated animate__fadeIn" style="justify-content:center; animation-delay:1s; margin-top:10px;">
          <div class="print-font">《{{item}}》</div>
      </div>
      <div class="row animate__animated animate__fadeIn" style="justify-content:center; animation-delay:2s; margin-top:40px;">
        <router-link to="/page-1">
          <img style="height:50px;" src="../assets/再看一次.png" />
        </router-link>
        <router-link to="/page-7">
          <img style="height:50px;margin-left:20px;" src="../assets/生成我的报告单.png" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  components: {
  },
  data() {
    return {
      recommendList:['C++从入门到精通','高等数学']
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