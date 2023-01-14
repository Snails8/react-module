export const mustBeInput = '入力は必須です';
export const InValidInputNotAllowSymbols = '記号は入力できません';
export const InvalidTypeDate = '正しい日付を入力してください';
export const InvalidTypeEmail = '正しい形式のメールアドレスを指定してください';
export const InValidInputNumber = '数字を入力してください';
export const InValidInputMoreLen = (len: number) => `${len}文字以上で入力して下さい`;
export const InValidInputLessLen = (len: number) => `${len}文字以内で入力して下さい`;
export const InValidInputMinNum = '最大値より小さく設定してください';
export const InValidInputMaxNum = '最小値より大きく設定してください';


/**
 * 最小値の値が比較対象に対して正しい場合、true
 * 不正の場合 false
 * @param minVal 
 * @param maxVal 
 * @returns 
 */
export const isValidMinNum = (minVal: number, maxVal: number): boolean => {
  if (minVal === maxVal) return false;
  if (minVal > maxVal) return false;
  return true;
};

/**
 * 最大値の値が比較対象に対して正しい場合、true
 * 不正の場合 false
 * @param minVal 
 * @param maxVal 
 * @returns 
 */
export const isValidMaxNum = (maxVal: number, minVal: number): boolean => {
  if (maxVal === minVal) return false;
  if (maxVal < minVal) return false;
  return true;
};

/**
 * targetの文字数を指定する
 * @param target 
 * @param range 
 * @returns 
 */
export const isValidInputRange = (target: string, range: number) => {
  if (target.length !== range) return false;
  return true;
};