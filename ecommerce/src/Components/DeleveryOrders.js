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
import {
  IconButton,
  Pagination,
  Stack,
} from "@mui/material";
import PaginationPage from "components/PaginationPage";
import { Box } from "@mui/system";
import { BiDetail } from "react-icons/bi";

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

const DeleveryOrders = () => {
  const token = localStorage.getItem("token");

  //data
  const { data, loading, error } = useFetch(`orders?token=${token}`);

  //product change
  const [delevery, setdelevery] = React.useState(data);

  //pagination delevery
  let [page, setPage] = React.useState(1);
  const perPage = 10;

  const count = Math.ceil(delevery.length / perPage);
  const product = PaginationPage(delevery, perPage);

  const handleChange = (e, p) => {
    setPage(p);
    product.jump(p);
  };

  //filter data to find delvery orders
  const filterData = () => {
    setdelevery(data?.filter((item) => item.orderStatus === 1));
  };

  React.useEffect(() => {
    filterData();
  }, [data]);

  return (
    <>
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
              {product.currentData()?.map((row, index) => (
                <StyledTableRow key={row.id}>
                  <StyledTableCell component="th" scope="row">
                    {index+1}
                  </StyledTableCell>
                  <StyledTableCell align="right" component="th" scope="row">
                    {row.customerDetail?.firstName}
                  </StyledTableCell>
                  <StyledTableCell align="right" component="th" scope="row">
                    {row.customerDetail?.lastName}
                  </StyledTableCell>
                  <StyledTableCell align="right" component="th" scope="row">
                    {row.purchaseTotal}
                  </StyledTableCell>
                  <StyledTableCell align="right" component="th" scope="row">
                    <IconButton className="icon-navbar">
                      <BiDetail />
                    </IconButton>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Stack className="pager" padding="30px">
          <Pagination
            size="large"
            count={count}
            color="secondary"
            onChange={handleChange}
            page={page}
          />
        </Stack>
      </Box>
    </>
  );
};

export default DeleveryOrders;
