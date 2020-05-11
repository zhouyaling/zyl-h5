const app = {
  state: {
    village: {},
    loading: false,
    toast: '',
    timeShow: false,
    timeChoose: '',
    time: ''
  },
  mutations: {
    SET_VILLAGE: (state, data) => {
      state.userInfo = data
    },
    SET_SHOWLOADING: (state, data) => {
      state.loading = data
    },
    SET_TIMESHOW: (state, data) => {
      state.timeShow = data
    },
    SET_TIMECHOOSE: (state, data) => {
      state.timeChoose = data
    },
    SET_TOAST: (state, data) => {
      if (data) {
        state.loading = false
      }
      state.toast = data
      state.time = setTimeout(function() {
        state.toast = ''
        state.time = null
      }, 1800)
    }
  },
  actions: {
  }
}

export default app
