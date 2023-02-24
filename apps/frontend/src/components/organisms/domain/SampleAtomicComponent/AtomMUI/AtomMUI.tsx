import { Button } from '../../../../atoms/ui/Button/Button';
import { CheckBox } from '../../../../atoms/form/Checkbox/Checkbox';
import { Label } from '../../../../atoms/ui/Label/Label';
import { LoadingSpinner } from '../../../../atoms/ui/LoadingSpinner/LoadingSpinner';
import { Logo } from '../../../../atoms/ui/Logo/Logo';
import { RadioButton } from '../../../../atoms/form/RadioButton/RadioButton';
import styles from './AtomMUI.module.css';
import { ReactNode } from 'react';
import { UserIcon } from '../../../../atoms/ui/UserIcon/UserIcon';
import { Dropdown } from '../../../../atoms/form/Dropdown/Dropdown';
import { ControlTextField } from '../../../../atoms/_MUI/ControlTextField/ControlTextField';
import { useFormContext } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { RouteControlForm } from '../../../../../RouterConfig';

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

export const AtomMUI = () => {
  const dropdownLists = [
    {label: 'test1', value: 'test1'},
    {label: 'test2', value: 'test2'},
    {label: 'test3', value: 'test3'},
    {label: 'test4', value: 'test4'},
  ];

  return (
    <>
      <h1 className={styles.h1}>MUI</h1>
      <h2>form item</h2>
      <div className={styles.item}>
        <Link to={RouteControlForm}>こちら</Link>
      </div>

      <h2>UI item</h2>
      <div className={styles.item}>
        <Content label="button">
          <Button label="label" handleClick={() => console.log('clicked')}/>
        </Content>

        <Content label="Label">
          <Label text="label" color="green" width={100} />
        </Content>
      </div>
    </>
  );
};
