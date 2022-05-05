<template>
  <v-container>
    <v-row no-gutters class="text-center">
      <v-col offset="10" cols="2" justify="right">
        <v-icon float-right>$close</v-icon>
      </v-col>
      <v-col cols="12" class="mb-4">
        <h1>Shape</h1>
        <p class="subtitle">Pick which shape best matches your flower!</p>
        <p class="subtitle">You can always change your answer later.</p>
        <v-col cols="12">
          <v-row no-gutters class="text-center" justify="center" align="center">
            <v-col
              :style="inlineImage(petals[1].location)"
              class="full-picture hover"
              cols="5"
            >
            </v-col>
            <v-col cols="7">
              <v-row
                no-gutters
                class="text-center"
                justify="center"
                align="center"
              >
                <v-col cols="12">
                  <p>{{ petals[1].name }}</p>
                  <span>{{ petals[1].description }}</span>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
        <!-- <v-col
          cols="12"
          v-for="petal in petals"
          :key="petal"
          justify-center
          align-center
        >
          <div
            :style="inlineImage(petal.location)"
            class="full-picture hover"
            @click="selected_shape = petal.name"
          ></div>
          <p>{{ petal.name }}</p>
          <span>{{ petal.description }}</span>
        </v-col> -->
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
      selected_shape: null,
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
  },
};
</script>

<style scoped>
* {
  border: 1px solid red;
}

.full-picture {
  min-height: 100px;
}
</style>
