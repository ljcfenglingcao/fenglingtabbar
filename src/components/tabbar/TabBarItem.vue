<template>
  <div class="tab-bar-item" @click="itemClick">
    <!--    判断是否非活跃路由-->
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <!--    绑定样式动态改变-->
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabBarItem',
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'red'
    }
  },
  data () {
    return {
      // isActive: false
    }
  },
  computed: {
    isActive () {
      // indexOf方法获取指定的字符在字符串中第一次出现的位置，从0开始。
      // 如果一开始就是e则返回0，如果第二个位置是e则返回1，如果搜完整个字符串都没有e则返回-1 。
      // 反证法 如果该方法不返回-1 就证明该字符串中含有e字符。
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle () {
      return this.isActive ? { color: this.activeColor } : {}
    }
  },
  methods: {
    itemClick () {
      this.$router.push(this.path)
      // console.log(this.path)
    }
  }
}
</script>

<style scoped>

.tab-bar-item {
  flex: 1;
  margin-top: 10px;
  font-size: 12px;
  text-align: center;
  height: 49px;
  /*TabBar一般高度*/
}

.tab-bar-item img {
  height: 18px;
  width: 18px;
  vertical-align: middle;
  /*去掉图片默认三个像素*/
  margin-top: 2px;
}

.tab-bar-item img {
  height: 18px;
  width: 18px;
  vertical-align: middle;
  /*去掉图片默认三个像素*/
  margin-top: 2px;
}

</style>
