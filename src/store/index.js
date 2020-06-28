import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

const vuexLocalStorage = new VuexPersistence({
  storage: window.localStorage,
  key:'library-show'
})

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [vuexLocalStorage.plugin],
  state: {
    token:'',
    payload:{
      name:'',
      firstEntryTime:'', // 首次进馆时间，字符串
      entryCount:0, // 进馆次数，整数
      entryCollegeRank:0, // 进馆次数学院排名，整数
      entrySchoolRank: '0', // 进馆次数全校排名，字符串表示的百分制小数，不带百分号
      firstBook:'', // 首次借阅图书，字符串表示，不带书名号
      checkoutCount:0, // 累积借阅次数，整数
      checkoutCollegeRank:0, // 借阅次数学院排名
      checkoutSchoolRank: '0', // 借阅次数学校排名，字符串表示的百分制小数，不带百分号
      recommendList:[], // 推荐书单，最多三个
    },
    zippedPayload:''
  },
  mutations: {
    token(state, payload) {
      state.token = payload
    },
    savePayload(state, payload) {
      state.payload = payload
    },
    saveZippedPayload(state, payload) {
      state.zippedPayload = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
