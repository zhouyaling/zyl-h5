<template>
  <div class="view">
    <img class="t-banner" src="../../assets/image/company_t.jpg" />
    <div class="banner-line"></div>
    <div class="title">我们是——</div>
    <div
      :class="{ 'run-animation': isShow }"
      class="slogan animation-container animation-fade-right"
    >
      国家电网自己的财产保险公司<br />
      精心服务电力职工的保险公司
    </div>
    <div
      :class="{ 'run-animation': isShow1 }"
      class="describe font-family-s animation-container animation-fade-right"
    >
      总公司成立于2008年9月
      <br />总部设在北京 <br />重庆分公司成立于2016年9月
      <br />位于市电力公司昆亚大厦7-8楼
      <br />
    </div>

    <div
      :class="{ 'run-animation': isShow2 }"
      class="b-table animation-container animation-fade-up"
    >
      <div @click="goPage('yyzz')">
        <div class="bk-r">
          <img src="@/assets/image/c_1.png" alt />
        </div>

        <span>优异资质</span>
      </div>
      <div @click="goPage('fwpz')">
        <div class="bk-b">
          <img src="@/assets/image/c_2.png" alt />
        </div>
        <span>服务品牌</span>
      </div>
      <div @click="goPage('smrw')">
        <div class="bk-y">
          <img src="@/assets/image/c_3.png" alt />
        </div>
        <span>使命任务</span>
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
  mounted: function() {
    this.showAnimation();
  },
  methods: {
    goPage(type) {
      switch (type) {
        case "yyzz":
          this.$router.push({ path: "/yyzz" });
          break;
        case "fwpz":
          this.$router.push({ path: "/fwpz" });
          break;
        case "smrw":
          this.$router.push({ path: "/smrw" });
          break;
      }
    },
    showAnimation() {
      setTimeout(() => {
        this.isShow = true;
      }, 700);
      setTimeout(() => {
        this.isShow1 = true;
      }, 900);
      setTimeout(() => {
        this.isShow2 = true;
      }, 1000);
    }
  }
};
</script>
<style lang="scss" scoped>
.t-banner {
  display: block;
  width: 100%;
  height: 55vw;
}

.b-table {
  /*  position: absolute;
    bottom: 0;
    right: 0;
    left: 0; */
  margin-top: 6vw;
  width: 100%;
  height: 23vw;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 6vw;

  > div {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 23vw;
    color: rgba(0, 102, 102, 0.8);
    font-size: 3.5vw;
    font-weight: 600;
    div {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 16.5vw;
      height: 16.5vw;
      border-radius: 4.6vw;

      img {
        width: 9.5vw;
      }
    }
    span {
      padding-top: 1vw;
      text-decoration: underline;
    }
  }

  :nth-last-of-type(1) {
    border-right: none;
  }
}

.title {
  font-size: 4.53vw;
  line-height: 6vw;
  color: #006666;
  padding: 0 5.3vw;
  text-align: left;
  margin: 4vw;
}

.slogan {
  text-align: center;
  color: #006666;
  font-size: 5vw;
  font-weight: 600;
  line-height: 2;
}

.describe {
  width: 49%;
  margin-top: 3.5vh;
  margin-right: 5%;
  margin-left: 46%;
  text-align: left;
  color: #a4a4a4;
  font-size: 3.2vw;
  line-height: 1.8;
  letter-spacing: 1px;
}
.bk-r {
  background-color: #e17327;
}
.bk-b {
  background-color: #8265e9;
}
.bk-y {
  background-color: #668d75;
}
</style>
