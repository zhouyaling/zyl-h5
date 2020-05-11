<template>
  <div class="view">
    <img class="t-banner" src="@/assets/image/cgjfw.png" />
    <div class="banner-line"></div>
    <div class="title">
      特别推出
      <span class="spec">车管家</span>专人专责服务，全面周到地 为您的爱车提供——
    </div>
    <div :class="{'run-animation':isShow1 }" class="slogan animation-container animation-fade-up">
      <div>
        <span>●</span>保养提醒服务
      </div>
      <div class="font-family-s">请在会员服务信息中完善“保养周期”信息</div>
    </div>
    <div :class="{'run-animation':isShow2 }" class="slogan animation-container animation-fade-up">
      <div>
        <span>●</span>车辆检审提醒
      </div>
      <div class="font-family-s">请在会员服务信息中完善“年审时间”信息</div>
    </div>
    <div :class="{'run-animation':isShow2 }" class="slogan animation-container animation-fade-up">
      <div>
        <span>●</span>保险到期提醒
      </div>
      <div class="font-family-s">请在会员服务信息中完善“保险到期时间”信息</div>
    </div>
    <div :class="{'run-animation':isShow2 }" class="slogan animation-container animation-fade-up">
      <div>
        <span>●</span>安检提醒服务
      </div>
    </div>
    <div :class="{'run-animation':isShow2 }" class="slogan animation-container animation-fade-up">
      <div>
        <span>●</span>恶劣天气提醒服务
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      isShow1: false,
      isShow2: false,
      isShow3: false
    };
  },
  created() {},
  mounted: function() {
    this.showAnimation();
  },

  methods: {
    showAnimation() {
      setTimeout(() => {
        this.isShow1 = true;
      }, 700);
      setTimeout(() => {
        this.isShow2 = true;
      }, 900);
      setTimeout(() => {
        this.isShow3 = true;
      }, 1300);
    }
  }
};
</script>
<style lang="scss" scoped>
.t-banner {
  display: block;
  width: 100%;
  height: auto;
}

.title {
  font-size: 4vw;
  line-height: 6vw;
  color: #040404;
  padding: 0;
  text-align: left;
  margin: 4vw 6vw;
}

.slogan {
  padding-left: 6vw;
  padding-bottom: 2vw;
  div:nth-of-type(1) {
    color: #006666;
    font-size: 5vw;
    font-weight: 600;
    line-height: 2;
   display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  div:nth-of-type(2) {
    padding-left: 3.8vw;
    font-size: 3.8vw;
    color: #040404;
    font-weight: normal;
  }
  span {
    padding-right: 0.8vw;
    font-size: 3.5vw;
    padding-top: -0.2vw;
  }
}

.describe {
  width: 95%;
  margin-top: 8vw;
  /*  margin-right: 10%;
    margin-left: 30%; */
  text-align: left;
  color: #a0a0a0;
  font-size: 3.8vw;
  line-height: 1.8;
  letter-spacing: 1px;
  padding-left: 55vw;
}

.spec {
  color: #008080;
  font-size: 8vw;
  font-weight: 600;
}
</style>
