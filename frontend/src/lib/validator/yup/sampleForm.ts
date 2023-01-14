import * as yup from "yup";
import { InValidInputLessLen, InValidInputMoreLen, InValidInputNotAllowSymbols, InvalidTypeDate, InvalidTypeEmail, mustBeInput } from "./_template";

/**
 * numberの場合、default値 → 未入力にすると、typeErrorが発火する
 */
export const sampleFormSchema = yup.object({
  // input
  name: yup.string().required(mustBeInput)
    .matches(/^[ぁ-んー0-9a-zA-Z]*$/, InValidInputNotAllowSymbols)
    .max(30, InValidInputLessLen(30)).min(0, InValidInputMoreLen(0)),
  age: yup.number().required(mustBeInput).typeError(mustBeInput).max(3, InValidInputMoreLen(3)),
  email: yup.string().required(mustBeInput).email(InvalidTypeEmail),
  
  // date
  date: yup.date().required(mustBeInput).typeError(InvalidTypeDate),
  
  // select
  selectId: yup.string().required(mustBeInput),
  
  // radio
  gender: yup.string().required(mustBeInput),

  // checkbox
  check1: yup.number().required(mustBeInput).typeError(mustBeInput),
});