<template>
  <div class="bg">
    <div class="content">
      <img class="center animate__animated animate__fadeIn" width="90%;" src="../../assets/小馆标.png" />
      <div class="row animate__animated animate__fadeIn" style="animation-delay:1s">
          <img class="hand-write" style="margin-left:40px;" src="../../assets/我是.png"/>
          <div class="print-font" style="margin-left:10px;">{{name}}</div>
      </div>
      <div class="row animate__animated animate__fadeIn" style="justify-content:flex-end; animation-delay:1s">
          <img class="hand-write" style="margin-right:40px; height:50px; margin-top:10px;" src="../../assets/东南大学2020届本科毕业生.png" />
      </div>
      <div class="row animate__animated animate__fadeIn" style="justify-content:center; animation-delay:2s">
          <img style="width:80%;margin-top:40px;" src="../../assets/这是我与东南大学图书馆的.png" />
      </div>
      <router-link to="/page-2" class="row animate__animated animate__fadeIn" style="justify-content:center; animation-delay:3s">
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
    return {}
  },
  methods: {
  },
  computed: {
    name(){
      return this.$store.state.payload.name
    }
  },
  async created() {
  }
};
</script>

<style lang="less" scoped>
</style>