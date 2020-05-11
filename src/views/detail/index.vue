<template>
  <div class="view">
    <div class="reset-box">
      <div
        class=""
        v-for="(item, index) in DataList"
        v-if="item.type == currentType"
        :key="index"
      >
        <div style="font-size:0;">
          <img
            v-for="(banner, itemIndex) in item.banner"
            :key="'b' + itemIndex"
            v-if="banner"
            :src="banner"
            alt=""
          />
          <div class="banner-line"></div>
        </div>
        <div class="wrap-box">
          <div v-for="(child, index1) in item.list" :key="'l' + index1">
            <h5>★ {{ child.title }}</h5>
            <p class="font-family-s" v-html="child.content"></p>
            <img
              v-for="(item1, index2) in child.images"
              :key="'c' + index2"
              v-if="item1"
              :src="item1"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      currentType: "",
      DataList: [
        {
          type: "zdfw",
          title: "专设驻点服务",
          banner: [require("@/assets/image/zszdfw.png")],
          list: [
            {
              title: "专设驻点服务 服务就在身边",
              content:
                "我们在各单位为电力职工专设了<strong>“车生活 家服务”体验站</strong>，配置了<strong>“一对一全服务”专员</strong>。不仅方便您的投保接洽和咨询，更重要的是让售前、售中、售后全流程服务就在您身边。"
              // images: [require('@/assets/image/zdfw_img2.jpg')]
            },
            {
              title: "配备应急工具 配置常用耗材",
              content:
                "体验站还配备了充气压力泵、搭电电源、拖车绳、换胎工具箱等应急救援工具，方便您获得应急自助服务，而不必等待专业救援服务。体验站还备有玻璃水、表板蜡、清洗剂等日常专用耗材，您可以免费使用。"
              // images: [require('@/assets/image/zdfw_img1.png')]
            }
          ]
        },
        {
          type: "cpfw",
          title: "专属产品服务",
          banner: [require("@/assets/image/zscpfw.png")],
          list: [
            {
              title: "电力职工综合保障计划（组合）",
              content:
                "包含电力职工家庭财产、人员意外伤害、第三者责任三大方面16个产品条款，保障超全。价格有84元、268元、420元、840元四档。详情请进“无忧云”微信平台查看（下同）。",
              images: []
            },
            {
              title: "电力职工“泰惠保”国内旅游险",
              content:
                "保障电力职工1个月以内短期旅游的人身伤害风险，让出行无忧。分三档：7天*22万/15元、15天*22万/25元、30天*33万/60元。",
              images: []
            },
            {
              title: "电力职工“泰惠保”驾驶人意外险",
              content:
                "保障电力职工驾驶车辆时的人身意外伤害事故造成的损失，涵盖身故、残疾、烧烫伤和医疗费用，最高保额可到100万元。",
              images: []
            },
            {
              title: "电力职工“泰惠保”家庭财产保险",
              content:
                "包含电力职工家庭房屋、装修损失，扩展承保盗抢损失、管道破裂损失、三者损失等五方面8个产品条款。分四档：30万/98元、50万/198元、200万/398元。",
              images: []
            },
            {
              title: "电力职工司乘人员意外险",
              content:
                "保障电力职工在驾驶和乘坐指定车辆时的人身意外伤害事故。每份：100万*1个月/18.8元。",
              images: []
            },
            {
              title: "电力职工“四季安泰”个人意外险",
              content:
                "保障电力职工个人的人身意外伤害事故，包含常规的意外身故残疾和烧烫伤（10万）、意外伤害医疗（0.5万），还扩展了住院补贴0.72万。每份保费118元/年。"
            }
          ]
        },
        {
          type: "lptd",
          title: "专属理赔通道",
          banner: [require("@/assets/image/zslptd.png")],
          list: [
            {
              title: "出险别紧张  马上找专责",
              content:
                "如果发生保险事故，别紧张，无论案件大小，尽快联系<strong>一对一全服务专员</strong>，他会告知您如何处置。无论大案小案，是否涉及三者或人伤，他会跟您一起面对，并协调公司资源给您支持。",
              images: []
            },
            {
              title: "单方事故  简便灵活",
              content:
                "5000元内无人伤物损案件，免现场查勘，免事故证明，仅凭事故现场照片即可； 3000元内，免维修发票和人伤票据；宽松定损，自动核损，快速赔付。"
            },
            {
              title: "大案要案  主动作为",
              content:
                "需要出现场的案件，特别是人伤大案，查勘人员会第一时间到现场，积极协调交警快速处置，确保事故责任划分准确，积极督导三者定损；主动启动必要的赔款垫付、全程法律援助。<strong>一对一全服务专员</strong>全程陪伴您，协助接洽伤者及家属，应对伤案。",
              images: []
            },
            {
              title: "索赔时效  特别提醒",
              content:
                "据相关法律法规规定：<br/><p style='text-indent:2rem;'>1.发生保险事故后，请务必在48小时内进行报案；</span><br/><p style='text-indent:2rem;'>2.报案后，保险事故索赔时效为2年。超过2年视为自动放弃索赔。",
              images: [require("@/assets/image/service.jpg")]
            }
          ]
        },
        {
          type: "jsfw",
          title: "代办大小年审  无需提前预约",
          banner: [require("@/assets/image/dbjsfw.png")],
          list: [
            {
              title: "绿色通道联系",
              content:
                "我们免费提供代办车辆检审服务。对内部职工车辆开通“绿色通道”。无论您是需要审车（大审）还是审证（小审），请直接联系您的<strong>“一对一全服务”专员</strong>。",
              images: []
            },
            {
              title: "审证（小审）流程",
              content: "",
              images: [require("@/assets/image/jsfw_img1.png")]
            },
            {
              title: "审车（大审）流程",
              content: "",
              images: [require("@/assets/image/jsfw_img2.png")]
            }
          ]
        },
        {
          type: "dljy",
          title: "全国道路救援  不限次数里程",
          banner: [require("@/assets/image/qgdljy.png")],
          list: [
            {
              title: "电力职工不限距离不限次",
              content:
                "<span class='strong-animation'>电力职工享受全国免费道路救援不限里程不限次数。</span>",
              images: []
            },
            {
              title: "服务流程",
              content: "",
              images: [require("@/assets/image/dljy_img1.png")]
            },
            {
              title: "绿色通道联系",
              content:
                "我们免费提供全国道路救援服务。无论您身处本市，还是国内其他任何地点，需要搭电、换胎、充气，或者发生故障需要拖车，或是困境救援，您只需直接联系您的<strong>“一对一全服务”专员</strong>。",
              images: []
            }
          ]
        },
        {
          type: "ajfw",
          title: "每年安全监测  六大核心系统",
          banner: [require("@/assets/image/dqajfw.png")],
          list: [
            {
              title: "集中开展活动",
              content:
                "我们提供免费车辆安全检测服务。主要在每年三个时段集中开展“巡回式”现场服务：<p style='text-indent:2rem;'>1.春节前一个月时间里，举办“英大财险<strong>‘泰和迎春’</strong>专题服务活动”，旨在为春节长假提供安全保障服务。</p><p style='text-indent:2rem;'>2.每年3月15日开始，举办为期一个月的“英大财险‘尊享<strong>泰和</strong>’<strong>客户服务节</strong>”。</p><p style='text-indent:2rem;'>3.国庆前一个月时间里，举办“英大财险‘<strong>泰和金秋</strong>’专题服务活动”，旨在为国庆长假提供安全保障服务。</p>"
            },
            {
              title: "安全检测项目",
              content:
                "<p style='text-indent:2rem;'>1.电脑检测故障码</p><p style='text-indent:2rem;'>2.发动机及变速箱工作态</p><p style='text-indent:2rem;'>3.机油及防冻液状况</p><p style='text-indent:2rem;'>4.转向系统状态</p><p style='text-indent:2rem;'>5.制动机构及刹车片状况</p><p style='text-indent:2rem;'>6.胎压计胎损状况</p><p style='text-indent:2rem;'>7.灯光信号</p><p style='text-indent:2rem;'>8.小耗添补</p>",
              images: [
                require("@/assets/image/ajfw_img1.png"),
                require("@/assets/image/ajfw_img2.jpg")
              ]
            }
          ]
        }
      ]
    };
  },
  created() {},
  mounted: function() {
    this.currentType = this.$route.query.type ? this.$route.query.type : "";
  },

  methods: {}
};
</script>
<style lang="scss" scoped>
.reset-box p {
  text-indent: 2rem;
  font-size: 1.5rem;
  line-height: 2.6rem;
}

.reset-box img {
  width: 100%;
}

.reset-box h5 {
  font-size: 1.7rem;
  margin: 2rem 0 0.6rem 0;
  color: #c00400;
}

.wrap-box {
  margin: 0 4%;
}
</style>
