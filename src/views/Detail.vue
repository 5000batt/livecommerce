<template>
  <v-card height="780">
    <div id="twitch-embed"></div>
    <v-row @click="productPage">
      <v-col cols="12" md="2">
        <v-img
          :src="$route.params.files[0].dataUrl"
          height="60"
          width="200"
        ></v-img>
      </v-col>
      <v-col cols="12" md="10">
        <h2>{{ $route.params.productName }}</h2>
      </v-col>
    </v-row>
  </v-card>
</template>
<script>
export default {
  name: "Detail",
  props: {
    channelId: {
      type: String,
      default: "",
    },
    productUri: {
      type: String,
      default: "",
    },
  },
  data: () => ({}),
  mounted() {
    console.log(this.channelId);
    console.log(this.productUri);

    const twitch = document.createElement("script");
    twitch.innerHTML =
      `
      new Twitch.Embed("twitch-embed", {
          width: "100%",
          height: "700",
          channel: "` +
      this.channelId +
      `",
          
          // only needed if your site is also embedded on embed.example.com and othersite.example.com
          parent: ["embed.example.com", "othersite.example.com"]
        });
      `;
    document.body.appendChild(twitch);
  },
  methods: {
    async productPage() {
      window.open(this.productUri);
    },
  },
};
</script>

