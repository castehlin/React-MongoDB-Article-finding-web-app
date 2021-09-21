import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 150,
    maxWidth: 300,
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
  root: {
    margin: theme.spacing(1),
    width: 300,
  },
}));

function valuetext(value) {
  return `${value}`;
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const practiceNames = [
  'TDD or Test Driven Development',
  'Mob Programming',
];

const claimNames = [
  'Improve code quality',
  'Improve app quality',
  'Improve teamwork',
  'Confidence satisfaction',
];

const strengthNames = [
  'Strongly support',
  'Support',
  'Disagree',
  'Strongly disagree',
];

function getStyles(name, practices, theme) {
  return {
    fontWeight:
            practices.indexOf(name) === -1
              ? theme.typography.fontWeightRegular
              : theme.typography.fontWeightMedium,
  };
}

export default function MultipleSelect(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState([2000, 2021]);
  const [practices, setPractices] = React.useState([]);
  const [claim, setClaim] = React.useState([]);
  const [strength, setStrength] = React.useState([]);

  const yearHandleChange = (event, newValue) => {
    setValue(newValue);
    props.changeYear(newValue);
  };

  const practicesHandleChange = (event) => {
    setPractices(event.target.value);
    props.changePractices(event.target.value);
  };

  const claimHandleChange = (event) => {
    setClaim(event.target.value);
    props.changeClaim(event.target.value);
  };

  const strengthHandleChange = (event) => {
    setStrength(event.target.value);
    props.changeStrength(event.target.value);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-mutiple-chip-label">Practices</InputLabel>
        <Select
          labelId="demo-mutiple-chip-label"
          id="demo-mutiple-chip"
          multiple
          value={practices}
          onChange={practicesHandleChange}
          input={<Input id="select-multiple-chip" />}
          renderValue={(selected) => (
            <div className={classes.chips}>
              {selected.map((practicesValue) => (
                <Chip key={practicesValue} label={practicesValue} className={classes.chip} />
              ))}
            </div>
          )}
          MenuProps={MenuProps}
        >
          {practiceNames.map((name) => (
            <MenuItem key={name} value={name} style={getStyles(name, practices, theme)}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-mutiple-chip-label">Claim</InputLabel>
        <Select
          labelId="demo-mutiple-chip-label"
          id="demo-mutiple-chip"
          multiple
          value={claim}
          onChange={claimHandleChange}
          input={<Input id="select-multiple-chip" />}
          renderValue={(selected) => (
            <div className={classes.chips}>
              {selected.map((claimValue) => (
                <Chip key={claimValue} label={claimValue} className={classes.chip} />
              ))}
            </div>
          )}
          MenuProps={MenuProps}
        >
          {claimNames.map((name) => (
            <MenuItem key={name} value={name} style={getStyles(name, claim, theme)}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-mutiple-chip-label">Strength</InputLabel>
        <Select
          labelId="demo-mutiple-chip-label"
          id="demo-mutiple-chip"
          multiple
          value={strength}
          onChange={strengthHandleChange}
          input={<Input id="select-multiple-chip" />}
          renderValue={(selected) => (
            <div className={classes.chips}>
              {selected.map((strengthValue) => (
                <Chip key={strengthValue} label={strengthValue} className={classes.chip} />
              ))}
            </div>
          )}
          MenuProps={MenuProps}
        >
          {strengthNames.map((name) => (
            <MenuItem key={name} value={name} style={getStyles(name, claim, theme)}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <div className={classes.root}>
        <br />
        <Typography id="range-slider" gutterBottom>
          Year range
        </Typography>
        <Slider
          value={value}
          onChange={yearHandleChange}
          min={2000}
          max={2021}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
          getAriaValueText={valuetext}
        />
      </div>
    </div>
  );
}
