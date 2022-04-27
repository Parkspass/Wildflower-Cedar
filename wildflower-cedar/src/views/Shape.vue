<template>
  <v-container>
    <v-row no-gutters class="text-center">
      <v-col cols="12" class="mb-4">
        <v-icon float-right>$close</v-icon>
        <h1>Shape</h1>
        <p class="subtitle">Pick which shape best matches your flower!</p>
        <p class="subtitle">You can always change your answer later.</p>
        <v-col v-for="petal in petals" :key="petal">
          <div :style="inlineImage(petal.location)">
          </div>

          <v-row>

          </v-row>
        </v-col>
      </v-col>
      <v-col col="5">
        <v-icon color="sageGreen" class="hover" @click="$router.push('/color')"
          >mdi-arrow-left-circle</v-icon
        >
        <v-icon color="verylightSage">mdi-circle-medium</v-icon>
        <v-icon color="sageGreen">mdi-circle-medium</v-icon>
        <v-icon color="verylightSage">mdi-circle-medium</v-icon>
        <v-icon color="sageGreen" class="hover" @click="$router.push('/leaves')"
          >mdi-arrow-right-circle</v-icon
        >
      </v-col>
      <v-col class="mb-5" cols="12">
        <p class="navigation">{{ results }} results</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Shape",
  data() {
    return {
      selected_shapes: [],
      results: 18,
      petals: [
        {
          name: "3 or 4 Petals",
          description: "Flowers have 3 or 4 clearly defined petals",
          location: "3-4-petals.svg",
        },
        {
          name: "5 Petals",
          description: "Flowers have exactly 5 clearly defined petals",
          location: "5Petals.svg",
        },
        {
          name: "More Than 5",
          description: "e.g. Daisies, Asters and Dandelions",
          location: "MoreThan5_icon.svg",
        },
        {
          name: "Other",
          description: "e.g. Bluebells, Lupine and other unique shapes",
          location: "Other_icon.svg",
        },
      ],
    };
  },
  methods: {
    inlineImage(src) {
      let bgImage = require("@/assets/" + src);

      return {
        backgroundImage: `url("${bgImage}")`,
      };
    },
    pushIntoSelectedShape(shape) {
      this.selected_shapes.push(shape);
    },
  },
};
</script>

<style scoped></style>
