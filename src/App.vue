<template>
  <div>
    <v-container style="max-width: 1200px">
      <v-app>
        <v-toolbar-title :style="{ fontSize: '30px' }">
          전통시장 라이브
          <router-link to="/User">
            <v-btn icon right absolute>
              <v-icon class="user" large>mdi-account </v-icon>
            </v-btn>
          </router-link>
        </v-toolbar-title>
        <v-tabs class="tabs" fixed-tabs v-model="selectedTab">
          <v-tab class="pa-0"
            ><router-link to="/" class="tab-menu">Home</router-link></v-tab
          >
          <v-tab class="pa-0"
            ><router-link to="/SangbongMarket" class="tab-menu"
              >상봉시장</router-link
            ></v-tab
          >
          <v-tab class="pa-0"
            ><router-link to="/MyeonmokMarket" class="tab-menu"
              >면목시장</router-link
            ></v-tab
          >
          <v-tab class="pa-0"
            ><router-link to="/DongbuMarket" class="tab-menu"
              >동부시장</router-link
            ></v-tab
          >

          <v-tab class="pa-0"
            ><router-link to="/SagajungMarket" class="tab-menu"
              >사가정시장</router-link
            ></v-tab
          >
        </v-tabs>

        <router-view></router-view>
      </v-app>
    </v-container>
  </div>
</template>

<style scoped>
.tab-menu {
  text-decoration: none;
  color: black;
  height: 100%;
  width: 100%;
  line-height: 3rem;
}
.tabs {
  flex: 0;
}
.user {
  color: #000;
}
</style>
  
<script>
export default {
  name: "App",
  data: () => ({
    selectedTab: 0,
  }),
  methods: {},
  mounted() {
    // 현재 route 경로를 읽어서 focus를 바꿔야함

    ("/");
    this.selectedTab = 0;
  },
};
</script>
