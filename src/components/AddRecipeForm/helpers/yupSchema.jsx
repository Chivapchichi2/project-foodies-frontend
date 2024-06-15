import * as yup from "yup";

const SUPPORTED_FORMATS = [
  "image/jpg",
  "image/jpeg",
  "image/png",
  "image/gif",
  "image/bmp",
  "image/tiff",
];
const yupSchema = yup.object().shape({
  thumb: yup
    .mixed()
    .test("file", "You need to provide a file", (value) => {
      if (value.length > 0) {
        return true;
      }
      return false;
    })
    .test("file", "You need to provide a file", (value) => {
      if (value.length > 0) {
        return true;
      }
      return false;
    })
    .test("fileType", "Invalid file format", (value) => {
      if (!value || typeof value === "string") return true;

      return SUPPORTED_FORMATS.includes(value[0]?.type);
    })
    .test("fileSize", "The file is too large", (file) => {
      return file && file.size <= 2000000;
    }),
  title: yup.string().required("Title is required"),
  description: yup
    .string()
    .max(200, "Description must be at most 200 characters")
    .required("Description is required"),
  category: yup.string().required("Category is required"),
  area: yup.string().required("Area is required"),
  time: yup.number().positive().integer().required("Cooking time is required"),
  selectedIngredients: yup
    .array()
    .min(1, "At least one ingredient must be added")
    .of(
      yup.object().shape({
        id: yup.string().required("Ingredient ID is required"),
        measure: yup.string().required("Quantity is required"),
      })
    ),
  instructions: yup
    .string()
    .max(200, "Instructions must be at most 200 characters")
    .required("Instructions are required"),
});
export default yupSchema;

// const yupSchema = yup.object().shape({
// thumb: yup.mixed().required("Image is required"),
// title: yup.string().required("Title is required"),
// description: yup
//   .string()
//   .max(200, "Description must be at most 200 characters")
//   .required("Description is required"),
// category: yup.string().required("Category is required"),
// area: yup.string().required("Area is required"),
// time: yup.string().required("Cooking time is required"),
// selectedIngredients: yup
//   .array()
//   .min(1, "At least one ingredient must be added")
//   .of(
//     yup.object().shape({
//       value: yup.string().required("Ingredient value is required"),
//       label: yup.string().required("Ingredient label is required"),
//       measure: yup.string().required("Quantity is required"),
//     })
//   ),
// ingredient: yup
//   .object()
//   .shape({
//     value: yup.string().required("Ingredient value is required"),
//     label: yup.string().required("Ingredient label is required"),
//   })
//   .required("Ingredient is required")
//   .nullable(),
// measure: yup.string().required("Quantity is required"),
// instructions: yup
//   .string()
//   .max(200, "Instructions must be at most 200 characters")
//   .required("Instructions are required"),
// });

// export default yupSchema;
