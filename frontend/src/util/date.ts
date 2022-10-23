import { useCallback } from "react";


type dateFormat = 'yyyy/mm/dd' | 'yy/mm/dd'| 'yy-mm-dd';

/**
 * YYYY-mm-dd(string) -> dateFormat に変換
 */
export const ChangeDateFormat = (type: dateFormat, yyyymmdd: string) => {

  const splitString = yyyymmdd.split('-');

  const year = splitString[0];
  const month= splitString[1];
  const day = splitString[2];

  const yearSplit = year.split('');
  const century = yearSplit[0]+yearSplit[1];
  const yearCount = yearSplit[2]+yearSplit[3];

  let date;
  switch (type) {
    case 'yy/mm/dd':
      date = yearCount +'/' + month + '/' + day;
      break;
    case 'yyyy/mm/dd':
      date = year + '/' + month + '/' + day;
      break;
    case 'yy-mm-dd':
      date = yearCount +'-' + month + '-' + day;
      break;
  }

  return date;
};