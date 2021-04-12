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
  name: "SagajungMarket",
  data: () => ({
    cards: [
      {
        id: 21,
        title: "백종원이 선택한 그 곳",
        product: "만두만",
        image:
          "https://blog.kakaocdn.net/dn/c5edUJ/btqRrQAjfMY/uuHedfUZKNYxhQJryE2SC0/img.jpg",
      },
      {
        id: 22,
        title: "상호명 그 대로..",
        product: "소문난 아구찜",
        image:
          "https://search.pstatic.net/common/?src=https%3A%2F%2Fsearch.pstatic.net%2Fcommon%2F%3Fsrc%3Dhttp%253A%252F%252Fblogfiles.naver.net%252FMjAyMDExMThfMjMw%252FMDAxNjA1NjQ5MDkwMTMz.HfqQ1HiyZeXQV-zQxRjeg2slIDP-SYMUYFPDg_JAeFUg.KQvPN5xfugnAoevrY7vw_AJr0N5-1bk0gc2dFLU_1KUg.GIF.ooo5666%252F20201114_112304.gif%26type%3Db400",
      },
      {
        id: 23,
        title: "우리 가족 보양식!",
        product: "초가네장어구이",
        image:
          "https://blog.kakaocdn.net/dn/zi520/btqCSYyvLjw/PnKuNKTLVq9SCTxAN2RLm0/img.jpg",
      },
      {
        id: 24,
        title: "맛있는 생선구이",
        product: "수라정생선구이",
        image:
          "https://postfiles.pstatic.net/MjAyMTAzMDhfMjc3/MDAxNjE1MjAzMjU0NDcx.INfecsV-00ZAQzBh2JTUtHI9zRwvjCF4u7gPDOBQBOEg.xxauh-qnFv4Wx7_NBcgX09qwPlLAqXCziF7EJnMJ0mUg.JPEG.rabbit_623/IMG_7287.jpg?type=w580",
      },
      {
        id: 25,
        title: "찌개는 내가 책임진다.",
        product: "배포찌개",
        image:
          "http://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FyYtTU%2FbtqN8dYaMFj%2FyYxotOyzG9MekX7muicRWK%2Fimg.png",
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
