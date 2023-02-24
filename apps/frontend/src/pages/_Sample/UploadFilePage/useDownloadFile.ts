import ExcelJS from 'exceljs';
import encoding from "encoding-japanese";

import { FileName, FileNameEnum } from '../../../types/csv';
import { APIPathMasterSample, APIPathMasterTest } from '../../../endpoint';

type format = 'csv' | 'xlsx';
type charCode = 'UTF-8' | 'Shift-JIS';

export const useDownloadFile = (format: format, fileName: FileName , value: any[]) => {
  const header = getCsvHeaderFromType(fileName);
  const charCode: charCode = 'Shift-JIS';

  const handleClickDownloadCsv = async () => {
    const rows = await getCsvRowsFromType(fileName, value);

    const workbook = new ExcelJS.Workbook();
    workbook.addWorksheet('sheet1');
    const worksheet = workbook.getWorksheet('sheet1');

    // csv 中身作成
    worksheet.columns = header;
    worksheet.addRows(rows);

    const uint8Array = format === 'xlsx' ? 
      await workbook.xlsx.writeBuffer() : 
      new Uint8Array(
        encoding.convert(await workbook.csv.writeBuffer() as Uint8Array, {
          from: "UTF8", 
          to: "SJIS"
        })
      );
    const blob = new Blob([uint8Array], { type: 'application/octet-binary' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');

    a.href = url;
    a.download = `${fileName}.` + format;
    a.click();
    a.remove();
  };

  return handleClickDownloadCsv;
};

// 現状master で取得するcsv以外は
const getCsvRowsFromType = (fileName: FileName, value: any[]): Promise<any[]> | any[] => {
  if (value.length > 0) return value;

  const api = async (path: string) => {
    const data = await fetch(path, {
      method: 'GET',
    });
    const jsonData = await data.json();
    const val = jsonData.data;
    return val;
  };

  // value 指定がない場合、fetchしてくる
  switch (fileName) {
    case FileNameEnum.test:
      return api(APIPathMasterTest);
    case FileNameEnum.sample:
      return api(APIPathMasterSample);
    default:
      // const  _ :never = fileName;
      return [];
  };
};

const getCsvHeaderFromType = (fileName: FileName) => {
  let header = [];
  switch (fileName) {
    case FileNameEnum.test:
      return header = [
        { header: '日付', key: 'date' },        
        { header: '金額', key: 'money' },
      ];
    case FileNameEnum.sample:
      return header = [
        { header: '名前', key: 'name' },        
        { header: '文章', key: 'detail' },
      ];
    default:
      const  _ :never = fileName;
      return header = [];
  };
};

