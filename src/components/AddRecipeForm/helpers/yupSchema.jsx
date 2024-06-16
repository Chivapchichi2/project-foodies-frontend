import * as yup from "yup";

const maxWords = (max) => {
  return yup.string().test("maxWords", `Must be at most ${max} words`, function (value) {
    const words = value ? value.trim().split(/\s+/) : [];
    return words.length <= max;
  });
};

// const SUPPORTED_FORMATS = [
//   "image/jpg",
//   "image/jpeg",
//   "image/png",
//   "image/gif",
//   "image/bmp",
//   "image/tiff",
// ];
const yupSchema = yup.object().shape({
  // thumb: yup
  //   .mixed()
  //   .test("file", "You need to provide a file", (value) => {
  //     if (value.length > 0) {
  //       return true;
  //     }
  //     return false;
  //   })
  //   .test("fileType", "Invalid file format", (value) => {
  //     if (!value || typeof value === "string") return true;

  //     return SUPPORTED_FORMATS.includes(value[0]?.type);
  //   })
  //   .test("fileSize", "The file is too large", (file) => {
  //     return file && file.size <= 2000000;
  //   }),
  title: yup.string().required("Title is required"),
  description: yup
    .string()
    .max(200, "Description must be at most 200 characters")
    .required("Description is required"),
  category: yup.string().required("Category is required"),
  area: yup.string().required("Area is required"),
  // time: yup.number().positive().integer().required("Cooking time is required"),
  // selectedIngredients: yup
  //   .array()
  //   .min(1, "At least one ingredient must be added")
  //   .of(
  //     yup.object().shape({
  //       id: yup.string().required("Ingredient ID is required"),
  //       measure: yup.string().required("Quantity is required"),
  //     })
  // )
  // ,
  instructions: yup.string().required("Instructions are required"),
});
export default yupSchema;
