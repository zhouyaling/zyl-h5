<template>
  <div class="view">
    <img class="t-banner" src="@/assets/image/yyzz_t.jpg" />
    <div class="banner-line"></div>
    <div class="content-box reset-box">
      <h5
        class="reset-title font-r animation-container animation-fade-right"
        v-bind:class="{ 'run-animation': isShow }"
      >
        不只是价格更优！
      </h5>
      <p
        class="color-black-8 font-family-s animation-container animation-fade-left"
        v-bind:class="{ 'run-animation': isShow1 }"
      >
        ——合规前提下，保持最优价格
      </p>
      <h5
        class="reset-title  color-green-6 animation-container animation-fade-right"
        v-bind:class="{ 'run-animation': isShow }"
      >
        更重要的是
      </h5>
      <div
        class="text-box animation-container animation-fade-up"
        v-bind:class="{ 'run-animation': isShow1 }"
      >
        <p class="color-black-8 font-family-s">赔付更宽松、更简捷</p>
        <p class="color-black-8 font-family-s">服务更全面、更贴心</p>
        <p class="color-black-8 font-family-s">价值更丰富、更优厚</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      isShow: false,
      isShow1: false,
      isShow2: false
    };
  },
  created() {},
  mounted() {
    this.showAnimation();
  },

  methods: {
    showAnimation() {
      setTimeout(() => {
        this.isShow = true;
        this.isShow2 = true;
      }, 700);

      setTimeout(() => {
        this.isShow1 = true;
      }, 800);
    }
  }
};
</script>
<style lang="scss" scoped>
.view {
  background-image: url(../../assets/image/car.jpg);
  background-size: 45%;
  background-repeat: no-repeat;
  background-position: 95% 95%;
}

.t-banner {
  display: block;
  width: 100%;
  /*height: 38%;*/
}

.text-box {
  /*margin-left: 12%;*/
}

.reset-title {
  margin-top: 15%;
  font-size: 6.4vw;
  color: red;
}

.reset-box {
  margin: 0 auto 0 20%;
}

.reset-box p {
  font-size: 1.5rem;
  padding-left: 20%;
}
</style>
