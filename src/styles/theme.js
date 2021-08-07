// 1. Import the extendTheme function
import { extendTheme } from "@chakra-ui/react"
// 2. Extend the theme to include custom colors, fonts, etc
const theme = extendTheme ({
  styles: {
    global: (props) => ({
      
      "html,body": {
          margin: 0,
          padding: 0,
          minHeight: "100vh",
          color: props.colorMode === "dark" ? "white" : "black",
          bg: props.colorMode === "dark" ? "white" : "black",
          // background: "black",
          // color: "yellow"
      },

      a: {
          color: "violet",
      },

      }),  
  },
});

  export default theme;

// import { mode } from "@chakra-ui/theme-tools"

// const theme = {
//   global: (props) => ({
//     "body": {
//       fontFamily: "body",
//       color: mode("gray.800", "whiteAlpha.900")(props),
//       bg: mode("white", "gray.800")(props),
//       lineHeight: "base"
//     },
//     "*::placeholder": {
//       color: mode("gray.400", "whiteAlpha.400")(props),
//     },
//     "*, *::before, &::after": {
//       borderColor: mode("gray.200", "whiteAlpha.300")(props),
//       wordWrap: "break-word",
//     }
//   })
// }

// export default theme;