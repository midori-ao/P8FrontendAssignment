import { SelectorProps } from "..";
import { Slider, FormLabel } from '@mui/material';
import useDebouncedCallback from "../../../hooks/useDebouncedCallback";
import styles from './styles.module.css';
import { slider } from "../slider.css";

export const PurchasePriceSlider = ({ value, onChange }: SelectorProps) => {
  const debouncedOnChange = useDebouncedCallback(onChange, 500);
  const handleChange = (event: any, newValue: number | number[]) => {
    debouncedOnChange(newValue as number);
  };

  return (
    <div>
      <FormLabel id="purchasePriceSlider">
        <div className={styles.selectorName}>Purchase Price</div>
      </FormLabel>
      <div className={styles.valueContainer}>
        <span className={styles.currency}>$</span>
        <div className={styles.value}>{value.toLocaleString('en-US')}</div>
        </div>
      <Slider
        sx={slider}
        defaultValue={250000}
        aria-labelledby="purchasePriceSlider"
        size="small"
        min={50000}
        max={2500000}
        marks={[
          {
            value: 50000,
            label: "$50K",
          },
          {
            value: 2500000,
            label: "$2.5M",
          },
        ]}
        step={10000}
        onChange={handleChange}
        getAriaValueText={() => `${value}%`}
      />
    </div>
  );
};