<template>
  <div class="bg">
    <div class="content">
      <img class="center animate__animated animate__fadeIn" width="90%;" src="../assets/欢迎页.png" />
      <div class="animate__animated animate__fadeIn" style="margin-top:30px; text-align:center; font-size:12px; animation-delay:1s">
        主办：共青团东南大学委员会<br>
        承办：计算机科学与工程学院、软件学院、人工智能学院<br>
        化学化工学院<br>
        生物科学与医学工程学院<br>
        材料科学与工程学院<br>
        法学院<br>
        协办：东南大学图书馆
      </div>
      <img @click="login" style="animation-delay:2s; width:160px; margin-top: 30px;" class="animate__animated animate__fadeIn center" src='../assets/点击开启按钮.png'/>
      <div style="font-size:12px; animation-delay:2s; margin-top: 15px;" class="animate__animated animate__fadeIn center">面向东南大学2020届本科毕业生开放</div>
    </div>
  </div>
</template>

<script>

export default {
  components: {
  },
  data() {
    return {
      device: {
        isDesktop: true,
        isMobile: true,
        isWechat: false
      }
    };
  },
  methods: {
    login(){
      if(this.$store.state.token){
        this.$router.replace('/loading')
      } else {
        window.location=`https://xgbxscwx.seu.edu.cn/cas-we-can/login?goto=${encodeURIComponent('https://xgbxscwx.seu.edu.cn/library-show/#/loading')}`
      }
    }
  },
  async created() {
  }
};
</script>

<style lang="less" scoped>
</style>