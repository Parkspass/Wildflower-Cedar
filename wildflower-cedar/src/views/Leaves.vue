<template>
  <v-container>
    <v-row no-gutters>
      <v-col offset="10" cols="2" justify="right">
        <v-icon float-right class="hover" @click="$router.push('/')"
          >$close</v-icon
        >
      </v-col>
      <v-col cols="12" class="text-center">
        <h1 color="lavarockNavy--text">Leaves</h1>
      </v-col>
      <v-col cols="12" class="text-center">
        <p class="subtitle">Pick which description best matches the leaves!</p>
      </v-col>
      <v-col cols="12" class="text-center">
        <p class="subtitle">You can always change your answer later.</p>
      </v-col>
      <v-col cols="12" class="mb-4">
        <v-col cols="12">
          <v-row
            no-gutters
            class="text-center"
            justify="center"
            align="center"
            v-for="petal in petals"
            :key="petal"
          >
            <v-col
              :style="inlineImage(petal.location)"
              class="full-picture hover"
              cols="2"
            >
            </v-col>
            <v-col cols="7">
              <v-row
                no-gutters
                class="text-center"
                justify="start"
                align-content="start"
              >
                <v-col cols="12">
                  <h3>{{ petal.name }}</h3>
                  <p class="subtitle">{{ petal.description }}</p>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
      </v-col>
      <v-col cols="12" class="text-center pb-4">
        <v-btn color="sageGreen" rounded> See Results </v-btn>
      </v-col>
      <v-col cols="12" class="text-center pt-2">
        <v-icon color="sageGreen" class="hover" @click="$router.push('/shape')"
          >mdi-arrow-left-circle</v-icon
        >
        <v-icon color="verylightSage">mdi-circle-medium</v-icon>
        <v-icon color="verylightSage">mdi-circle-medium</v-icon>
        <v-icon color="sageGreen">mdi-circle-medium</v-icon>
        <!-- <v-icon
          color="sageGreen"
          class="hover"
          @click="$router.push('/matches')"
          >mdi-arrow-right-circle</v-icon
        > -->
      </v-col>
      <v-col class="mb-5 text-center" cols="12">
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
          name: "Alternate",
          description: "Attach to stem in an alternating pattern",
          location: "alternate.svg",
        },
        {
          name: "Opposite",
          description: "Attach to stem across from each other",
          location: "opposite.svg",
        },
        {
          name: "Basal",
          description: "Attach primarily at base of plant",
          location: "basal.svg",
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
/* * {
  border: 1px solid red;
} */

.full-picture {
  min-height: 100px;
}
</style>
