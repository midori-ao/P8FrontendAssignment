import { SelectorProps } from "..";
import { Slider, FormLabel } from '@mui/material';
import styles from './style.module.css';

export const InterestRateSlider = ({ value, onChange }: SelectorProps) => {
  const handleChange = (_event: any, newValue: number | number[]) => {
    onChange(newValue as number);
  };

  return (
    <>
      <FormLabel id="interestRateSlider">
        <div className={styles.selectorName}>Interest Rate</div>
      </FormLabel>
      <div className={styles.value}>{value}%</div>
      <Slider
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
    </>
  );
};