import * as React from 'react';
import Switch from '@mui/material/Switch';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

const BasicSwitches = ({change}) => {
  return (
    <div>
      <Switch onClick={change} {...label} defaultChecked />
    </div>
  );
}
export default  BasicSwitches;