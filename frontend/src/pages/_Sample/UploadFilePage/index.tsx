
import { UploadFile } from '../../../components/organisms/common/UploadFile/UploadFile';
import { FileNameEnum } from '../../../types/csv';
import { useDownloadFile } from './useDownloadFile';
import { useUploadHandler } from './useUpload';
import styles from './UploadFilePage.module.css';

export const UploadFilePage = () => {
  return (
    <>
      <div className={styles.container}>
        <Contents />
      </div>

      <div className={styles.predict_container}>
        test
      </div>
    </>
  );
};

const Contents = () => {
  const key1 = 'upload-A';
  const key2 = 'upload-B';

  const [ loadingTestCsv, successTestCsv, errorTestCsv, onChangeHandlerTestCsv, onDropHandlerTestCsv, onDragHandlerTestCsv] = useUploadHandler(FileNameEnum.test);
  const [ loadingSampleCsv, successSampleCsv, errorSampleCsv, onChangeHandlerSampleCsv, onDropHandlerSampleCsv, onDragHandlerSampleCsv] = useUploadHandler(FileNameEnum.test);

  const downloadTestCsv = useDownloadFile('csv', FileNameEnum.sample, []);
  const downloadSampleCsv = useDownloadFile('csv', FileNameEnum.test, []);

  return (
    <div className={styles.panel_container}>
      <div className={styles.panel_item}>
        <UploadFile
          panelTitle="testA"
          keyName={key1}
          handleClick={downloadTestCsv}
          loading={loadingTestCsv}
          successStatus={successTestCsv}
          errorStatus={errorTestCsv}
          onUploadHandler={onChangeHandlerTestCsv}
          onDropHandler={onDropHandlerTestCsv}
          onDragOverHandler={onDragHandlerTestCsv}
        />
      </div>
      <div className={styles.panel_item}>
        <UploadFile
          panelTitle="testA"
          keyName={key2}
          handleClick={downloadSampleCsv}
          loading={loadingSampleCsv}
          successStatus={successSampleCsv}
          errorStatus={errorSampleCsv}
          onUploadHandler={onChangeHandlerSampleCsv}
          onDropHandler={onDropHandlerSampleCsv}
          onDragOverHandler={onDragHandlerSampleCsv}
        />
      </div>
    </div>
  );
};