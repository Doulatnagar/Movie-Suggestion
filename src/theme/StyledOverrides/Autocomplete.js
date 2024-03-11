export const Autocomplete = () => ({
  MuiAutocomplete: {
    styleOverrides: {
      root: {
        "&.MuiInputLabel-formControl": {
          color: "white",
        },
        "& .MuiInputLabel-formControl": {
          "&.MuiInputLabel-shrink": {
            color: "#ffffff",
            backgroundColor:'blue',
            fontSize:"20px",
            borderRadius:"20px",
          },
        },
        "& .MuiOutlinedInput-root": {
          background: "#fff",
          borderRadius: "30px",
          padding: "1px 19px",
          height: "44px",
          borderColor: "white",
        },
      },
    },
  },
});
