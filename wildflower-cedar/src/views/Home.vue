<template>
  <v-container class="home-image mx-0">
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/home_flower.svg')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>
      <v-col class="mb-4">
        <h2>Cedar Breaks</h2>
        <h1>Wildflowers</h1>
      </v-col>

      <v-col class="mb-5" cols="12">
        <v-btn
          class="primary-button"
          href="/color"
          color="sageGreen"
          rounded
          @click="$router.push('/color')"
        >
          Step by Step Verification
        </v-btn>
      </v-col>

      <v-col class="mb-5" cols="12">
        <v-btn
          light
          color="lightSage white--text"
          @click="$router.push('/search')"
          rounded
          class="primary-button"
        >
          Search by Name
        </v-btn>
      </v-col>

      <v-col class="mb-5" cols="12">
        <a
          href="https://www.nps.gov/cebr/learn/news/wildflower-2021.htm"
          class="link"
          id="link"
        >
          <u> Wildflower Festival - July 2022 </u>
        </a>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
.home-image {
  background-image: url("~@/assets/home_background.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  /* filter: blur(4px); */
  height: 100%;
  width: 100%;
}

#link {
  color: #8ea396;
}
</style>
