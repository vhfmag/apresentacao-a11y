export const ni_yellow = "#ffd800";
export const ni_red = "#fa3c5a";
export const ni_blue = "#0055ff";
export const ni_green = "#0ae6be";
export const ni_teal = "rgb(10, 230, 230)";
export const ni_purple = "rgb(163, 0, 255)";

export const ni_light_yellow = "#fff3b2";
export const ni_light_red = "#fdc5ce";
export const ni_light_blue = "#b2ccff";
export const ni_light_green = "#b6f8ec";

export const ni_dark_yellow = "#dc8c28";
export const ni_dark_red = "#96281e";
export const ni_dark_blue = "#001eaa";
export const ni_dark_green = "#0a6e78";

export const ni_gray = "#bbb9b9";
export const ni_light_gray = "#e0e0e0";

export const ni_gradient = `linear-gradient(90deg, ${ni_purple} 40%, ${ni_teal})`;

export const theme = {
  googleFont:
    "https://fonts.googleapis.com/css?family=Roboto+Mono|Roboto+Slab:400,700|Roboto:400,700&display=swap",
  fonts: {
    body: "Roboto"
  },
  text: {
  },
  heading: {
    fontFamily: "Roboto Slab",
    color: ni_purple
  },
  ul: {
    maxWidth: "50vw",
    margin: "0 auto"
  },
  h1: {
    wordSpacing: "-10%",
  },
  h2: {
    marginTop: "0.3em",
    fontWeight: "bold",
    lineHeight: "110%",
    position: "absolute",
    top: 0
  },
  blockquote: {
    fontWeight: 500,
    fontFamily: "Roboto Mono",
    lineHeight: "120%",
    fontStyle: "italic"
  },
  Slide: {
    background: ni_gradient,
    backgroundSize: "100% 10px",
    backgroundRepeat: "no-repeat",
    paddingTop: "1.25rem",
    alignItems: "unset",
  },
  css: {
    ".visually-hidden": {
      "&:not(:focus):not(:active)": {
        clip: "rect(0 0 0 0)",
        clipPath: "inset(50%)",
        height: "1px",
        overflow: "hidden",
        width: "1px",
        whiteSpace: "nowrap",
      },
      position: "absolute",
      top: 0,
      left: 0,
    },
    iframe: {
      height: "80vh",
      width: "80vw"
    },
    ".no-outline": { "&, *": { "&, &:focus, &:active, &:hover, &::-moz-focus-inner": {
        outline: "0 !important"
    } } },
    "button, .button": {
      borderRadius: "0.2em",
      backgroundColor: "palevioletred",
      cursor: "pointer",
      display: "inline-flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "0.5em",
      border: "0",
      color: "white",

      "&[tabindex], &[role=button]": {
        "&:focus": {
          outline: `1px dotted black`
        }
      },
      
      img: {
        width: "2em",
        height: "2em",
        objectFit: "contain",
        objectPosition: "center"
      }
    },
    ".react-live-preview": {
      fontSize: "1rem",
      padding: "1rem",
      position: "relative"
    },
    ".prism-code": {
      fontSize: "1rem",
      whiteSpace: "pre !important"
    },
    ".dropdown": {
      display: "flex",
      flexDirection: "column",
      
      ul: {
        margin: 0,
        appearance: "textfield",

        li: {
          display: "block"
        },

        "li + li": {
          marginTop: "0.1rem"
        }
      }
    },
    ".dropdown": {
      display: "flex",
      flexDirection: "column",

      label: {
        display: "contents"
      }
    },
    form: {
      display: "grid",
      gridTemplateColumns: "max-content max-content",
      gridGap: "0.5em",

      "> *": {
          gridColumn: "1 / -1",
      },

      "> label": {
          display: "contents",

          "input, select, textarea": {
            border: `1px solid ${ni_gray}`,
            borderRadius: "0.2em"
          },

          ".invalid input, .invalid select, .invalid textarea, input:invalid, select:invalid, textarea:invalid": {
            borderColor: ni_dark_red
          },

          ".field-status": {
            gridColumn: "1 / -1",
            border: `1px solid ${ni_gray}`,
            backgroundColor: ni_light_gray,
            padding: "0.5em"
          },

          "&.invalid": {
            ".field-status": {
              border: 0,
              color: "white",
              backgroundColor: ni_dark_red
            }
          }
      },
    },
  }
};
