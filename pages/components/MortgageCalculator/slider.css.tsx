export const slider = {
  "& .MuiSlider-rail": {
    backgroundColor: "gray",
    height: "2px",
  },
  "& .MuiSlider-markLabel": {
    top: "20px",
    fontSize: "12px",
  },
  "& .MuiSlider-mark": {
    display: "none",
  },
  "& .MuiSlider-track": {
    height: "2px",
  },
  "& .MuiSlider-thumb": {
    border: "1px solid currentColor",
    backgroundColor: "white",
  },
  "& .MuiSlider-markLabel[data-index='0']": {
    transform: "translateX(0)",
  },
  "& .MuiSlider-markLabel[data-index='1']": {
    transform: "translateX(-100%)",
  },
};