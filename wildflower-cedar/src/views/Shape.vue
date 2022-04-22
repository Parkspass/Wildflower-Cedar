<template>
  <v-container>
    <v-row no-gutters class="text-center">
      <v-col cols="12" class="mb-4">
        <v-icon float-right>$close</v-icon>
        <h1>Shape</h1>
        <p class="subtitle">
          Pick which shape best matches your flower! You can always change your
          answer later.
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
  name: "Shape",
  data() {
    return {
      selected_shape: null,
      petals: [
        {
          name: "3 or 4 Petals",
          value: 0,
          description: "Flowers have 3 or 4 clearly defined petals",
        },
        {
          name: "5 Petals",
          value: 1,
          description: "Flowers have exactly 5 clearly defined petals",
        },
        {
          name: "More Than 5",
          value: 2,
          description: "e.g. Daisies, Asters and Dandelions",
        },
        {
          name: "Other",
          value: 3,
          description: "e.g. Bluebells, Lupine and other unique shapes",
        },
      ],
    };
  },
};
</script>

<style scoped></style>
