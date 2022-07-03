<template>
  <div>
    <el-container>
      <el-header style="backgroundColor:skyblue">Header</el-header>
      <el-container>
        <el-aside width="200px" style="backgroundColor:#C0C0C0"
          ><el-menu default-active="1" router>
            <el-submenu
              index="1"
              v-for="(item, index) in this.$router.options.routes"
              :key="index"
              v-show="!item.hidden"
            >
              <template slot="title"
                ><i class="el-icon-location"></i>{{ item.name }}</template
              >
              <el-menu-item
                :index="children.path"
                v-for="(children, indexj) in item.children"
                :key="indexj"
                >{{ children.name }}</el-menu-item
              >
            </el-submenu>
          </el-menu></el-aside
        >
        <el-main><router-view /></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "Home",
  methods: {},
};
</script>

<style>
</style>