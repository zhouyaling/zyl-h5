<template>
  <div class="view">
    <div class="img-box">
      <img src="@/assets/image/1223.jpg" />
      <div class="banner-line reset"></div>
    </div>
    <!--<div class="wrap1">-->
    <!--<p class="animation-container animation-fade-right" v-bind:class="{'run-animation':isShow }" >在别的公司，您是一个普通的车险客户</p>-->
    <!--<p class="animation-container animation-fade-right" v-bind:class="{'run-animation':isShow1 }" >在国网英大，您就是我们贴心维护的</p>-->
    <!--<p class="animation-container animation-fade-right"  v-bind:class="{'run-animation':isShow1 }">“使命VIP”!</p>-->
    <!--</div>-->
    <div
      class="wrap2 content-box animation-container animation-fade-right"
      v-bind:class="{ 'run-animation': isShow2 }"
    >
      <h5>★ 各项免费活动贯穿全年</h5>
      <p class="font-family-s">
        为期一月的“315
        客户节”活动、"泰和迎春"专题服务活动、"泰和金秋"专题服务活动、“零赔付”客户关爱活动
      </p>
      <h5>★ 与德国 "伍尔特"深度合作</h5>
      <p class="font-family-s">
        联合德国顶级养活品牌“伍尔特”引领科学保养，尊享 高端特惠（承保职工 5.5
        折，未承保职工 7.5 折）
      </p>
      <h5>★ 与"途虎"、"滴滴"深度合作</h5>
      <p class="font-family-s">
        联合“途虎养车”、“滴滴代驾”连锁店，提供特别优待或部分免费服务
      </p>
      <div
        class="spec-text animation-container animation-fade-up"
        v-bind:class="{ 'run-animation': isShow3 }"
      >
        我们仍在不断打造无限丰富的特惠价值服务！
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
      isShow2: false,
      isShow3: false
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
      }, 700);

      setTimeout(() => {
        this.isShow1 = true;
      }, 800);

      setTimeout(() => {
        this.isShow2 = true;
      }, 900);

      setTimeout(() => {
        this.isShow3 = true;
      }, 1000);
    }
  }
};
</script>
<style lang="scss" scoped>
.img-box {
  margin-bottom: 2%;
}
.img-box img {
  width: 100%;
}

.wrap1 {
  position: absolute;
  width: 53%;
  right: 5%;
  top: 4%;
  color: #006666;
  font-size: 1.8rem;
  font-weight: 700;
  letter-spacing: 0.1rem;
}

.wrap1 > p:nth-of-type(1) {
  margin-bottom: 1.5rem;
}

.wrap1 > p:nth-of-type(3) {
  margin-bottom: 1.5rem;
  text-align: right;
  font-size: 2rem;
}

.wrap2 {
  position: absolute;
}

.wrap2 h5 {
  color: #c00400;
}

.wrap2 p {
  color: #a0a0a0;
  padding-left: 2rem;
  /*text-indent: 2rem;*/
}

.spec-text {
  font-size: 4.5vw;
  text-align: center;
  color: #006666;
  text-indent: 0px;
  margin: 2rem -5% 0 -5%;
}

.banner-line.reset {
  margin-top: -0.2rem;
}
</style>
