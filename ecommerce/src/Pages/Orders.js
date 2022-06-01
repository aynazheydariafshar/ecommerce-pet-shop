import ManagementLayout from 'layout/ManagementLayout';
import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import useFetch from "hooks/useFetch";
import { Button, Checkbox, FormControlLabel, IconButton, Pagination, Radio, RadioGroup, Stack } from "@mui/material";
import PaginationPage from "components/PaginationPage";
import { Box } from "@mui/system";
import {BiDetail} from 'react-icons/bi';
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