<template>
  <div>
    <v-container>
      <v-row>
        <v-col md="3" v-for="(card, i) in cards" :key="i">
          <div>
            <v-card class="cards" max-width="400" @click="detail(card)">
              <v-img height="250px" :src="card.image"> </v-img>

              <v-card-subtitle class="pb-0">
                <div>{{ card.title }}</div>
              </v-card-subtitle>

              <v-card-text class="text--primary">
                <div>{{ card.product }}</div>
              </v-card-text>

              <v-card-actions>
                <v-btn color="red" text> 시청 </v-btn>
              </v-card-actions>
            </v-card>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "MyeonmokMarket",
  data: () => ({
    cards: [
      {
        id: 11,
        title: "시월애도토리",
        product: "시월애도토리",
        image:
          "https://emmaru.com/matzip/include/pics/2020/12/19/m_42559E203042_5.jpg",
      },
      {
        id: 12,
        title: "속초진수산",
        product: "속초진수산",
        image:
          "https://emmaru.com/matzip/include/pics/2020/01/16/m_97355B151959_4.jpg",
      },
      {
        id: 13,
        title: "수제감자탕",
        product: "수제감자탕",
        image:
          "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTAyMDRfMTM1%2FMDAxNjEyMzk1MDEzODM3.-KNeI2iHCOWxHBNofNxmWhja7bAXJKGm377naK4dLBUg.R-rpoSEBfKAK0-3mbdkZvJ4zVva6eyHxXQ-QZR0wDb4g.JPEG.hazel030%2Foutput_152927200.jpg&type=sc960_832",
      },
      {
        id: 14,
        title: "20년 넘은 포장마차",
        product: "은행나무 포장마차",
        image: "https://www.store114.net/thumb/640x480/19331821_2583823.jpg",
      },
      {
        id: 15,
        title: "르뱅쿠키등 맛있는 디저트와 커피가 대표적인 카페",
        product: "카페 르뱅",
        image: "https://img.siksinhot.com/place/1397981634600989.jpg",
      },
    ],
  }),
  methods: {
    detail(card) {
      this.$router.push(`/detail/${card.id}`);
    },
  },
};
</script>
