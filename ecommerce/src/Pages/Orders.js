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
import useCategory from "hooks/useCategory";
import { Button, Checkbox, FormControlLabel, Pagination, Radio, RadioGroup, Stack } from "@mui/material";
import PaginationPage from "components/PaginationPage";
import { Box } from "@mui/system";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

const Orders = () => {

      //data
  const { data, loading, error } = useFetch("orders");

  // //pagination data
  let [page, setPage] = React.useState(1);
  const perPage = 10;

  const count = Math.ceil(data.length / perPage);
  const product = PaginationPage(data, perPage);

  const handleChange = (e, p) => {
    setPage(p);
    product.jump(p);
  };

    return <>
    <RadioGroup
        defaultValue="delevery"
        name="radio-buttons-group"
        row
      >
        <FormControlLabel
          value="delevery" 
          control={<Radio color="secondary"/>}
          label="سفارش های تحویل شده"
          sx={{display : 'inline' , padding :'30px'}}
        />
        <FormControlLabel
          value="waite" 
          control={<Radio color="secondary"/>}
          label="سفارش های درانتظار ارسال"
          sx={{ paddingX :'30px'}}
        />
      </RadioGroup>
    <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <TableContainer dir="rtl" component={Paper} sx={{ padding: "30px" }}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>#</StyledTableCell>
                <StyledTableCell align="right">نام </StyledTableCell>
                <StyledTableCell align="right">نام خانوادگی</StyledTableCell>
                <StyledTableCell align="right">مجموع مبلغ</StyledTableCell>
                <StyledTableCell align="right">جزییات سفارش</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            {product.currentData()?.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell component="th" scope="row">
                    {row.id}
                  </StyledTableCell>
                  <StyledTableCell align="right" component="th" scope="row">
                    {row.customerDetail.firstName}
                  </StyledTableCell>
                  <StyledTableCell align="right" component="th" scope="row">
                    {row.customerDetail.lastName}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Stack padding="30px">
          <Pagination
            size="large"
            count={count}
            color="secondary"
            onChange={handleChange}
            page={page}
          />
        </Stack>
      </Box>
    </>;
};


export default ManagementLayout(Orders);