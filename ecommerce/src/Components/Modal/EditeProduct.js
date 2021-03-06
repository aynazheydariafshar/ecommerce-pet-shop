import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useFormik } from "formik";
import { TextField } from "@mui/material";
import useCategory from "hooks/useCategory";
import * as yup from "yup";
import axios from "axios";
import { CKEditor } from "ckeditor4-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { DataContext } from "Context/DataContext";
import { toast } from "react-toastify";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default function EditeProduct({ open, handleClose, employee }) {
  //context data
  const productContext = React.useContext(DataContext);

  //category
  const { category, loadingcategory, errorcategory } = useCategory();

  //show
  const [show, setShow] = React.useState(true);

  //check for api
  const [loadingtwo, setLoadingtwo] = React.useState(true);
  const [errortwo, setErrortwo] = React.useState(null);

  //validation
  const validationSchema = yup.object().shape({
    Name: yup.string().required("پر کردن این فیلد الزامی می باشد"),
    price: yup.number().min(0,"تعداد نمی تواند منفی باشد").required("پر کردن این فیلد الزامی می باشد"),
    count: yup.number().min(0,"تعداد نمی تواند منفی باشد").required("پر کردن این فیلد الزامی می باشد"),
    brand: yup.string().min(0,"تعداد نمی تواند منفی باشد").required("پر کردن این فیلد الزامی می باشد"),
    weight: yup.number().required("پر کردن این فیلد الزامی می باشد"),
    image: yup
      .mixed()
      .test("required", "پر کردن این فیلد الزامی می باشد", (file) => {
        if (file) return true;
        return false;
      }),
    group: yup.string().required("پر کردن این فیلد الزامی می باشد"),
    subgroup: yup.string().when("group", {
      is: (group) => group !== "محصولات پرندگان",
      then: yup.string().required("پر کردن این فیلد الزامی می باشد"),
    }),
  });

  //find group for every product
  const findGroupOfProduct = (subgroup) => {
    let resault = category.find((item) =>
      item.subgroup ? item.subgroup === subgroup : 5
    );
    return resault.id;
  };

  //post image
  const handleChangeimage = async (e) => {
    const data = e.target.files[0];
    const formData = new FormData();
    formData.append("image", data);
    const filename = await axios.post("http://localhost:3002/upload", formData);
    formik.setFieldValue("image", filename.data.filename, false);
  };

  //find type of animal
  const findType = (group) => {
    if (group === "محصولات گربه") {
      return "گربه";
    } else if (group === "محصولات سگ ها") {
      return "سگ";
    } else {
      return "پرندگان";
    }
  };

  //edit data and post data
  const editeData = (values) => {
    setErrortwo(null);
    setLoadingtwo(false);
    axios
      .put(`http://localhost:3002/products/${employee.id}`, {
        name: values.Name,
        brand: values.brand,
        image: values.image,
        price: values.price,
        category: findGroupOfProduct(values.subgroup),
        count: values.count,
        type: findType(values.group),
        weight: values.weight,
        description: values.description,
      })
      .then((response) => {
        productContext.getdata();
        setLoadingtwo(true);
      })
      .catch((error) => {
        setLoadingtwo(true);
        setErrortwo("دوباره تلاش کنید");
        toast.error("خطایی رخ داده است");
      });
  };

  // const findCategoryOfProduct = () => {
  //     let res = category.filter(item => item.id === employee.category);
  //     formik.setFieldValue('group' , res[0]?.group , false)
  //     formik.setFieldValue('subgroup' , res[0]?.subgroup , false)
  // }

  // React.useEffect(() => {
  //     findCategoryOfProduct()
  // }, [])

  //formik
  const formik = useFormik({
    initialValues: {
      Name: employee.name,
      group: " ",
      subgroup: " ",
      image: employee.image,
      weight: employee.weight,
      brand: employee.brand,
      price: employee.price,
      count: employee.count,
      description: employee.description,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      editeData(values);
      setTimeout(() => {
        setShow(!show);
        toast.success("محصول با موفقیت ویرایش شد");
      }, 700);
    },
  });

  return (
    <>
      {show && (
        <div>
          <Modal
            keepMounted
            open={open}
            onClose={handleClose}
            aria-labelledby="keep-mounted-modal-title"
            aria-describedby="keep-mounted-modal-description"
          >
            <Box sx={style}>
              <form dir="rtl" onSubmit={formik.handleSubmit}>
                <Typography variant="h5" align="center" fontWeight="bold">
                  ویرایش کالا
                </Typography>
                <Box sx={{ display: "flex" }}>
                  <TextField
                    fullWidth
                    variant="standard"
                    type="text"
                    label="نام کالا"
                    margin="normal"
                    id="Name"
                    name="Name"
                    value={formik.values.Name}
                    onChange={formik.handleChange}
                    error={formik.touched.Name && Boolean(formik.errors.Name)}
                    helperText={formik.touched.Name && formik.errors.Name}
                  />
                  <TextField
                    fullWidth
                    sx={{ marginRight: "20px" }}
                    variant="standard"
                    type="text"
                    label="برند"
                    margin="normal"
                    id="brand"
                    name="brand"
                    value={formik.values.brand}
                    onChange={formik.handleChange}
                    error={formik.touched.brand && Boolean(formik.errors.brand)}
                    helperText={formik.touched.brand && formik.errors.brand}
                  />
                </Box>
                <Box sx={{ display: "flex" }}>
                  <TextField
                    fullWidth
                    variant="standard"
                    type="text"
                    label="وزن"
                    margin="normal"
                    id="weight"
                    name="weight"
                    value={formik.values.weight}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.weight && Boolean(formik.errors.weight)
                    }
                    helperText={formik.touched.weight && formik.errors.weight}
                  />
                  <TextField
                    sx={{ marginRight: "20px" }}
                    fullWidth
                    variant="standard"
                    type="number"
                    label="قیمت"
                    margin="normal"
                    id="price"
                    name="price"
                    value={formik.values.price}
                    onChange={formik.handleChange}
                    error={formik.touched.price && Boolean(formik.errors.price)}
                    helperText={formik.touched.price && formik.errors.price}
                  />
                  <TextField
                    sx={{ marginRight: "20px" }}
                    fullWidth
                    variant="standard"
                    type="number"
                    label="موجودی"
                    margin="normal"
                    id="count"
                    name="count"
                    value={formik.values.count}
                    onChange={formik.handleChange}
                    error={formik.touched.count && Boolean(formik.errors.count)}
                    helperText={formik.touched.count && formik.errors.count}
                  />
                </Box>
                <Box sx={{ display: "flex" }}>
                  <TextField
                    select
                    SelectProps={{
                      native: true,
                    }}
                    fullWidth
                    variant="standard"
                    type="text"
                    label="گروه"
                    margin="normal"
                    id="group"
                    name="group"
                    value={formik.values.group}
                    onChange={formik.handleChange}
                    error={formik.touched.group && Boolean(formik.errors.group)}
                    helperText={formik.touched.group && formik.errors.group}
                  >
                    <option>انتخاب کنید</option>
                    <option value="محصولات گربه">محصولات گربه</option>
                    <option value="محصولات سگ ها">محصولات سگ ها</option>
                    <option value="محصولات پرندگان">محصولات پرندگان</option>
                  </TextField>
                  {formik.values.group !== "محصولات پرندگان" && (
                    <TextField
                      sx={{ marginRight: "20px" }}
                      select
                      SelectProps={{
                        native: true,
                      }}
                      fullWidth
                      variant="standard"
                      type="text"
                      label="زیر گروه"
                      margin="normal"
                      id="subgroup"
                      name="subgroup"
                      value={formik.values.subgroup}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.subgroup &&
                        Boolean(formik.errors.subgroup)
                      }
                      helperText={
                        formik.touched.subgroup && formik.errors.subgroup
                      }
                    >
                      <option>انتخاب کنید</option>
                      {category.map((el) => {
                        if (formik.values.group === el.group) {
                          return (
                            <>
                              {el.subgroup && (
                                <option key={el.id} value={el.subgroup}>
                                  {el.subgroup}
                                </option>
                              )}
                            </>
                          );
                        }
                      })}
                    </TextField>
                  )}
                  <TextField
                    hidden
                    sx={{ marginRight: "20px", marginBottom: "20px" }}
                    inputProps={{ accept: "image/*" }}
                    fullWidth
                    variant="standard"
                    type="file"
                    label="عکس"
                    margin="normal"
                    id="image"
                    name="image"
                    onChange={(e) => handleChangeimage(e)}
                    error={formik.touched.image && Boolean(formik.errors.image)}
                    helperText={formik.touched.image && formik.errors.image}
                  />
                </Box>
                <CKEditor
                  editor={ClassicEditor}
                  id="description"
                  name="description"
                  value={formik.values.description}
                  onChange={(event, editor) => {
                    formik.setFieldValue(
                      "description",
                      editor.getData(),
                      false
                    );
                  }}
                />
                <Button
                  type="submit"
                  color="secondary"
                  variant="contained"
                  sx={{ marginY: "10px", paddingX: "40px", fontSize: "15px" }}
                >
                  ویرایش
                </Button>
              </form>
            </Box>
          </Modal>
        </div>
      )}
    </>
  );
}
