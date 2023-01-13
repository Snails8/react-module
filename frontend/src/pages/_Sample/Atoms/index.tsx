import { Button } from '../../../components/atoms/Button/Button';
import { CheckBox } from '../../../components/atoms/Checkbox/Checkbox';
import { Input } from '../../../components/atoms/Input/Input';
import { Label } from '../../../components/atoms/Label/Label';
import { LoadingSpinner } from '../../../components/atoms/LoadingSpinner/LoadingSpinner';
import { Logo } from '../../../components/atoms/Logo/Logo';
import { RadioButton } from '../../../components/atoms/RadioButton/RadioButton';
import { Textarea } from '../../../components/atoms/Textarea/Textarea';
import { Layout } from '../../../components/templates/_Layout/Layout';
import { useTypeConverter } from '../../../hooks/useTypeConverter';
import styles from './Atoms.module.css';

export const Atoms = () => {
  const hoge = useTypeConverter();

  return (
    <>
      <Layout isContainerDesign>
        <h2>form Item</h2>
        <div className={styles.item}>
          <div className={styles.content}>
            <h5>button</h5>
            <Button
              label="label"
              handleClick={() => console.log('clicked')}
            />
          </div>
          <div className={styles.content}>
            <h5>checkbox</h5>
            <CheckBox
              id="checkbox"
              label="checkbox"
              onChangeHandler={() => console.log('checkbox!')}
            />
          </div>
          <div className={styles.content}>
            <h5>radio</h5>
            <RadioButton
              id="radio"
              label="radio"
              onChangeHandler={() => console.log('radio!')}
            />
          </div>
          <div className={styles.content}>
            <h5>input</h5>
            <Input
              type="text"
              id="text"
              defaultValue="sample"
              onChangeHandler={() => console.log('text')}
            />
          </div>
          <div className={styles.content}>
            <h5>textarea</h5>
            <Textarea
              id="text"
              defaultValue={"sample\ntest"}
              onChangeHandler={() => console.log('text')}
            />
          </div>
        </div>

        <div className={styles.item}>
          <div className={styles.content}>
              <h5>LoadingSpinner</h5>
              <LoadingSpinner />
            </div>
          <div className={styles.content}>
            <h5>Label</h5>
            <Label text="label" color="green" width={100} />
          </div>
          <div className={styles.content}>
            <h5>Logo</h5>
            <Logo />
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
        </div>
      </Layout>
    </>
  );
};
