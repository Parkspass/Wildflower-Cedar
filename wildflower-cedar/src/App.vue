<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Fraunces:wght@300;400;600&family=Source+Sans+Pro:wght@400;600;700&display=swap");

* {
  margin: 0;
  padding: 0;
}

h1 {
  font-family: "Fraunces";
  font-style: normal;
  font-weight: 400;
  font-size: 48px;
  line-height: 59px;
  color: #3b4549;
}

h2 {
  font-family: "Fraunces";
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 30px;
}

h3 {
  font-family: "Fraunces";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: #3b4549;
}

.link {
  font-family: "Fraunces";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  text-decoration-line: underline;
  cursor: pointer;
}

.subtitle {
  font-family: "Source Sans Pro";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #3b4549;
}

.primary-button {
  font-family: "Source Sans Pro";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 23px;
  color: #000000;
}

.navigation {
  font-family: "Source Sans Pro";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  color: #3b4549;
}

.search {
  font-family: "Source Sans Pro";
  font-style: italic;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #3b4549;
}

.hover {
  cursor: pointer;
}
</style>
