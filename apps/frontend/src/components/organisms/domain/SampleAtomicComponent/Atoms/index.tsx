import { Button } from '@module/ui-component';
import { Checkbox } from '@module/ui-component';
import { Input } from '@module/ui-component';
import { Label } from '@module/ui-component';
import { LoadingSpinner } from '@module/ui-component';
import { Logo } from '@module/ui-component';
import { RadioButton } from '@module/ui-component';
import { Textarea } from '@module/ui-component';
import styles from './Atoms.module.css';
import { ReactNode } from 'react';
import { UserIcon } from '@module/ui-component';
import { Dropdown } from '@module/ui-component';

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
          <Checkbox
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
