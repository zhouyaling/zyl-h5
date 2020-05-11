<template>
  <div class="view">
    <img class="t-banner" src="@/assets/image/spzlfw.png" />
    <div class="banner-line"></div>
    <div :class="{'run-animation':isShow1 }" class="slogan animation-container animation-fade-up">
      <div class="font-family-s text">
        <span class="text-tip">●</span>
        如果您不慎发生保险事故，别担心，无论案 件大小，马上联系您的
        <span class="text-spec">服务专员</span> ，他会告
        知您如何处置。他同时也是您本案的
        <span class="text-spec">索赔助理</span> ，无论大案小案，是否涉及三者或人 伤，他会协助您妥善面对，并协调公司资源给您支持。
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
  font-size: 4.533vw;
  line-height: 6vw;
  color: #040404;
  padding: 0;
  text-align: left;
  margin: 6vw;
}

.slogan {
  font-size: 6.5vw;
  font-weight: 600;
  line-height: 2;
  padding-left: 6vw;
  padding-top: 6vw;
  div {
    margin-left: 6vw;
    font-size: 3.8vw;
    color: #040404;
    font-weight: normal;
    margin-right: 4vw;
  }
}

.text {
  position: relative;
}

.text-tip {
  position: absolute;
  left: -5.5vw;
  font-size: 3.5vw;
  top: 0.3vw;
}

.text-spec {
  color: #008080;
  font-size: 5vw;
  font-weight: 600;
}
</style>
