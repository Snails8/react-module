import { Button } from '../../atoms/UI/Button/Button';
import { CheckBox } from '../../atoms/Form/Checkbox/Checkbox';
import { Input } from '../../atoms/Form/Input/Input';
import { Label } from '../../atoms/UI/Label/Label';
import { LoadingSpinner } from '../../atoms/UI/LoadingSpinner/LoadingSpinner';
import { Logo } from '../../atoms/UI/Logo/Logo';
import { RadioButton } from '../../atoms/Form/RadioButton/RadioButton';
import { Textarea } from '../../atoms/Form/Textarea/Textarea';
import { useTypeConverter } from '../../../hooks/useTypeConverter';
import styles from './Atoms.module.css';
import { ReactNode } from 'react';
import { UserIcon } from '../../atoms/UI/UserIcon/UserIcon';

type ContentProps = {
  label: string,
  children: ReactNode,
}

const Content = (props: ContentProps) => {
  const {label, children} = props;
  return (
    <div className={styles.content}>
      <h5>{label}</h5>
      {children}
    </div>
  );
};

export const Atoms = () => {
  const hoge = useTypeConverter();

  return (
    <>
      <h2>form Item</h2>
      <div className={styles.item}>
        <Content label="button">
          <Button label="label" handleClick={() => console.log('clicked')}/>
        </Content>

        <Content label="checkbox">
          <CheckBox
            id="checkbox"
            label="checkbox"
            onChangeHandler={() => console.log('checkbox!')}
          />
        </Content>

        <Content label="radio">
          <RadioButton
            id="radio"
            label="radio"
            onChangeHandler={() => console.log('radio!')}
          />
        </Content>

        <Content label="input">
          <Input
            type="text"
            id="text"
            defaultValue="sample"
            onChangeHandler={() => console.log('text')}
          />
        </Content>

        <Content label="textarea">
          <Textarea id="text" defaultValue={"sample\ntest"} onChangeHandler={() => console.log('text')}/>
        </Content>
      </div>

      <h2>UI Item</h2>
      <div className={styles.item}>
        <Content label="LoadingSpinner">
          <LoadingSpinner />
        </Content>

        <Content label="Label">
          <Label text="label" color="green" width={100} />
        </Content>

        <Content label="LoadingSpinner">
          <Logo />
        </Content>

        <Content label="user icon">
          <UserIcon />
        </Content>
      </div>
    </>
  );
};
