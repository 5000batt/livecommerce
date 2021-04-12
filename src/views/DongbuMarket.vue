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
  name: "DongbuMarket",
  data: () => ({
    cards: [
      {
        id: 1,
        title: "간장게장 맛있다.",
        product: "엄마 손 반찬",
        image: "https://t1.daumcdn.net/cfile/tistory/9991A2395A67F37016",
      },
      {
        id: 2,
        title: "말이 필요 없다!",
        product: "도리연 닭도리탕",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5oI41BKj9l9nIiYkSKVR0e2sGCodvQZXy6w&usqp=CAU",
      },
      {
        id: 3,
        title: "3대 째 이어져 오고 있습니다.",
        product: "원조 곱창",
        image:
          "https://mp-seoul-image-production-s3.mangoplate.com/572243_1511863159909841.jpg?fit=around|359:240&crop=359:240;*,*&output-format=jpg&output-quality=80",
      },
      {
        id: 4,
        title: "20년 넘은 포장마차",
        product: "은행나무 포장마차",
        image: "https://www.store114.net/thumb/640x480/19331821_2583823.jpg",
      },
      {
        id: 5,
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
