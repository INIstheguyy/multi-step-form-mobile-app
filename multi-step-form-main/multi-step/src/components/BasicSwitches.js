import * as React from 'react';
import Switch from '@mui/material/Switch';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

const BasicSwitches = ({change, checked}) => {
  return (
    <div>
      <Switch onClick={change} {...label} checked={checked} />
    </div>
  );
}
export default  BasicSwitches;