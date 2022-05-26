import ManagementLayout from "layout/ManagementLayout";
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
import { FaRegEdit, FaTrash } from "react-icons/fa";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import { Button, Pagination, Stack } from "@mui/material";
import PaginationPage from "components/PaginationPage";
import { Box } from "@mui/system";
import AddProductes from "components/modal/AddProductes";

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

function ManagementProductes() {
  //data
  const { data, loading, error } = useFetch("products");

  //category
  const { category, loadingcategory, errorcategory } = useCategory();

  //show modal  
  const [showModal,setShowModal] = React.useState(false);


  // //pagination data
  let [page, setPage] = React.useState(1);
  const perPage = 5;

  const count = Math.ceil(data.length / perPage);
  const product = PaginationPage(data, perPage);

  const handleChange = (e, p) => {
    setPage(p);
    product.jump(p);
  };

  //add product
  const handleAddProduct = () => {
    setShowModal(!showModal);
  }

  return (
    <>
      <Button
        onClick={handleAddProduct}
        color="secondary"
        variant="contained"
        sx={{ padding: "15px", margin: "30px" }}
        endIcon={<MdOutlineAddCircleOutline />}
      >
        افزودن کالا
      </Button>
      {showModal ? <AddProductes open={showModal} handleClose={() => setShowModal(false)}/>: null }
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <TableContainer dir="rtl" component={Paper} sx={{ padding: "30px" }}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>#</StyledTableCell>
                <StyledTableCell align="right">نام کالا</StyledTableCell>
                <StyledTableCell align="right">عکس</StyledTableCell>
                <StyledTableCell align="right">گروه</StyledTableCell>
                <StyledTableCell align="right">زیر گروه</StyledTableCell>
                <StyledTableCell align="right">ویرایش</StyledTableCell>
                <StyledTableCell align="right">حذف</StyledTableCell>
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
                  <StyledTableCell align="right">
                    <img
                      src={`http://localhost:3002/files/${row.image}`}
                      width="50px"
                      height="50px"
                    />
                  </StyledTableCell>
                  {category?.map((el) => {
                    if (row.category === el.id) {
                      return (
                        <StyledTableCell align="right">
                          {el.group}
                        </StyledTableCell>
                      );
                    }
                  })}
                  {category?.map((el) => {
                    if (row.category === el.id) {
                      return (
                        <StyledTableCell align="right">
                          {el.subgroup}
                        </StyledTableCell>
                      );
                    }
                  })}
                  <StyledTableCell
                    component="th"
                    scope="row"
                    className="icon-navbar"
                  >
                    <FaRegEdit />
                  </StyledTableCell>
                  <StyledTableCell
                    component="th"
                    scope="row"
                    className="icon-trash"
                  >
                    <FaTrash />
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
  );
}

export default ManagementLayout(ManagementProductes);
