<template>
  <v-container>
    <v-row no-gutters class="text-center" justify="center" align="center">
      <v-icon @click="$router.push('/home')" float-right>$close</v-icon>
      <v-col cols="12" class="mb-4">
        <h1>Color</h1>
        <p class="subtitle">Pick which color(s) best matches your flower!</p>
        <p class="subtitle">You can always change your answer later.</p>
      </v-col>
      <v-col cols="4" v-for="color in colors" :key="color">
        <div
          :style="inlineImage(color.location)"
          class="full-picture hover"
          @click="pushIntoSelectedColor(color.name)"
        ></div>
      </v-col>
      <v-col
        cols="4"
        v-for="color in colors2"
        :key="color"
        justify-center
        align-center
      >
        <div
          :style="inlineImage(color.location)"
          class="full-picture hover"
          @click="pushIntoSelectedColor(color.name)"
        ></div>
      </v-col>

      <v-col col="5">
        <v-icon color="sageGreen">mdi-circle-medium</v-icon>
        <v-icon color="verylightSage">mdi-circle-medium</v-icon>
        <v-icon color="verylightSage">mdi-circle-medium</v-icon>
        <v-icon color="sageGreen" class="hover" @click="$router.push('/shape')"
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
  name: "Color",
  data() {
    return {
      selected_colors: [],
      colors: [
        {
          name: "Reds",
          location: "reds.svg",
        },
        {
          name: "Orange",
          location: "oranges.svg",
        },
        {
          name: "Yellow",
          location: "yellows.svg",
        },
      ],
      colors2: [
        {
          name: "Pinks",
          location: "pinks.svg",
        },
        {
          name: "Blues/Violets",
          location: "bluesviolets.svg",
        },
        {
          name: "Whites",
          location: "whites.svg",
        },
      ],
      results: 40,
    };
  },
  methods: {
    inlineImage(src) {
      let bgImage = require("@/assets/" + src);

      return {
        backgroundImage: `url("${bgImage}")`,
      };
    },
    pushIntoSelectedColor(color) {
      this.selected_colors.push(color);
    },
  },
};
</script>

<style scoped>
.check {
  background-image: url("~@/assets/check.svg");
  position: inherit;
}

.full-picture {
  min-height: 100px;
}
</style>
