import * as yup from "yup";

const yupSchema = yup.object().shape({
  image: yup.mixed().required("Image is required"),
  title: yup.string().required("Title is required"),
  description: yup
    .string()
    .max(200, "Description must be at most 200 characters")
    .required("Description is required"),
  category: yup
    .object()
    .shape({
      value: yup.string().required(),
      label: yup.string().required(),
    })
    .required("Category is required")
    .nullable(),
  cookingTime: yup
    .number()
    .min(1, "Cooking time must be at least 1 minute")
    .required("Cooking time is required"),
  ingredient: yup
    .object()
    .shape({
      value: yup.string().required(),
      label: yup.string().required(),
    })
    .required("Ingredient is required")
    .nullable(),
  quantity: yup.number().required("Quantity is required"),
  instructions: yup
    .string()
    .max(200, "Instructions must be at most 200 characters")
    .required("Instructions are required"),
});

export default yupSchema;
