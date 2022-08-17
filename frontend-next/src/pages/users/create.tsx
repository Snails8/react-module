import React from "react";
import Layout from "../../src/components/_layouts/Layout";
import {Card, Button} from "react-bootstrap";
import UserForm from "../../src/components/user/UserForm";

const create = ({}) => {

  return (
      <>
        <Layout title={'user管理'} >
          <UserForm />
        </Layout>
      </>
  )
}

export default create