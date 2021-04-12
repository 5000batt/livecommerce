<template>
  <div>
    <div>
      <v-card class="main">
        <v-img
          height="400px"
          src="https://www.urbanbrush.net/web/wp-content/uploads/edd/2019/07/urbanbrush-20190726110846402231.png"
        >
        </v-img>
      </v-card>
      <h2>지금 라이브중</h2>
    </div>
    <v-container>
      <v-row>
        <v-col md="3" v-for="(broadcast, i) in broadcasts" :key="i">
          <div>
            <v-card class="cards" max-width="400" @click="detail(broadcast)">
              <v-img height="250px" :src="broadcast.files[0].dataUrl"> </v-img>

              <v-card-subtitle class="pb-0">
                <div>{{ broadcast.broadcastTitle }}</div>
              </v-card-subtitle>

              <v-card-text class="text--primary">
                <div>{{ broadcast.productName }}</div>
              </v-card-text>
            </v-card>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import api from "@/api/broadcast";

export default {
  name: "Home",
  data: () => ({
    broadcasts: [],
  }),
  mounted() {
    this.getBroadcasts();
  },
  methods: {
    async getBroadcasts() {
      const result = await api.get();
      console.log(result);
      console.log(result.data);

      if (result.status == 200) {
        this.broadcasts = result.data;
      }

      // console.log(this.broadcasts[0].files[0].dataUrl);
    },
    detail(broadcast) {
      // console.log(broadcast);
      // console.log(broadcast.productUri);
      this.$router.push({ name: "Detail", params: broadcast });
    },
  },
};
</script>
