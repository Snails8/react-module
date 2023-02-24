import React from "react";
import Layout from "../../src/components/_layouts/Layout";
import {Card, Button} from "react-bootstrap";
import UserForm from "../../src/components/user/UserForm";

const Users = ({ssrData}) => {

  console.log(ssrData.users)

  return (
      <>
        <Layout title={'user管理'} >

          <Card>
            <Card.Header>基本情報</Card.Header>
            <Card.Body>
              <Card.Title>Special title treatment</Card.Title>
              <Card.Text>

                With supporting text below as a natural lead-in to additional content.
              </Card.Text>
              <Button variant="primary" href="users/create">作成</Button>
            </Card.Body>
          </Card>

        </Layout>
      </>
  )
}

export async function getServerSideProps(ctx) {
  let users = null;

  try {
    const res = await fetch(process.env.API_URL + `/api/hr_admin/users`, {
      headers: {
        cookie: ctx.req.headers.cookie
      }
    })
    users = await res.json();
  } catch (e) {
    console.log(e)
  }

  return {
    props: {
      ssrData: {
        users: users
      },
    },
  }
}

export default Users