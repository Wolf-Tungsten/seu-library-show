<template>
  <div class="bg">
    <div class="content">
      <img class="center" width="90%;" src="../../assets/小馆标.png" />
      <div v-if="firstBook" class="row animate__animated animate__fadeIn" style="justify-content:center;">
          <div class="print-font" style="font-size: 6vw; text-align: center; width: 80%;">《{{firstBook}}》</div>
      </div>
      <div v-if="firstBook" class="row animate__animated animate__fadeIn" style="justify-content:center; animation-delay:1s">
          <img class="hand-write" style="height:50px; margin-top:10px;" src="../../assets/是我借阅的第一本书.png" />
      </div>
      <div class="row animate__animated animate__fadeIn" style="justify-content:center; animation-delay:2s; margin-top:60px;">
          <img style="height:50px;" src="../../assets/之后我累积借阅书刊.png" />
          <div class="print-font">{{checkoutCount}}</div>
          <img style="height:36px;" src="../../assets/次.png" />
      </div>
      <router-link to="/page-5" class="row animate__animated animate__fadeIn" style="justify-content:center; animation-delay:3s">
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
    };
  },
  methods: {
  },
  computed:{
    firstBook(){
      return this.$store.state.payload.firstBook
    },
    checkoutCount(){
      return this.$store.state.payload.checkoutCount
    }
  },
  async created() {
  }
};
</script>

<style lang="less" scoped>
</style>