<template>
  <div class="view">
    <img class="t-banner" src="@/assets/image/policy.jpg" />
    <div class="banner-line"></div>
    <div class="title">
      我们的使命——
    </div>
    <div
      :class="{ 'run-animation': isShow1 }"
      class="slogan animation-container animation-fade-up"
    >
      服务好主业
      <div class="font-family-s">为电力行业财产及运营保驾护航</div>
    </div>
    <div
      :class="{ 'run-animation': isShow2 }"
      class="slogan animation-container animation-fade-up"
    >
      服务好职工
      <div class="font-family-s">为电力职工解后顾之忧 提高归属感</div>
    </div>
    <div
      :class="{ 'run-animation': isShow3 }"
      class="describe font-family-s animation-container animation-fade-up"
    >
      各级工会协同，共同打造电力职工独享的服务优势与价值优势
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
  height: 65vw;
}

.title {
  font-size: 4.533vw;
  line-height: 6vw;
  color: #040404;
  padding: 0 5.3vw;
  text-align: left;
  margin: 4vw;
}

.slogan {
  color: #006666;
  font-size: 5vw;
  font-weight: 600;
  line-height: 2;
  padding-left: 16vw;
  div {
    padding-left: 17.6vw;
    font-size: 3.8vw;
    color: #040404;
    font-weight: normal;
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
</style>
