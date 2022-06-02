import ManagementLayout from 'layout/ManagementLayout';
import * as React from "react";
import {FormControlLabel, Radio, RadioGroup } from "@mui/material";
import DeleveryOrders from 'components/DeleveryOrders';
import WaiteOrders from 'components/WaiteOrders';


const Orders = () => {

  //value radio
  const [value, setValue] = React.useState("delevery");

  //change radio click
  function handleClick(event) {
    if (event.target.value === 'waite') {
      setValue('waite');
    } else {
      setValue('delevery');
    }
  }

    return <>
    <RadioGroup
        defaultValue="delevery"
        name="radio-buttons-group"
        row
      >
        <FormControlLabel
          value="delevery" 
          control={<Radio onClick={handleClick} color="secondary"/>}
          label="سفارش های تحویل شده"
          sx={{display : 'inline' , padding :'30px'}}
        />
        <FormControlLabel
          value="waite" 
          control={<Radio onClick={handleClick} color="secondary"/>}
          label="سفارش های درانتظار ارسال"
          sx={{ paddingX :'30px'}}
        />
      </RadioGroup>
      {value === 'delevery' ? <DeleveryOrders /> : <WaiteOrders />}
    </>;
};


export default ManagementLayout(Orders);