import { Button } from '../../atoms/Button/Button';
import { CheckBox } from '../../atoms/Checkbox/Checkbox';
import { Input } from '../../atoms/Input/Input';
import { Label } from '../../atoms/Label/Label';
import { LoadingSpinner } from '../../atoms/LoadingSpinner/LoadingSpiner';
import { RadioButton } from '../../atoms/RadioButton/RadioButton';
import { Layout } from '../_Layout/Layout';
import styles from './AtomsTemplate.module.css';

export const AtomsTemplate = () => {
  return (
    <>
    <Layout isContainerDesign={true}>
      <h2>atoms</h2>

      <div className={styles.content}>
        <h5>button</h5>
        <Button label="label" colorType='primary' width={100} height={25} handleClick={() => console.log('clicked')}/>
      </div>

      <div className={styles.content}>
        <h5>checkbox</h5>
        <CheckBox 
          id='checkbox' label="checkbox"
          onChangeHandler={() => console.log('checkbox!')}
        />
      </div>

      <div className={styles.content}>
        <h5>radio</h5>
        <RadioButton
          id='radio' label='radio'
          onChangeHandler={() => console.log('radio!')}
        />
      </div>

      <div className={styles.content}>
        <h5>input text</h5>
        <Input
          type='text'
          id='text'
          defaultValue='sample'
          required={false}
          width={100}
          height={20}
          padding={15}
          onChangeHandler={() => console.log('text')}
        /> 
      </div>

      <h3>Web design</h3>
      <div className={styles.content}>
        <h5>LoadingSpinner</h5>
        <LoadingSpinner
        />
      </div>

      <div className={styles.content}>
        <h5>Label</h5>
        <Label
          text='label'
          color='green'
          width={100}
        />
      </div>

      <div className={styles.content}>
        <h5>Label2</h5>
        nothing
      </div>

      <div className={styles.content}>
        <h5>ErrorPanel</h5>
        nothing
      </div>

      <div className={styles.content}>
        <h5>Logo</h5>
        nothing
      </div>

      <div className={styles.content}>
        <h5>Notification field</h5>
        nothing
      </div>

      <div className={styles.content}>
        <h5>toast</h5>
        nothing
      </div>

      <div className={styles.content}>
        <h5>card</h5>
        nothing
      </div>

    </Layout>
  </>
  );
};