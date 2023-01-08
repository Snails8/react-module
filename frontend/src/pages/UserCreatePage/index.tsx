import { Button } from '../../components/atoms/Button/Button';
import { UserCreateForm } from '../../components/organisms/UserCreateForm/UserCreateForm';
import { Layout } from '../../components/templates/_Layout/Layout';
import { useUserForm } from './useUserForm';
import styles from './UserCreatePage.module.css';

export const UserCreate = () => {
  const { options, userName, email, password, company, userRole, handleInputUserName, handleInputEmail, handleInputPassword, handleInputUserRole, handleSubmit} = useUserForm();


  return (
    <>
      <Layout isContainerDesign>
        <div className={styles.button_container}>
          <div style={{ marginRight: 20 }}>
            <Button
              label='作成する'
              colorType={'primary'}
              width={150}
              height={50}
              fontSize={18}
              handleClick={handleSubmit}
            />  
          </div>
          <div style={{ marginRight: 10 }}>
            <Button
              label='キャンセル'
              colorType={'tertiary'}
              width={150}
              height={50}
              fontSize={18}
              handleClick={handleSubmit}
            /> 
          </div>
        </div>
        <UserCreateForm 
          options={options}
          company={company}
          userName={userName}
          email={email}
          password={password}
          userRole={userRole}
          handleInputUserName={handleInputUserName}
          handleInputEmail={handleInputEmail}
          handleInputPassword={handleInputPassword}
          handleInputUserRole={handleInputUserRole}
          handleSubmit={handleSubmit} 
        />
      </Layout>
    </>
  );
};
