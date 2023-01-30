import React, { useEffect, useState } from 'react';
import styles from './DownloadCSVExcel.module.css';
import ExcelJS from 'exceljs';

export const DownloadCSVExcel: React.FC = () => {
  const handlerClickDownloadButton = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    format: 'xlsx' | 'csv'
  ) => {
    e.preventDefault();

    const workbook = new ExcelJS.Workbook();
    workbook.addWorksheet('sheet1');
    const worksheet = workbook.getWorksheet('sheet1');

    const header = getHeader();
    const rows = getRows();
    worksheet.columns = header;
    worksheet.addRows(rows);

    const uint8Array =
      format === 'xlsx'
        ? await workbook.xlsx.writeBuffer()
        : await workbook.csv.writeBuffer();
    const blob = new Blob([uint8Array], { type: 'application/octet-binary' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'sampleData.' + format; //フォーマットによってファイル拡張子を変えている
    a.click();
    a.remove();
  };

  const [hoge, setHoge] = useState('');

  // useEffect(() => {
  //   window.addEventListener('load',() => {
  //     ''
  //   })
  //   setHoge('reload')
  //   console.log('test')
  // },[hoge])

  while (hoge == '') {
    window.addEventListener('load', () => {
      ('');
    });
    console.log('test');
  }

  return (
    <>
      <header>
        <h1>データ出力</h1>
      </header>
      <button onClick={(e) => handlerClickDownloadButton(e, 'xlsx')}>
        Excel形式
      </button>
      <button onClick={(e) => handlerClickDownloadButton(e, 'csv')}>
        CSV形式
      </button>
    </>
  );
};

const getHeader = () => {
  const header = [
    { header: 'ID', key: 'id' },
    { header: '作成日時', key: 'createdAt' },
    { header: '名前', key: 'name' },
  ];
  return header;
};

const getRows = () => {
  const rows = [
    {
      id: 'f001',
      createdAt: 1629902208,
      name: 'りんご',
    },
    {
      id: 'f002',
      createdAt: 1629902245,
      name: 'ぶとう',
    },
    {
      id: 'f003',
      createdAt: 1629902265,
      name: 'ばなな',
    },
  ];

  return rows;
};