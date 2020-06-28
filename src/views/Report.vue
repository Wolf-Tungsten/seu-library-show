<template>
  <div class="bg">
    <div class="content">
      <img class="center" width="70%;" src="../assets/小馆标.png" />
      <div class="row animate__animated animate__fadeIn" style="">
          <div class="print-font" style="margin-left:40px;">{{name}}</div>
          <img class="hand-write" style="height:30px;margin-left:10px;" src="../assets/同学.png" />
      </div>
      <div class="row animate__animated animate__fadeIn" style="justify-content:flex-start;margin-top:20px;">
          <img class="hand-write" style="height:40px;margin-right:10px; margin-left:40px;" src="../assets/本科期间累积进馆.png" />
          <div class="print-font">{{entryCount}}</div>
          <img class="hand-write" style="height:30px;margin-left:10px;" src="../assets/次，.png" />
          <img class="hand-write" style="height:30px;margin-left:40px;margin-right:10px;" src="../assets/借阅书刊.png" />
          <div class="print-font">{{checkoutCount}}</div>
          <img class="hand-write" style="height:25px;margin-left:10px;margin-right:20px;" src="../assets/次。.png" />
      </div>
      <div v-if="checkoutSchoolRank>entrySchoolRank" class="row animate__animated animate__fadeIn" style="justify-content:flex-start;margin-top:10px;">
          <img class="hand-write" style="height:55px;margin-right:10px;margin-left:40px;" src="../assets/其中，借阅次数超过了.png" />
          <div class="print-font">{{checkoutSchoolRank}}%</div>
          <img class="hand-write" style="height:40px;margin-right:10px;margin-left:40px;" src="../assets/的全校同届同学。.png" />
      </div>
      <div v-else class="row animate__animated animate__fadeIn" style="justify-content:flex-start;margin-top:10px;">
          <img class="hand-write" style="height:45px;margin-right:10px;margin-left:40px;" src="../assets/其中，进馆次数超过了.png" />
          <div class="print-font">{{entrySchoolRank}}%</div>
          <img class="hand-write" style="height:40px;margin-right:10px;margin-left:40px;" src="../assets/的全校同届同学。.png" />
      </div>
      <div v-if="storeName === name" class="animate__animated animate__fadeIn" style="display:flex; flex-direction:column; align-items:center;justify-content:center; margin-top:10px;">
          <!-- 如果显示的是自己的报告，则显示二维码 -->
          <img style="width: 30%; margin-top:20px;" src="../assets/qrcode.png" />
          <div style="margin-top:20px;">截图或者点击右上方按钮</div>
          <div>把我的报告【分享到朋友圈】</div>
      </div>
      <router-link to='/' v-else class="row animate__animated animate__fadeIn" style="justify-content:center;">
          <img style="height:50px;margin-top:60px;" src="../assets/查看我的报告.png" />
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
      name:'',
      entryCount:0,
      checkoutCount:0,
      entrySchoolRank:'',
      checkoutSchoolRank:'',
    };
  },
  computed: {
    storeName(){
      return this.$store.state.payload.name
    }
  },
  async created() {
    if(!this.$route.params.payload){
      this.$router.replace('/')
    }
    let payload = JSON.parse(this.$route.params.payload)
    this.name = payload[0]
    this.entryCount = payload[2]
    this.checkoutCount = payload[6]
    this.entrySchoolRank = payload[4]
    this.checkoutSchoolRank = payload[8]
  }
};
</script>

<style lang="less" scoped>
</style>