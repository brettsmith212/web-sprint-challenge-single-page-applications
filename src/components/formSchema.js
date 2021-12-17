import * as yup from "yup";

const formSchema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .required("Name Required")
    .min(2, "name must be at least 2 characters"),
  orderSize: yup.string().trim().required("Order Size Required"),
  pepperoni: yup.boolean(),
  sausage: yup.boolean(),
  grilledChicken: yup.boolean(),
  onions: yup.boolean(),
  pineapple: yup.boolean(),
  ham: yup.boolean(),
  specialText: yup.string().trim(),
});

export default formSchema;
