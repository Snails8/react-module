import {Button, Card, Col, Container, Form, Row} from "react-bootstrap";
import React, {useEffect, useState} from "react";


const RestIndex = ({users}) => {

  let rows = [];

  console.log(users)

  for (let i in users) {

    rows.push(
        <tr id="table-app">
          <td className="co2">
            {users[i].id}<br/>
          </td>
          <td className="col3">
            {users[i].name}<br/>
          </td>
          {/* 参照先が存在しない場合、こけずに表示される*/}
          <td className="col4">
            {users[i].address}<br/>
          </td>
          <td className="col5">
            リレーション先表示　予定
          </td>
          <td className="col6">
            <div className="d-grid gap-2 d-md-block">
              <Button variant="secondary" className="mt-1 w-100" target="_blank">詳細</Button>
            </div>
          </td>
        </tr>
    )
  }

  return (
      <>
        <h2 className="h3 mt-4 pb-2"> 一覧 件</h2>
        <div id="search_result">
          <table className="table table-striped table-bordered  item-va-middle table-list">
            <thead className="thead-dark">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">名前</th>
              <th scope="col">住所</th>
              <th scope="col">所属</th>
              <th scope="col">操作</th>
            </tr>
            </thead>
            <tbody>
            {rows}
            </tbody>
          </table>
        </div>
      </>
  )
}

export default RestIndex

//[
// {
//   id: 1,
//   name: 'たにし',
//   kana: 'タニシ',
//   email: 'sample@gmail.com',
//   email_verified_at: '2021-11-12T00:30:40.000000Z',
//   role: 'master',
//   post: '',
//   office_id: 1,
//   created_at: '2021-11-12T00:30:40.000000Z',
//   updated_at: '2021-11-12T00:30:40.000000Z'
// }
//]
