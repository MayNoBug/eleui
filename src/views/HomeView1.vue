<template>
  <div class="home">
  <el-container>
    <el-aside>
      <el-menu>
        <!-- 菜单组件 -->
        <el-submenu index="1">
          <!-- 二级菜单 -->
          <template slot="title">
            <i class="el-icon-message"></i>导航
          </template>
          <!-- 份一 -->
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item>
              选修一
            </el-menu-item>
            <el-menu-item>
              选修二
            </el-menu-item>
          </el-menu-item-group>
          <!-- 分组二 -->
          <el-menu-item-group title="分组二">
            <el-menu-item>选项三</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header>
        s
      </el-header>
      <el-maon>
        d
      </el-maon>
    </el-container>
  </el-container>
  </div>
</template>
<script>
// @ is an alias to /src
import MyButton from "@/components/MyButton.vue"
export default {
  name: "HomeView",
  components: {
    MyButton
  },
  mounted(){
    // this.cuiplugin()
  }
};
</script>
