<template>
  <v-app>
    <v-main>
      <Home />
    </v-main>
  </v-app>
</template>

<script>
import Home from "./components/Home.vue";

export default {
  name: "App",

  components: {
    Home,
  },

  data: () => ({
    //
  }),
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,600;0,700;1,600&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Fraunces:wght@300;400;600&display=swap");
h1 {
  font-family: "Fraunces", serif;
  font-weight: 400;
  font-size: 3em;
}
h2 {
  font-family: "Fraunces", serif;
  font-weight: 300;
  font-size: 2em;
}
h3 {
  font-family: "Fraunces", sans-serif;
  font-weight: 600;
  font-size: 1.125em;
}
.link {
  font-family: "Fraunces", serif;
  font-weight: 600;
  font-size: 1em;
  color: #8ea396;
}
.subtitle {
  font-family: "Fraunces", serif;
  font-weight: 400;
  font-size: 1em;
}
.primary-button {
  font-family: "Sans Source Pro", serif;
  font-weight: 700;
  font-size: 1.125em;
}
.search {
  font-family: "Sans Source Pro", sans-serif;
  font-weight: 600;
  font-size: 1em;
}
.navigation {
  font-family: "Sans Source Pro", sans-serif;
  font-weight: 600;
  font-size: 0.875em;
}
</style>
