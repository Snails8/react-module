import { useNavigate } from 'react-router-dom';
import { Dropdown } from '@module/ui-component';
import { Input } from '@module/ui-component';
import { TwinItem } from '@module/ui-component'; 

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
          <TwinItem label={"会社名"}>
            <p>{company}</p>
          </TwinItem>
          <TwinItem label={"ユーザー名"}>
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
          </TwinItem>
          <TwinItem label="メールアドレス">
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
          </TwinItem>
          <TwinItem label={"パスワード"}>
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
          </TwinItem>
          <TwinItem label={"パスワードの確認"}>
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
          </TwinItem>
          <TwinItem label={"ユーザー識別"}>
            <Dropdown
              options={options}
              defaultValue={userRole}
              width={400}
              onChangeHandler={(value) => {
                handleInputUserRole(value);
              }}
            />
          </TwinItem>
        </form>
      </div>
    </div>
  );
};  