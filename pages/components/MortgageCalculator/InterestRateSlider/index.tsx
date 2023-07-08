import { SelectorProps } from "..";
import { Slider, FormLabel } from '@mui/material';
import useDebouncedCallback from "../../../hooks/useDebouncedCallback";
import styles from './styles.module.css';
import { slider } from "../slider.css";

export const InterestRateSlider = ({ value, onChange }: SelectorProps) => {
  const debouncedOnChange = useDebouncedCallback(onChange, 500);
  const handleChange = (event: any, newValue: number | number[]) => {
    debouncedOnChange(newValue as number);
  };

  return (
    <div>
      <FormLabel id="interestRateSlider">
        <div className={styles.selectorName}>Interest Rate</div>
      </FormLabel>
      <div className={styles.value}>{value}%</div>
      <Slider
        sx={slider}
        defaultValue={1.5}
        size="small"
        aria-labelledby="interestRateSlider"
        min={0}
        max={25}
        marks={[
          {
            value: 0,
            label: "0",
          },
          {
            value: 25,
            label: "25%",
          },
        ]}
        step={0.1}
        onChange={handleChange}
        getAriaValueText={() => `${value}%`}
      />
    </div>
  );
};