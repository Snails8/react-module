import * as yup from "yup";

export const sampleSchema = 
  yup.lazy((rootValue) => 
    yup.object({
      name: yup.string(),
    }),
  )
