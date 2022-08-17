import React, {useState} from "react";
import FormLayout from "../../src/components/_layouts/FormLayout";
import {Card, Button, Container, Row, Col, Form} from "react-bootstrap";
import UserForm from "../../src/components/user/UserForm";
import AlertMessage from "../../src/components/_partials/Alert";

const create = ({}) => {

  const [hasError, setHasError] = useState(false);

  const [lastName, setLastName] = useState('')
  const [fastName, setFasName] = useState('')
  const [lastNameKana, NtLastNameKana] = useState('')
  const [fastNameKana,NetFastNameKana] = useState('')

  async function handleSubmit(e) {
    e.preventDefault();

    const formData = {
      last_name: e.currentTarget.last_name.value,
      fast_name: e.currentTarget.fast_name.value,
      last_name_kana: e.currentTarget.last_name_kana.value,
      fast_name_kana: e.currentTarget.fast_name_kana.value,
      email: e.currentTarget.email.value,
    };

    try {
      const res = await fetch('/api/hr_admin/users/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
        credentials: 'include'
      });

      if (res.status === 422) {
        setHasError(true)
      }

      console.log(formData)
      // await Router.push('/manages/users');

    } catch (err) {
      console.error('An unexpected error happened occurred:', err);
    }
  }

  return (
      <>
          <FormLayout title={'user管理'} >

            <div className="d-flex justify-content-center mt-5">
              <Col md={8}>

                <Card className="mt-3">
                  <Card.Header>基本情報</Card.Header>
                  <Card.Body>

                    <Form>
                      {/*{hasError ? (*/}
                      <AlertMessage variant="danger" message="メールアドレスかパスワードが違います" />
                      {/*): null}*/}
                      <Row className="justify-content-center">
                        <Col md={8}>

                          <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                              <Form.Label>姓</Form.Label>
                              <Form.Control type="text" name="last_name" defaultValue={lastName}/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                              <Form.Label>名</Form.Label>
                              <Form.Control type="text" name="fast_name" defaultValue={fastName}/>
                            </Form.Group>
                          </Row>

                          <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                              <Form.Label>姓(ヨミガナ)</Form.Label>
                              <Form.Control type="text" name="last_name_kana" defaultValue={lastNameKana}/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                              <Form.Label>名(ヨミガナ)</Form.Label>
                              <Form.Control type="text" name="fast_name_kana" defaultValue={fastNameKana}/>
                            </Form.Group>
                          </Row>

                          <div>ココに生年月日</div>

                          {/*<Row>*/}
                          {/*  <fieldset>*/}
                          {/*    <Form.Group as={Row} className="mb-3">*/}
                          {/*      <Form.Label as="legend" column sm={2}>*/}
                          {/*        戸籍上の性別*/}
                          {/*      </Form.Label>*/}
                          {/*      <Col sm={10}>*/}
                          {/*        <Form.Check*/}
                          {/*            type="radio"*/}
                          {/*            label="male"*/}
                          {/*            name="male"*/}
                          {/*            id="male"*/}
                          {/*        />*/}
                          {/*        <Form.Check*/}
                          {/*            type="radio"*/}
                          {/*            label="女性"*/}
                          {/*            name="female"*/}
                          {/*            id="female"*/}
                          {/*        />*/}
                          {/*      </Col>*/}
                          {/*    </Form.Group>*/}
                          {/*  </fieldset>*/}
                          {/*</Row>*/}

                          <Form.Group className="row">
                            <Form.Label htmlFor="text" className="col-md-4 mb-3 col-form-label text-md-right">Email</Form.Label>
                            <Col md={6}>
                              <input id="text" type="text" className="form-control" name="email" />
                            </Col>
                          </Form.Group>

                          <div>ここにプロフィール画像</div>

                          <div>ここに本人確認書類</div>
                          <small>運転免許証、パスポート、身体障害者手帳、在留カード、特別永住者証明書等の画像</small>

                          <div className="d-flex justify-content-center mt-2">
                            <Button variant="primary" type="submit">登録する</Button>
                          </div>
                        </Col>
                      </Row>
                    </Form>

                  </Card.Body>
                </Card>

              </Col>

            </div>
        </FormLayout>
      </>
  )
}

export default create