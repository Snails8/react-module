import React from 'react';
import { Checkbox } from '@module/ui-component';
import { Input } from '@module/ui-component';
import { useForm } from './useForm.hooks';
import styles from './Form.module.css';

export const SimpleForm: React.FC = () => {

  const {name, email, checked, handleChangeInput, handleChangeChecked ,handleSubmit} = useForm();

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className={styles.form_container}>
          <div className={styles.form_item}>
            <div className={styles.container_inner}>
              <span className={styles.form_label}>名前</span>
              <Input
                type="text"
                id="name"
                defaultValue={name}
                required={true}
                width={400}
                height={30}
                padding={10}
                onChangeHandler={(value: string) => handleChangeInput(value, "name")}
              />
            </div>
          </div>
          <div className={styles.form_item}>
            <div className={styles.container_inner}>
              <span className={styles.form_label}>メール</span>
              <Input
                type="email"
                id="email"
                defaultValue={email}
                required={true}
                width={400}
                height={30}
                padding={10}
                onChangeHandler={(value: string) => {
                  handleChangeInput(value, "email");
                }}
              />
            </div>
          </div>
          <div className={styles.form_item}>
            <Checkbox
              id="test-from"
              label="checkbox"
              onChangeHandler={(value) => handleChangeChecked(value, "checked")}
            />
          </div>
        </div>
        <div>
          <button type="submit" className="btn btn-success">
            保存
          </button>
        </div>
      </form>
    </>
  );
};
