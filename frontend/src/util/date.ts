/**
 * YYYY-mm-dd(string) -> dateFormat に変換
 */
type changeFormat = 'YYYY/MM/DD' | 'YY/MM/DD' | 'YY-MM-DD' | 'YYYY年MM月DD日';
export const changeStrToDateFormat = (target: string, type: changeFormat, cutZero?: boolean): string | undefined => {
  const splitString = target.split('-').length === 3 ? target.split('-'): target.split('/');
  if (splitString.length !== 3) return undefined;

  const year = splitString[0];
  let month = splitString[1];
  let day = splitString[2];

  if (cutZero) {
    month = month[0] === "0" ? month[1] : month;
    day = day[0] === "0" ? day[1] : day;
  }

  const yearSplit = year.split('');
  const century = yearSplit[0] + yearSplit[1];
  const yearCount = yearSplit[2] + yearSplit[3];

  switch (type) {
    case 'YYYY/MM/DD':
      return yearCount + '/' + month + '/' + day;
    case 'YY/MM/DD':
      return year + '/' + month + '/' + day;
    case 'YY-MM-DD':
      return yearCount + '-' + month + '-' + day;
    case 'YYYY年MM月DD日':
      return year + '年' + month + '月' + day + '日';
    default:
      const _: never = type; // eslint-disable-line
      return yearCount + '/' + month + '/' + day;
  }
};