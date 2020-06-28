<template>
  <div class="bg">
    <div class="content">
      <img class="center" width="90%;" src="../../assets/小馆标.png" />
      <div class="row animate__animated animate__fadeIn" style="justify-content:center;">
          <img class="hand-write" style="height:120px;" src="../../assets/根据我的借阅记录.png" />
      </div>
      <div v-for="item in recommendList" :key="item" class="row animate__animated animate__fadeIn" style="justify-content:center; animation-delay:1s; margin-top:10px;">
          <div class="print-font" style="font-size: 6vw; text-align:center;">《{{item}}》</div>
      </div>
      <div class="row animate__animated animate__fadeIn" style="justify-content:center; animation-delay:2s; margin-top:40px;">
        <router-link to="/page-1" replace>
          <img style="height:50px;" src="../../assets/再看一次.png" />
        </router-link>
        <div @click="report">
          <img style="height:50px;margin-left:20px;" src="../../assets/生成我的报告单.png" />
        </div>
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
    };
  },
  methods: {
    report(){
      this.$router.replace(`/report/${this.$store.state.zippedPayload}`)
    }
  },
  computed:{
    recommendList(){
      return this.$store.state.payload.recommendList
    }
  },
  async created() {
    if(!this.$store.state.token){
      this.$router.replace('/')
    }
  }
};
</script>

<style lang="less" scoped>
</style>