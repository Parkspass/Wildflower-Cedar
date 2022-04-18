// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Vuetify
import { createVuetify, ThemeDefinition } from "vuetify";

const cedarBreaksWildFlowersTheme = {
  dark: false,
  colors: {
    sageGreen: "#8ea396",
    lightSage: "#B6D1C0",
    paintbrushRed: "#F2362A",
    primrosePink: "#FFC0BC",
    sunflowerYellow: "#FDD015",
    sneezewoodOrange: "#F59859",
    bluebellBlue: "#7BB9CE",
    penstemonPurple: "#B78EC0",
    sandstonePink: "#FFD6BA",
    lavarockNavy: "#3B4549",
    segolilyWhite: "#FFFFFF",
    claronCream: "#FFFCF9",
    darkClaronCream: "#F5EFE9",
    verylightSage: "#E3F5EA",
    verysandstonePink: "#FFF2E8",
  },
};

export default createVuetify({
  theme: {
    defaultTheme: "cedarBreaksWildFlowersTheme",
    themes: { cedarBreaksWildFlowersTheme },
  },
});
