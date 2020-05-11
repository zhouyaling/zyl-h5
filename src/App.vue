<template>
  <div id="app" class="page-content">
    <div v-if="loading" class="loading">
      <img src="./assets/image/loading.png">
    </div>
    <div v-if="toast" class="toast">
      <div>{{ toast }}</div>
    </div>
    <transition :name="transitionName">
      <router-view/>
    </transition>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'App',
  data() {
    return {
      isShowTips: false, // 是否显示下载提示 test
      defaultDatetime: new Date(),
      transitionName: '',
      show: false
    }
  },
  computed: {
    ...mapGetters([
      'loading', 'toast', 'timeShow', 'timeChoose'
    ])
  },
  watch: {
    $route(to, from) {
      // console.log(to, from)
      console.log(to)
      if (to.path === '/') {
        this.show = false
      } else {
        this.show = true
      }
      if (to.meta.index > from.meta.index) {
        this.transitionName = 'slide-left'
        // console.log('left')
      } else {
        this.transitionName = 'slide-right'
        console.log('right')
      }
      document.title = to.meta.title
    }
  },
  created() {

  },
  mounted() {
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
  .go-back{
    position: fixed;
    right: 5vw;
    bottom: 10vh;
    z-index: 99;
    width: 10vw;
    height: 10vw;
    background: url('assets/image/gohome.png') no-repeat center;
    background-size: cover;
  }
 .loading,.toast,.timeLoading{
   position: fixed;
   top: 0;
   right: 0;
   bottom: 0;
   left: 0;
   z-index: 999;
   overflow: auto;
   -webkit-overflow-scrolling: touch;
   background: rgba(190,190,190,0.6);
   display: flex;
   justify-content: center;
   align-items: center;
   img{
     display: inline-block;
     width: 8vw;
     height: 8vw;
     animation: animal 1s infinite linear ;
   }
 }
  @keyframes animal {
    0%{
      transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      -webkit-transform: rotate(0deg);
    }
    100%{
      transform: rotate(-360deg);
      -ms-transform: rotate(-360deg);
      -webkit-transform: rotate(-360deg);
    }
  }

 .slide-right-enter-active,
 .slide-right-leave-active,
 .slide-left-enter-active,
 .slide-left-leave-active {
   will-change: transform;
   transition: all 500ms;
   position: absolute;
 }
 .slide-right-enter {
   opacity: 0;
   transform: translate3d(-100%, 0, 0);
 }
 .slide-right-leave-active {
   opacity: 0;
   transform: translate3d(100%, 0, 0);
 }
 .slide-left-enter {
   opacity: 0;
   transform: translate3d(100%, 0, 0);
 }
 .slide-left-leave-active {
   opacity: 0;
   transform: translate3d(-100%, 0, 0);
 }
  .toast{
    background: rgba(190,190,190,0.1);
    div{
      padding: 3vw 4vw;
      background-color: #222222;
      text-align: center;
      font-size: 4vw;
      border-radius: 2vw;
      color: white;
    }
  }
  .calendar_day{
    color: #222222 !important;
  }
  .timeLoading{
    background: rgba(190,190,190,0.6);
  }
</style>

