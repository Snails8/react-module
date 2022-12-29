import { DragEvent, useCallback, useState } from 'react';

import { parse } from 'papaparse';
import { FileName } from '../../../types/csv';

type useUploadHandlerProps = FileName;

type useUploadHandlerType = [
  loadingUpload: boolean,
  successStatusUpload: boolean,
  errorStatusUpload: [],
  onChangeHandlerUploadCsv: (e: React.ChangeEvent<HTMLInputElement>) => void,
  onDropHandler: (e: any) => void,
  onDragHandler: (e: any) => void
];

/**
 * master のuploadに関わるhooks
 * @returns
 */
export const useUploadHandler = (props: useUploadHandlerProps): useUploadHandlerType => {
  const fileName = props;
  const [loadingUpload, setLoadingUpload] = useState<boolean>(false);
  const [successStatusUpload, setSuccessStatusUpload] = useState<boolean>(false);
  const [errorStatusUpload, setErrorStatusUpload] = useState<[]>([]);

  const initStatus = () => {
    setLoadingUpload(true);
    setSuccessStatusUpload(false);
    setErrorStatusUpload([]);
  };
  const successStatus = () => {
    setSuccessStatusUpload(true);
    setLoadingUpload(false);
  };
  const failedStatus = (err: any) => { // TODO::type
    setLoadingUpload(false);
    setErrorStatusUpload(err);
  };

  const onChangeHandlerUploadCsv = async (e: React.ChangeEvent<HTMLInputElement>) => {
    initStatus();

    const files = e.target.files;
    if (files == null) {
      return;
    }
    const parseCsv = await fileParser(files[0]);
    try {
      // validation
    } catch (err) {
      failedStatus(err);
      return;
    }

    successStatus();
  };

  const onDropHandler = useCallback(async (e: DragEvent) => {
    e.preventDefault();
    initStatus();

    const files = e.dataTransfer.files;
    if (files == null) {
      return;
    }

    const parseCsv = await fileParser(files[0]);
    try {
      // validation
    } catch (err) {
      failedStatus(err);
      return;
    }

    successStatus();
    return;
  }, []);

  const onDragOverHandler = useCallback((e: DragEvent) => {
    e.preventDefault();
  }, []);

  return [
    loadingUpload,
    successStatusUpload,
    errorStatusUpload,
    onChangeHandlerUploadCsv,
    onDropHandler,
    onDragOverHandler,
  ];
};

const fileParser = (file: File): any => {
  return new Promise<string>((resolve, reject) => {
    parse(file, {
      complete: (results: any) => {
        resolve(results);
      },
      error: () => {
          // setLoadingUpload(false);
          // setErrorStatusUpload(true);
        reject(new Error('csv parse err'));
      },
    });
  });
};