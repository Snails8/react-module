import AlertMessage from "../_partials/Alert";
import {Button, Card, Col, Container, Form, Row} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import Router from "next/router";
import {Simulate} from "react-dom/test-utils";


const UserForm = () => {

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

    // try {
    //   const res = await fetch('/api/hr_admin/users/create', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(formData),
    //     credentials: 'include'
    //   });
    //
    //   let user = res.json()
    //
    //   if (res.status === 422) {
    //     setHasError(true)
    //   }
    //
    //   if (res.status !== 422) {
    //     await Router.push('/users');
    //   }
    //
    // } catch (err) {
    //   console.log(err.response)
    //
    //   console.error('An unexpected error happened occurred:', err);
    // }

      await fetch('/api/hr_admin/users/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
        credentials: 'include'
      }).then(response => {

      }).catch (e => {
        // console.error('通信に失敗しました', e)

        console.log(e.response.data.error)
      })
  }

  return (
      <>
        <Form onSubmit={handleSubmit}>
          {hasError ? (
              <AlertMessage variant="danger" message="メールアドレスかパスワードが違います" />
          ): null}


          <Card>
            <Card.Header>
              <h2 className="h5 text-center">基本情報</h2>
            </Card.Header>
            <Card.Body className="bg-white">

              <Container className="mt-5">
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

                    <div className="d-flex justify-content-center mt-3">
                      <Button variant="primary" type="submit">登録する</Button>
                    </div>

                  </Col>
                </Row>
              </Container>

            </Card.Body>
          </Card>

          {/*<Card className="mt-5">*/}
          {/*  <Card.Header>*/}
          {/*    <h2 className="h5 text-center">現住所と連絡先</h2>*/}
          {/*  </Card.Header>*/}
          {/*  <Card.Body className="bg-white">*/}

          {/*    <Container className="mt-5">*/}
          {/*      <Row className="justify-content-center">*/}
          {/*        <Col md={8}>*/}

          {/*          <div>ココに郵便番号</div>*/}

          {/*          <Form.Group as={Col} controlId="formGridEmail">*/}
          {/*            <Form.Label>住所</Form.Label>*/}
          {/*            <Form.Control type="email" placeholder="Enter email" />*/}
          {/*          </Form.Group>*/}

          {/*          <Form.Group as={Col} controlId="formGridPassword">*/}
          {/*            <Form.Label>住所(市区町村)</Form.Label>*/}
          {/*            <Form.Control type="password" placeholder="Password" />*/}
          {/*          </Form.Group>*/}

          {/*          <Form.Group as={Col} controlId="formGridEmail">*/}
          {/*            <Form.Label>住所(丁目)</Form.Label>*/}
          {/*            <Form.Control type="email" placeholder="Enter email" />*/}
          {/*          </Form.Group>*/}

          {/*          <Form.Group as={Col} controlId="formGridPassword">*/}
          {/*            <Form.Label>住所(建物名・部屋番号)</Form.Label>*/}
          {/*            <Form.Control type="password" placeholder="Password" />*/}
          {/*          </Form.Group>*/}

          {/*          <Form.Group as={Col} controlId="formGridPassword">*/}
          {/*            <Form.Label>住所(ヨミガナ)</Form.Label>*/}
          {/*            <Form.Control type="password" placeholder="Password" />*/}
          {/*          </Form.Group>*/}

          {/*          <div>電話番号</div>*/}

          {/*          <div>世帯主の氏名</div>*/}

          {/*          <div>続柄</div>*/}

          {/*        </Col>*/}
          {/*      </Row>*/}
          {/*    </Container>*/}

          {/*  </Card.Body>*/}
          {/*</Card>*/}

          {/*<Card className="mt-5">*/}
          {/*  <Card.Header>*/}
          {/*    <h2 className="h5 text-center">住民票住所</h2>*/}
          {/*  </Card.Header>*/}
          {/*  <Card.Body className="bg-white">*/}

          {/*    <Container className="mt-5">*/}
          {/*      <Row className="justify-content-center">*/}
          {/*        <Col md={8}>*/}

          {/*          <div>ココに郵便番号</div>*/}

          {/*          <Form.Group as={Col} controlId="formGridEmail">*/}
          {/*            <Form.Label>住所</Form.Label>*/}
          {/*            <Form.Control type="email" placeholder="Enter email" />*/}
          {/*          </Form.Group>*/}

          {/*          <Form.Group as={Col} controlId="formGridPassword">*/}
          {/*            <Form.Label>住所(市区町村)</Form.Label>*/}
          {/*            <Form.Control type="password" placeholder="Password" />*/}
          {/*          </Form.Group>*/}

          {/*          <Form.Group as={Col} controlId="formGridEmail">*/}
          {/*            <Form.Label>住所(丁目)</Form.Label>*/}
          {/*            <Form.Control type="email" placeholder="Enter email" />*/}
          {/*          </Form.Group>*/}

          {/*          <Form.Group as={Col} controlId="formGridPassword">*/}
          {/*            <Form.Label>住所(建物名・部屋番号)</Form.Label>*/}
          {/*            <Form.Control type="password" placeholder="Password" />*/}
          {/*          </Form.Group>*/}

          {/*          <Form.Group as={Col} controlId="formGridPassword">*/}
          {/*            <Form.Label>住所(ヨミガナ)</Form.Label>*/}
          {/*            <Form.Control type="password" placeholder="Password" />*/}
          {/*          </Form.Group>*/}

          {/*          <div>住民票の世帯主名</div>*/}

          {/*          <div>世帯主の関係</div>*/}

          {/*        </Col>*/}
          {/*      </Row>*/}
          {/*    </Container>*/}

          {/*  </Card.Body>*/}
          {/*</Card>*/}

          {/*<Card className="mt-5">*/}
          {/*  <Card.Header>*/}
          {/*    <h2 className="h5 text-center">緊急連絡先</h2>*/}
          {/*  </Card.Header>*/}
          {/*  <Card.Body className="bg-white">*/}

          {/*    <Container className="mt-5">*/}
          {/*      <Row className="justify-content-center">*/}
          {/*        <Col md={8}>*/}

          {/*          <Row className="mb-3">*/}
          {/*            <Form.Group as={Col} controlId="formGridEmail">*/}
          {/*              <Form.Label>姓</Form.Label>*/}
          {/*              <Form.Control type="email" placeholder="Enter email" />*/}
          {/*            </Form.Group>*/}

          {/*            <Form.Group as={Col} controlId="formGridPassword">*/}
          {/*              <Form.Label>名</Form.Label>*/}
          {/*              <Form.Control type="password" placeholder="Password" />*/}
          {/*            </Form.Group>*/}
          {/*          </Row>*/}

          {/*          <Row className="mb-3">*/}
          {/*            <Form.Group as={Col} controlId="formGridEmail">*/}
          {/*              <Form.Label>姓(ヨミガナ)</Form.Label>*/}
          {/*              <Form.Control type="email" placeholder="Enter email" />*/}
          {/*            </Form.Group>*/}

          {/*            <Form.Group as={Col} controlId="formGridPassword">*/}
          {/*              <Form.Label>名(ヨミガナ)</Form.Label>*/}
          {/*              <Form.Control type="password" placeholder="Password" />*/}
          {/*            </Form.Group>*/}
          {/*          </Row>*/}

          {/*          <div>電話番号</div>*/}

          {/*        </Col>*/}
          {/*      </Row>*/}
          {/*    </Container>*/}

          {/*  </Card.Body>*/}
          {/*</Card>*/}

          {/*<Card className="mt-5">*/}
          {/*  <Card.Header>*/}
          {/*    <h2 className="h5 text-center">履歴書</h2>*/}
          {/*  </Card.Header>*/}
          {/*  <Card.Body className="bg-white">*/}

          {/*    <Container className="mt-5">*/}
          {/*      <Row className="justify-content-center">*/}
          {/*        <Col md={8}>*/}
          {/*          ココにアップロード*/}
          {/*        </Col>*/}
          {/*      </Row>*/}
          {/*    </Container>*/}

          {/*  </Card.Body>*/}
          {/*</Card>*/}

          {/*<Card className="mt-5">*/}
          {/*  <Card.Header>*/}
          {/*    <h2 className="h5 text-center">通勤手当</h2>*/}
          {/*  </Card.Header>*/}
          {/*  <Card.Body className="bg-white">*/}

          {/*    <Container className="mt-5">*/}
          {/*      <Row className="justify-content-center">*/}
          {/*        <Col md={8}>*/}
          {/*          通勤手当*/}

          {/*          <div>定期代</div>*/}

          {/*        </Col>*/}
          {/*      </Row>*/}
          {/*    </Container>*/}

          {/*  </Card.Body>*/}
          {/*</Card>*/}

          {/*<Card className="mt-5">*/}
          {/*  <Card.Header>*/}
          {/*    <h2 className="h5 text-center">口座情報</h2>*/}
          {/*  </Card.Header>*/}
          {/*  <Card.Body className="bg-white">*/}

          {/*    <Container className="mt-5">*/}
          {/*      <Row className="justify-content-center">*/}
          {/*        <Col md={8}>*/}
          {/*          通勤手当*/}

          {/*          <div>定期代</div>*/}

          {/*        </Col>*/}
          {/*      </Row>*/}
          {/*    </Container>*/}

          {/*  </Card.Body>*/}
          {/*</Card>*/}

          {/*<Card className="mt-5">*/}
          {/*  <Card.Header>*/}
          {/*    <h2 className="h5 text-center">雇用保険</h2>*/}
          {/*  </Card.Header>*/}
          {/*  <Card.Body className="bg-white">*/}

          {/*    <Container className="mt-5">*/}
          {/*      <Row className="justify-content-center">*/}
          {/*        <Col md={8}>*/}
          {/*          通勤手当*/}

          {/*          <div>定期代</div>*/}

          {/*        </Col>*/}
          {/*      </Row>*/}
          {/*    </Container>*/}

          {/*  </Card.Body>*/}
          {/*</Card>*/}


          {/*<Card className="mt-5">*/}
          {/*  <Card.Header>*/}
          {/*    <h2 className="h5 text-center">配偶者情報</h2>*/}
          {/*  </Card.Header>*/}
          {/*  <Card.Body className="bg-white">*/}

          {/*    <Container className="mt-5">*/}
          {/*      <Row className="justify-content-center">*/}
          {/*        <Col md={8}>*/}

          {/*          <div>有無</div>*/}

          {/*        </Col>*/}
          {/*      </Row>*/}
          {/*    </Container>*/}

          {/*  </Card.Body>*/}
          {/*</Card>*/}

          {/*<Card className="mt-5">*/}
          {/*  <Card.Header>*/}
          {/*    <h2 className="h5 text-center">資格</h2>*/}
          {/*  </Card.Header>*/}
          {/*  <Card.Body className="bg-white">*/}

          {/*    <Container className="mt-5">*/}
          {/*      <Row className="justify-content-center">*/}
          {/*        <Col md={8}>*/}

          {/*          <div>有無</div>*/}

          {/*        </Col>*/}
          {/*      </Row>*/}
          {/*    </Container>*/}

          {/*  </Card.Body>*/}
          {/*</Card>*/}





        </Form>
      </>
  )
}

export default UserForm