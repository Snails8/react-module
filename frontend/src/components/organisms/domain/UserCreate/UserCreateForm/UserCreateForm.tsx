import { useNavigate } from 'react-router-dom';
import { Dropdown } from '../../../../atoms/Form/Dropdown/Dropdown';
import { Input } from '../../../../atoms/Form/Input/Input';
import { FormItem } from '../../../../molecules/FormItem/FormItem'; 

import styles from './UserCreateForm.module.css';

type UserCreateFormProps = {
  options: {label: string; value: any;}[]
  company: string
  userName: string
  email: string
  password: any
  userRole: string
  handleInputUserName: (value: string) => void
  handleInputEmail: (value: string) => void
  handleInputPassword: (value: string) => void
  handleInputUserRole: (value: string) => void
  handleSubmit: (e:any) => void
}
export const UserCreateForm = (props: UserCreateFormProps) => {
  const navigate = useNavigate();
  const { options, company, userName, email, password, userRole, handleInputUserName, handleInputEmail, handleInputPassword, handleInputUserRole, handleSubmit } = props;

  return (
    <div>
      <div className={styles.container}>
        <form onSubmit={handleSubmit}>
          <FormItem label={"会社名"}>
            <p>{company}</p>
          </FormItem>
          <FormItem label={"ユーザー名"}>
            <Input type="text" id="name"
              defaultValue={userName}
              required={true}
              width={400}
              height={30}
              padding={10}
              onChangeHandler={(value: string) => {
                handleInputUserName(value);
              }}
            />
          </FormItem>
          <FormItem label="メールアドレス">
            <Input
              type="email"
              id="email"
              defaultValue={email}
              required={true}
              width={400}
              height={30}
              padding={10}
              onChangeHandler={(value: string) => {
                handleInputEmail(value);
              }}
            />
          </FormItem>
          <FormItem label={"パスワード"}>
            <Input type="text" id="password"
              defaultValue={password}
              required={true}
              width={400}
              height={30}
              padding={10}
              onChangeHandler={(value: string) => {
                handleInputPassword(value);
              }}
            />
          </FormItem>
          <FormItem label={"パスワードの確認"}>
            <Input type="text" id="name"
              defaultValue={password}
              required={true}
              width={400}
              height={30}
              padding={10}
              onChangeHandler={(value: string) => {
                handleInputPassword(value);
              }}
            />
          </FormItem>
          <FormItem label={"ユーザー識別"}>
            <Dropdown
              options={options}
              defaultValue={userRole}
              width={400}
              onChangeHandler={(value) => {
                handleInputUserRole(value);
              }}
            />
          </FormItem>
        </form>
      </div>
    </div>
  );
};  