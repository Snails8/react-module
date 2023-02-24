export enum FileNameEnum {
  test = 'テストファイル',
  sample = 'サンプルファイル'
}

export type FileName = (
  FileNameEnum.test | 
  FileNameEnum.sample
);