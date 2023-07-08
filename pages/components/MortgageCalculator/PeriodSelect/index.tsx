import { SelectorProps } from "..";
import { RadioGroup, FormControlLabel, FormLabel, Radio, FormControl } from '@mui/material';
import styles from './styles.module.css';

export const PeriodSelect = ({ value, onChange }: SelectorProps) => {
  const handleSelection = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(parseInt(event.target.value));
  };

  const sx = {
    '&, &.Mui-checked': {
      color: 'var(--color-button)',
    },
  };
  
  return (
    <FormControl component="fieldset">
      <FormLabel
        id="periodSelect"
      >
        <div className={styles.selectorName}>Period</div>
      </FormLabel>
        <RadioGroup
          aria-label="periodSelect"
          name="periodSelect"
          value={value}
          onChange={handleSelection}
        >
          <FormControlLabel value={20} control={<Radio sx={sx}/>} label="20 years" />
          <FormControlLabel value={25} control={<Radio sx={sx}/>} label="25 years" />
          <FormControlLabel value={30} control={<Radio sx={sx}/>} label="30 years" />
        </RadioGroup>
      </FormControl>
  );
};