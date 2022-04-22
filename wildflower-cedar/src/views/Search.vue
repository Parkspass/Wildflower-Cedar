<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-img
          :src="require('../assets/home_flower.svg')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>
      <v-col class="mb-4">
        <h2>SEARCH LINK</h2>
        <h1>Wildflowers</h1>
      </v-col>
      <v-col class="mb-5" cols="12">
        <v-btn class="primary-button" href="/color" color="sageGreen" rounded>
          Step by Step Verification
        </v-btn>
      </v-col>
      <v-col class="mb-5" cols="12">
        <v-btn
          light
          color="lightSage white--text"
          href="/search"
          rounded
          class="primary-button"
        >
          Search by Name
        </v-btn>
      </v-col>
      <v-col class="mb-5" cols="12">
        <p class="link" color="sageGreen--text">
          <u> Wildflower Festival - July 2022 </u>
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Search",
};
</script>

<style scoped></style>
