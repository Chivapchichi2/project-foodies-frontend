import * as yup from "yup";

const yupSchema = yup.object().shape({
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
});

export default yupSchema;