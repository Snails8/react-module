import { Button } from '@module/ui-component';
import styles from './FormHeader.module.css';

type FormHeaderProps = {
  handleSubmit: (e: any) => void,
} 
export const FormHeader = (props: FormHeaderProps) => {
  const {handleSubmit} = props;
  
  return (
    <div className={styles.button_container}>
      <div style={{ marginRight: 20 }}>
        <Button
          label='作成する'
          colorType={'primary'}
          width={150}
          height={50}
          fontSize={18}
          handleClick={handleSubmit}
        />  
      </div>
      <div style={{ marginRight: 10 }}>
        <Button
          label='キャンセル'
          colorType={'tertiary'}
          width={150}
          height={50}
          fontSize={18}
          handleClick={handleSubmit}
        /> 
      </div>
    </div>
  );
};