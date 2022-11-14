import React from 'react';
import { UserCreateForm } from '../../components/organisms/UserCreateForm/UserCreateForm';
import { Layout } from '../../components/templates/_Layout/Layout';

export const UserCreate = () => {
  return (
    <>
      <Layout isContainerDesign={true}>
        <UserCreateForm />
      </Layout>
    </>
  );
};
