<template>
  <div class="bg">
    <div class="content">
      <img class="center" width="90%;" src="../../assets/小馆标.png" />
      <div class="row animate__animated animate__fadeIn" style="justify-content:center;">
          <div class="print-font">{{firstEntryTime}}</div>
      </div>
      <div class="row animate__animated animate__fadeIn" style="justify-content:center; animation-delay:1s">
          <img class="hand-write" style="height:50px; margin-top:10px;" src="../../assets/我第一次刷卡进馆.png" />
      </div>
      <div class="row animate__animated animate__fadeIn" style="justify-content:center; animation-delay:2s">
          <img style="height:60px; margin-top:60px;" src="../../assets/在之后的大学生活中.png" />
      </div>
      <div class="row animate__animated animate__fadeIn" style="justify-content:center; animation-delay:3s">
          <div class="print-font">我累积进馆{{entryCount}}次</div>
      </div>
      <router-link to="/page-3" replace class="row animate__animated animate__fadeIn" style="justify-content:center; animation-delay:4s">
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
    firstEntryTime(){
      return this.$store.state.payload.firstEntryTime
    },
    entryCount(){
      return this.$store.state.payload.entryCount
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