export default function Button() {
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          "&.MuiButton-outlinedPrimary": {
            color: "#ffffff",
            border: "1px solid white",
            ":hover": {
              backgroundColor: "#ffffff",
              color: "#000000",
            },
          },
        },
      },
    },
  };
}
