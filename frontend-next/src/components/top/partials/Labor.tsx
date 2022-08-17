import React, {FC} from 'react'
import {Button, Card, Col, Row} from "react-bootstrap";
import Link from 'next/link'

type prop = {
  title: string
}

/**
 * 労務管理
 * top > タブ内で使用
 * @param title
 * @constructor
 */
const Labor:FC<prop> = ({title}) => (
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
                  <Link href="/labors/join">
                    入社手続き
                  </Link>
                </Card>
              </Col>
              <Col md={6}>
                <Card bg="light">
                  退職手続き
                </Card>
              </Col>
            </Row>

            <Row className="mb-5">
              <Col md={6}>
                <Card bg="light" className="p-0 h-100">
                  扶養追加
                </Card>
              </Col>
              <Col md={6}>
                <Card bg="light">
                  住所変更
                </Card>
              </Col>
            </Row>

            <Row className="mb-5">
              <Col md={6}>
                <Card bg="light">
                  氏名変更
                </Card>
              </Col>
              <Col md={6}>
                <Card bg="light">
                  年末調整
                </Card>
              </Col>
            </Row>

            <Row className="mb-5">
              <Col md={6}>
                <Card bg="light">
                  Web 給料明細
                </Card>
              </Col>
              <Col md={6}>
                <Card bg="light">
                  あああああああ
                </Card>
              </Col>
            </Row>

            <Button variant="primary">Go somewhere</Button>

          </div>

        </div>
      </Card.Body>
    </>
)

export default Labor