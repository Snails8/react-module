import { Button } from '../../../../atoms/ui/Button/Button';
import { CheckBox } from '../../../../atoms/form/Checkbox/Checkbox';
import { Input } from '../../../../atoms/form/Input/Input';
import { Label } from '../../../../atoms/ui/Label/Label';
import { LoadingSpinner } from '../../../../atoms/ui/LoadingSpinner/LoadingSpinner';
import { Logo } from '../../../../atoms/ui/Logo/Logo';
import { RadioButton } from '../../../../atoms/form/RadioButton/RadioButton';
import { Textarea } from '../../../../atoms/form/Textarea/Textarea';
import styles from './Atoms.module.css';
import { ReactNode } from 'react';
import { UserIcon } from '../../../../atoms/ui/UserIcon/UserIcon';
import { Dropdown } from '../../../../atoms/form/Dropdown/Dropdown';

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
  const dropdownLists = [
    {label: 'test1', value: 'test1'},
    {label: 'test2', value: 'test2'},
    {label: 'test3', value: 'test3'},
    {label: 'test4', value: 'test4'},
  ];

  const header = ['th1', 'th2', 'th3'] as const;
  const body = [
    ['1a', '1b', '1c'],
    ['2a', '2b', '2c'],
    ['3a', '3b', '3c'],
  ];

  return (
    <>
      <h2>form item</h2>
      <div className={styles.item}>
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
        <Content label="radio">
          <Dropdown
            options={dropdownLists}
            defaultValue={'test1'}
            onChangeHandler={() => console.log('select!')}
          />
        </Content>
      </div>

      <h2>UI item</h2>
      <div className={styles.item}>
        <Content label="button">
          <Button label="label" handleClick={() => console.log('clicked')}/>
        </Content>

        <Content label="Label">
          <Label text="label" color="green" width={100} />
        </Content>

        <Content label="LoadingSpinner">
          <LoadingSpinner />
        </Content>

        <Content label="logo">
          <Logo />
        </Content>

        <Content label="user icon">
          <UserIcon />
        </Content>
      </div>
    </>
  );
};
