import {useRequireLogin} from "../../src/hooks/useRequireLogin";
import Layout from "../../src/components/_layouts/Layout";
import {Card, Col, Row, Form, FormControl} from "react-bootstrap";
import React from "react";
import SearchUser from "../../src/components/labors/join/SearchUser";

/**
 * 入社手続き
 * @constructor
 */
const Join = () => {
  useRequireLogin();

  return (
      <>
        <Layout>

          <Card className="my-4">
            <Card.Header className="bg-light">
                <h2 className="h5 text-center">ステータス一覧</h2>
            </Card.Header>
            <Card.Body className="bg-white">
                <Row className="justify-content-center">

                  <div className="col-sm-2">
                    <Card>
                      <Card.Header className="text-center h6">申請中</Card.Header>
                      <Card.Body>
                        <p className="card-text text-center h6">0件</p>
                      </Card.Body>
                    </Card>
                  </div>
                  <div className="col-sm-2">
                    <Card>
                      <Card.Header className="text-center h6">確認中</Card.Header>
                      <Card.Body>
                        <p className="card-text text-center h6">0件</p>
                      </Card.Body>
                    </Card>
                  </div>
                  <div className="col-sm-2">
                    <Card>
                      <Card.Header className="text-center h6">確認済み</Card.Header>
                      <Card.Body>
                        <p className="card-text text-center h6">0件</p>
                      </Card.Body>
                    </Card>
                  </div>

                </Row>

            </Card.Body>
          </Card>


          <div className="btn btn-outline-primary">申請依頼</div>
          <div className="btn btn-outline-primary">自分で入力する</div>


          <SearchUser />


          {/*<table></table>*/}
        </Layout>
      </>
  )
}

export default Join
