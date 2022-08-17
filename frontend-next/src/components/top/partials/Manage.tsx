import React, {FC} from 'react'
import {Button, Card, Col, Row} from "react-bootstrap";
import Link from "next/link";

const Manage:FC<{title: string}> = ({title}) => (
    <>
      <Card.Body>

        <Card.Title>{title}</Card.Title>
        <Card.Text>

          With supporting text below as a natural lead-in to additional content.
        </Card.Text>

        <div className="tab-content">
          <div role="tabpanel" id="tab1">
            <Row className="mb-5">
              <Col md={6}>
                <Card bg="light">
                  <Link href="/manages/user">
                    社員登録
                  </Link>
                </Card>
              </Col>
              <Col md={6}>
                <Card bg="light">
                  部署登録
                </Card>
              </Col>
            </Row>

            <Row className="mb-5">
              <Col md={6}>
                <Card bg="light" className="p-0 h-100">
                  店舗登録
                </Card>
              </Col>
              <Col md={6}>
                <Card bg="light">
                  会社情報編集
                </Card>
              </Col>
            </Row>

            <Button variant="primary">Go somewhere</Button>

          </div>

        </div>
      </Card.Body>
    </>
)

export default Manage