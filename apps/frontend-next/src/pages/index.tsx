import React from "react";
import {Button, Card, Col, Container, Nav, Row} from "react-bootstrap";
import Layout from "../components/_layouts/Layout";
import {useRequireLogin} from "../hooks/useRequireLogin";
import Labor from "../components/top/partials/Labor";
import Manage from "../components/top/partials/Manage";
import Sample from "../components/top/partials/Sample";
import Tab from "../components/top/Tab";


const Home = () => {
  useRequireLogin();
  
    return (
        <>
          <Layout>

              <Col md="10" className="border">
                  <Tab
                  title={['労務', '経費申請', '管理者']}
                  content={[
                      <Labor title="労務"/>,
                      <Sample title="経費申請" />,
                    <Manage title="管理者" />,
                  ]}
                  >

                  </Tab>

              </Col>

              {/*<Card>*/}
              {/*  <Card.Header>*/}
              {/*    <Nav fill variant="tabs" defaultActiveKey="#first">*/}
              {/*      <Nav.Item>*/}
              {/*        <Nav.Link role="presentation" href="#tab1">労務 Active</Nav.Link>*/}
              {/*      </Nav.Item>*/}
              {/*      <Nav.Item>*/}
              {/*        <Nav.Link role="presentation" href="#tab2">勤怠 Link</Nav.Link>*/}
              {/*      </Nav.Item>*/}
              {/*      <Nav.Item>*/}
              {/*        <Nav.Link role="presentation" href="#tab3">経費申請 Link</Nav.Link>*/}
              {/*      </Nav.Item>*/}
              {/*      <Nav.Item>*/}
              {/*        <Nav.Link role="presentation" href="#tab4">管理者</Nav.Link>*/}
              {/*      </Nav.Item>*/}
              {/*      <Nav.Item>*/}
              {/*        <Nav.Link role="presentation" href="#disabled" disabled>*/}
              {/*          Disabled*/}
              {/*        </Nav.Link>*/}
              {/*      </Nav.Item>*/}
              {/*    </Nav>*/}
              {/*  </Card.Header>*/}
              {/*</Card>*/}
          </Layout>
        </>
    )
}

export default Home