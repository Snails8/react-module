import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { APIPostUserCreate } from "../../../endpoint";
import { usePost } from "../../../hooks/usePost";
import { UserRole } from '../../../types/user';

export const useUserForm = () => {
  const [company, setCompany] = useState('');
  const [userName, setUserName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState('');
  const [userRole, setUserRole] = useState('');

  const handleInputUserName = (val: string) => {
    setUserName(val);
  };
  const handleInputEmail = (val: string) => {
    setEmail(val);
  };
  const handleInputPassword = (val: string) => {
    setPassword(val);
  };
  const handleInputUserRole = (val: string) => {
    setUserRole(val);
  };

  const roleToLabel = (role: UserRole | null) => {
    if (role != null && role === UserRole.Manager) {
      return '管理者';
    } else if (role != null && role === UserRole.Operator) {
      return '一般ユーザー';
    }
    return '';
  };
  const options = [
    {
      label: roleToLabel(UserRole.Operator),
      value: UserRole.Operator,
    },
    {
      label: roleToLabel(UserRole.Manager),
      value: UserRole.Manager,
    },
  ];

  const {doPostRequest, loading, error, data} = usePost();

  const navigate = useNavigate();
  async function handleSubmit(e: any) {
    e.preventDefault();
    const formData = {
      name: userName,
      email: email,
      password: password,
      role: userRole,
    };

    await doPostRequest({
      method: 'post',
      path: APIPostUserCreate,
      postData: formData,
    });
  }

  return {
    options,
    company,
    userName,
    email,
    password,
    userRole,
    handleInputUserName,
    handleInputEmail,
    handleInputPassword,
    handleInputUserRole,
    handleSubmit
  };
};