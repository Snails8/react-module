import React from "react";
import {Button, Card, Col, Container, Nav, Row} from "react-bootstrap";
import Layout from "../../src/components/_layouts/Layout";
import {useRequireLogin} from "../../src/hooks/useRequireLogin";
import RestIndex from "../../src/components/rest";


const Home = ({users}) => {
  useRequireLogin();

  return (
      <>
        <Layout>
          <Col md="10" className="border">
            {
              users !== null ?
                  <RestIndex users={users}/> : <h4>データが存在しません</h4>
            }
          </Col>

        </Layout>
      </>
  )
}

export default Home

export async function getServerSideProps(ctx) {

  let users = null

  try {
    const res = await fetch(process.env.API_URL + '/api/hr_admin/user', {
      headers: {
        cookie: ctx.req.headers.cookie
      }
    })
    users = await res.json()
  } catch (e) {
    console.log(e)
  }

  console.log(users)

  return {
    props: {
      users: users
    }
  }

  // [
  //     {
  //       id: 1,
  //       name: 'たにし',
  //       kana: 'タニシ',
  //       email: 'sample@gmail.com',
  //       email_verified_at: '2021-11-12T00:30:40.000000Z',
  //       role: 'master',
  //       post: '',
  //       office_id: 1,
  //       created_at: '2021-11-12T00:30:40.000000Z',
  //       updated_at: '2021-11-12T00:30:40.000000Z'
  //     }
  // ]

}