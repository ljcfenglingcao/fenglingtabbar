<template>
  <div>
    <router-view></router-view>
    <TabBar>
      <TabBarItem path="/home" activeColor="deeppink">
        <template v-slot:item-icon>
          <img src="@/assets/img/tabbar/home.svg" alt="">
          <!--            <div>./表示当前文件夹</div>-->
        </template>
        <template v-slot:item-icon-active>
          <img src="@/assets/img/tabbar/home_active.svg" alt="">
        </template>
        <template v-slot:item-text>
          <div>首页</div>
        </template>
      </TabBarItem>
      <TabBarItem path="/category">
        <template v-slot:item-icon>
          <img src="@/assets/img/tabbar/category.svg" alt="">
        </template>
        <template v-slot:item-icon-active>
          <img src="@/assets/img/tabbar/category_active.svg" alt="">
        </template>
        <template v-slot:item-text>
          <div>分类</div>
        </template>
      </TabBarItem>
      <TabBarItem path="/shopcart">
        <template v-slot:item-icon>
          <img src="@/assets/img/tabbar/shopcart.svg" alt="">
        </template>
        <template v-slot:item-icon-active>
          <img src="@/assets/img/tabbar/shopcart_active.svg" alt="">
        </template>
        <template v-slot:item-text>
          <div>购物车</div>
        </template>
      </TabBarItem>
      <TabBarItem path="/profile">
        <template v-slot:item-icon>
          <img src="@/assets/img/tabbar/profile.svg" alt="">
        </template>
        <template v-slot:item-icon-active>
          <img src="@/assets/img/tabbar/profile_active.svg" alt="">
        </template>
        <template v-slot:item-text>
          <div>我的</div>
        </template>
      </TabBarItem>
    </TabBar>
  </div>

</template>

<script>
import TabBar from '@/components/tabbar/TabBar'
import TabBarItem from '@/components/tabbar/TabBarItem'

export default {
  name: 'MainTabBar',
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style scoped>

</style>
