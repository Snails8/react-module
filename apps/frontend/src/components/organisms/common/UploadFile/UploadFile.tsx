import { memo } from 'react';
import { Button } from '@module/ui-component';
import { LoadingSpinner } from '@module/ui-component';
import { NotificationField } from '@module/ui-component';
import styles from './UploadFile.module.css';

type UploadFileProps = {
  panelTitle: string;
  keyName?: string;
  loading: boolean;
  successStatus: boolean;
  errorStatus: [];
  handleClick:  () => Promise<void>;
  onUploadHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onDropHandler: (e: any) => void;
  onDragOverHandler: (e: any) => void;
};

export const UploadFile = memo((props: UploadFileProps) => {
  const {
    panelTitle,
    keyName = 'upload',
    loading,
    successStatus,
    errorStatus,
    handleClick,
    onUploadHandler,
    onDropHandler,
    onDragOverHandler,
  } = props;

  return (
    <div className={styles.panel}>
      <div className={styles.panel_title_container}>
        <div className={styles.panel_title}>{panelTitle}</div>
        <div className={styles.button_container}>
          <Button label="ダウンロード" colorType="tertiary" width={135} height={40} handleClick={handleClick} />
        </div>
      </div>
      <div className={styles.drag_and_drop_area} onDragOver={onDragOverHandler} onDrop={onDropHandler}>
        <div className={styles.description}>
          <div>ドラッグ or</div>
          <label htmlFor={`${keyName}-csv-input`} className={styles.label}>
            ファイルを選択
          </label>
          <span>できる</span>
          <input
            className={styles.input}
            type="file"
            id={`${keyName}-csv-input`}
            accept=".csv"
            onChange={onUploadHandler}
          />
        </div>
      </div>
      <div className={styles.spinner_container}>{loading && <LoadingSpinner />}</div>
      <div className={styles.notification_container}>
        {successStatus && <NotificationField type="success" message="登録完了しました" />}
      </div>
      <div className={styles.notification_container}>
        {errorStatus.length > 0 && <NotificationField type="error" message="エラーが発生しました。" messages={errorStatus}/>}
      </div>
    </div>
  );
});
