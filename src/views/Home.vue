<template>
  <div class="bg">
    <div class="content">
      <img class="center animate__animated animate__fadeIn" width="90%;" src="../assets/欢迎页.png" />
      <img @click="login" style="animation-delay:1s; width:160px; margin-top: 200px;" class="animate__animated animate__fadeIn center" src='../assets/点击开启按钮.png'/>
      <div style="font-size:12px; animation-delay:1s; margin-top: 15px;" class="animate__animated animate__fadeIn center">面向东南大学2020届本科毕业生开放</div>
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