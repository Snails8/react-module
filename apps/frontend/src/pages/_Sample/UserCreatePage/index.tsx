import { UserCreateForm } from '../../../components/organisms/domain/UserCreate/UserCreateForm/UserCreateForm';
import { useUserForm } from './useUserForm';
import { FormHeader } from '../../../components/organisms/domain/UserCreate/FormHeader/FormHeader';

export const UserCreate = () => {
  const { options, userName, email, password, company, userRole, handleInputUserName, handleInputEmail, handleInputPassword, handleInputUserRole, handleSubmit} = useUserForm();

  return (
    <>
      <FormHeader 
        handleSubmit={handleSubmit}
      />
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
    </>
  );
};
