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
  components: {},
  data() {
    return {
      device: {
        isDesktop: true,
        isMobile: true,
        isWechat: false
      }
    };
  },
  methods: {},
  async created() {
    // TODO:从store读取token并获取数据
    // 获取wxConfig
    let urlComponents = ("" + window.location).split("?");
    let ticket = null;
    if (urlComponents.length === 2 && urlComponents[1].startsWith("ticket=")) {
      ticket = urlComponents[1].split("=")[1];
    }
    if (ticket) {
      let authRes = await this.$axios.get(`/auth?ticket=${ticket}`);
      authRes = authRes.data;
      if (authRes.success) {
        let token = authRes.result;
        this.$store.commit("token", token);
        window.location = "https://xgbxscwx.seu.edu.cn/library-show/#/loading";
      } else {
        if (authRes.reason === "无数据") {
          alert("抱歉，本次活动仅向东南大学2020届本科毕业生开放！");
        } else {
          window.location =
            "https://xgbxscwx.seu.edu.cn/library-show/#/loading";
        }
      }
    }

    // 没有 ticket
    let token = this.$store.state.token;
    if (!token) {
      // store 里也没有token，滚去认证
      window.location = `https://xgbxscwx.seu.edu.cn/cas-we-can/login?goto=${encodeURIComponent(
        "https://xgbxscwx.seu.edu.cn/library-show/#/loading"
      )}`;
      return;
    }

    // token有了，开始获取数据
    let payload = await this.$axios.get(`/library?token=${token}`);
    payload = payload.data.result;
    this.$store.commit("savePayload", payload);
    let zippedPayload = [
      payload.name,
      payload.firstEntryTime, // 首次进馆时间，字符串
      payload.entryCount, // 进馆次数，整数
      payload.entryCollegeRank, // 进馆次数学院排名，整数
      payload.entrySchoolRank, // 进馆次数全校排名，字符串表示的百分制小数，不带百分号
      payload.firstBook, // 首次借阅图书，字符串表示，不带书名号
      payload.checkoutCount, // 累积借阅次数，整数
      payload.checkoutCollegeRank, // 借阅次数学院排名
      payload.checkoutSchoolRank, // 借阅次数学校排名，字符串表示的百分制小数，不带百分号
      payload.recommendList // 推荐书单，最多三个
    ];
    zippedPayload = encodeURIComponent(JSON.stringify(zippedPayload));
    this.$store.commit("saveZippedPayload", zippedPayload);
    let wxConfig = await this.$axios.post(
      "https://xgbxscwx.seu.edu.cn/api/wxConfig",
      { url: ("" + window.location).split("#")[0] }
    );
    wx.config(wxConfig.data.result);
    wx.ready(async () => {
      wx.updateTimelineShareData({
        title: `【东南大学图书馆】${payload.name}的毕业报告单`, // 分享标题
        link: `https://xgbxscwx.seu.edu.cn/library-show/#/report/${zippedPayload}`, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        imgUrl: "https://xgbxscwx.seu.edu.cn/library-show/logo.png", // 分享图标
        success: function() {
          console.log('Timeline分享设置成功')
        }
      });
      wx.updateAppMessageShareData({
        title: `【东南大学图书馆】${payload.name}的毕业报告单`, // 分享标题
        link: `https://xgbxscwx.seu.edu.cn/library-show/#/report/${zippedPayload}`, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        imgUrl: "https://xgbxscwx.seu.edu.cn/library-show/logo.png", // 分享图标
        success: function() {
          console.log('AppMessage分享设置成功')
        }
      });
    });
    this.$router.replace('/page-1')
  }
};
</script>

<style lang="less" scoped>
.line-scale > div {
  background-color: #44595d;
}
</style>