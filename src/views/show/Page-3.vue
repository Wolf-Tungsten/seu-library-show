<template>
  <div class="bg">
    <div class="content">
      <img class="center" width="90%;" src="../../assets/小馆标.png" />
      <div class="row animate__animated animate__fadeIn" style="justify-content:center;">
          <img class="hand-write" style="height:50px;" src="../../assets/进馆次数.png" />
      </div>
      <div class="row animate__animated animate__fadeIn" style="justify-content:center; animation-delay:1s; margin-top:10px;">
          <img class="hand-write" style="height:60px;" src="../../assets/在学院中排名.png" />
          <div class="print-font">{{entryCollegeRank}}</div>
      </div>
      <div class="row animate__animated animate__fadeIn" style="margin-top: 60px;justify-content:center; animation-delay:2s">
          <img style="height:30px;" src="../../assets/超过了.png" />
          <div class="print-font">{{entrySchoolRank}}%</div>
          <img style="height:50px;" src="../../assets/全校同届同学.png" />
      </div>
      <router-link to="/page-4" replace class="row animate__animated animate__fadeIn" style="justify-content:center; animation-delay:3s">
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
    entryCollegeRank(){
      return this.$store.state.payload.entryCollegeRank
    },
    entrySchoolRank(){
      return this.$store.state.payload.entrySchoolRank
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