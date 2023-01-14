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
import { Dropdown } from '../../atoms/Form/Dropdown/Dropdown';
import { Table } from '../../molecules/Table/Table';

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
      
      <div className={styles.item}>
        <Table header={header} body={body}/>
      </div>
    </>
  );
};
