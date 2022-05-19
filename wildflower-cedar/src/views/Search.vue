<template>
  <v-container>
    <v-row>
      <v-col cols="12"> </v-col>
      <v-col cols="12">
        <h1>Search</h1>
      </v-col>
      <v-col cols="12" class="text-center">
        <p class="subtitle">Explore flowers by name.</p>
      </v-col>
      <v-col cols="12" class="text-center">
        <p class="subtitle">Add some filters to narrow down the results!</p>
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
