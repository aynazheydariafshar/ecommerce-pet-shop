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
import { Button, Pagination, Stack } from "@mui/material";
import PaginationPage from "components/PaginationPage";
import { Box } from "@mui/system";
import EasyEdit from 'react-easy-edit';


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

const Inventory = () => {
    //data
  const { data, loading, error } = useFetch("products");

  //category
  const { category, loadingcategory, errorcategory } = useCategory();


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
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <TableContainer dir="rtl" component={Paper} sx={{ padding: "30px" }}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>#</StyledTableCell>
                <StyledTableCell align="right">نام کالا</StyledTableCell>
                <StyledTableCell align="right">قیمت</StyledTableCell>
                <StyledTableCell align="right">موجودی</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            {product.currentData()?.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell component="th" scope="row">
                    {row.id}
                  </StyledTableCell>
                  <StyledTableCell align="right" component="th" scope="row">
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell align="right" component="th" scope="row">
                    <EasyEdit
                      type="number"
                      onSave={() => {}}
                      onCancel={() => {}}
                      saveButtonLabel="ذخیره"
                      cancelButtonLabel="خروج"
                      value={row.price}
                      // editComponent={}
                    />
                  </StyledTableCell>
                  <StyledTableCell align="right" component="th" scope="row">
                    <EasyEdit
                      type="number"
                      onSave={() => {}}
                      onCancel={() => {}}
                      saveButtonLabel="ذخیره"
                      cancelButtonLabel="خروج"
                      value= {row.count}
                      // editComponent={}
                    />
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
    </>
};


export default ManagementLayout(Inventory);