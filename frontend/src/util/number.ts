

/**
 * true：日付、数値、１０真数、bool
 * false：文字列、空文字列、null, undefined は文字として扱う
 * @param str 
 * @returns 
 */
export const isNumber = (str: string): boolean => (!(Number.isNaN(Number(str))) && str !== '' && str !== null);