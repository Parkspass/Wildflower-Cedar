<template>
  <v-container>
    <v-row no-gutters class="text-center">
      <v-col cols="12" class="mb-4">
        <v-icon float-right>$close</v-icon>
        <h1>Color</h1>
        <p class="subtitle">
          Pick which color(s) best matches your flower! You can always change
          your answer later.
        </p>
        <v-col v-for="color in colors" :key="color">
          <div>
            <v-btn
              fab
              color="color.value"
              @click="selected_color = color.value"
              >{{ color.name }}</v-btn
            >
            <p>{{ color.name }}</p>
          </div>
        </v-col>
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
      <v-col col="4">
        <v-icon>mdi-circle-small</v-icon>
        <v-icon>mdi-circle-small</v-icon>
        <v-icon>mdi-circle-small</v-icon>
        <v-icon id="hover" @click="$router.push('/shape')"
          >mdi-arrow-right-circle</v-icon
        >
      </v-col>
      <v-col class="mb-5" cols="12">
        <p>40 results</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Color",
  data() {
    return {
      selected_color: null,
      colors: [
        {
          name: "Reds",
          value: "red",
        },
        {
          name: "Orange",
          value: "orange",
        },
        {
          name: "Yellow",
          value: "yellow",
        },
        {
          name: "Pinks",
          value: "pink",
        },
        {
          name: "Blues/Violets",
          value: "blue_purple",
        },
        {
          name: "Whites",
          value: "white",
        },
      ],
    };
  },
};
</script>

<style scoped>
#hover {
  cursor: pointer;
}
</style>
