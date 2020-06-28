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
      name:'高睿昊',
      firstEntryTime:'2018年11月4日 5:14', // 首次进馆时间，字符串
      entryCount:114514, // 进馆次数，整数
      entryCollegeRank:1, // 进馆次数学院排名，整数
      entrySchoolRank: '97.2', // 进馆次数全校排名，字符串表示的百分制小数，不带百分号
      firstBook:'JavaScript从入门到精通', // 首次借阅图书，字符串表示，不带书名号
      checkoutCount:114, // 累积借阅次数，整数
      checkoutCollegeRank:1, // 借阅次数学院排名
      checkoutSchoolRank: '97.2', // 借阅次数学校排名，字符串表示的百分制小数，不带百分号
      recommendList:['C++从入门到精通','高等数学'], // 推荐书单，最多三个
    }
  },
  mutations: {
    token(state, payload) {
      state.token = payload
    },
    savePayload(state, payload) {
      state.payload = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
