import * as yup from "yup";
import { InValidInputNotAllowSymbols, InvalidTypeDate, InvalidTypeEmail, mustBeInput } from "./_template";

/**
 * numberの場合、default値 → 未入力にすると、typeErrorが発火する
 */
const schema = yup.object({
  id: yup.string().required(mustBeInput),
  name: yup.string().required(mustBeInput)
    .matches(/^[ぁ-んー0-9a-zA-Z]*$/, InValidInputNotAllowSymbols)
    .max(30, '30文字未満で入力してください').min(0, '0文字以上で入力して下さい'),
  key: yup.number().required(mustBeInput).typeError(mustBeInput),
  date: yup.date().required(mustBeInput).typeError(InvalidTypeDate),
  email: yup.string().email(InvalidTypeEmail),
  url: yup.string().url("正しい形式でurlを指定してください"),
});