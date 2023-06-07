import { memo } from 'react';
import { User } from '../../../../../types/user';
import { Button } from '../../../../atoms/ui/Button/Button';
import { CheckBox } from '../../../../atoms/form/Checkbox/Checkbox';
import { Input } from '../../../../atoms/form/Input/Input';
import styles from './UsersSearchForm.module.css';

type UsersSearchFormProps = {
  inputUserNameHandler: (value: string) => void;
  checkHandler: (checked: boolean) => void;
  handleClick: (user: User) => void;
};

export const UsersSearchForm = memo((props: UsersSearchFormProps) => {
  const { inputUserNameHandler, checkHandler, handleClick } = props;

  return (
    <div className={styles.container}>
      <div className={styles.input_container}>
        <div className={styles.input}>
          <label>名前</label>
          <Input
            id="input"
            type="text"
            defaultValue=""
            width={300}
            height={35}
            padding={1}
            onChangeHandler={inputUserNameHandler}
          />
        </div>
        <div className={styles.input}>
          <label>email</label>
          <Input
            id="input"
            type="text"
            defaultValue=""
            width={300}
            height={35}
            padding={1}
            onChangeHandler={inputUserNameHandler}
          />
        </div>
      </div>

      <div className={styles.checkbox_container}>
        <div className={styles.checkbox}>
          <CheckBox
            id="checkbox"
            label="checkbox"
            onChangeHandler={checkHandler}
          />
        </div>
        <div className={styles.checkbox}>
          <CheckBox
            id="checkbox"
            label="checkbox"
            onChangeHandler={checkHandler}
          />
        </div>
      </div>
      <div className={styles.button_container}>
        <Button
          colorType="primary"
          label="検索"
          width={100}
          height={35}
          handleClick={handleClick}
        />
      </div>
    </div>
  );
});
