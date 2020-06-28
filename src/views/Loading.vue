<template>
  <div class="bg">
    <div class="content">
      <img class="center animate__animated animate__fadeIn" width="90%;" src="../assets/欢迎页.png" />
      <div class="loader" style="width:100%; display:flex; justify-content:center;margin-top:80px;">
          <div class="line-scale">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
          </div>
      </div>
      <div class="row" style="justify-content:center;margin-top:30px;">
          <div class="print-font">正在加载...</div>
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
      device: {
        isDesktop: true,
        isMobile: true,
        isWechat: false
      }
    };
  },
  methods: {
  },
  async created() {
    // TODO:从store读取token并获取数据
    // 获取wxConfig
    let wxConfig = await this.$axios.post('https://xgbxscwx.seu.edu.cn/api/wxConfig',{url:(''+window.location).split('#')[0]})
    wx.config(wxConfig.data.result)
  }
};
</script>

<style lang="less" scoped>
.line-scale>div {
    background-color:#44595D;
}
</style>