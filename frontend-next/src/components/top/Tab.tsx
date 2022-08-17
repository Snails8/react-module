import {FC, useState} from "react";
import {Tab, Tabs} from "react-bootstrap";
import Sample from "./partials/Sample";
import ArrayMergeAssoc from "../../services/top/ArrayMergeAssoc";

type prop = {
  title: string[]
  content: JSX.Element[]
}

const TopTab:FC<prop> = ({title, content}) => {

  const [key, setKey] = useState('home');

  let results = []

  // TODO::最初にどのタブを選択するかrefあたりを使って管理
  // TODO::handleイベント

  // titleとタブの数が一致している場合
  if (title.length === content.length) {

    // [0 => { title: sample, content: Element}, 1 => {..}]
    results = ArrayMergeAssoc({title, content})

  } else {
    // そうでない場合、console上でエラーを履かせる
    // TODO:: componentでエラーメッセージ表示したほうがデザイナー的にはいいかも？
    console.error('Error: タブの枚数とタイトルの数が一致していません。見直してください。')
  }

  // rows に格納(直接return 内に書くと出力されない)
  let rows = []
  { results.map((result: any) => {

    rows.push(
        <Tab eventKey={result.title} title={result.title}>
          {result.content}
        </Tab>
    )
  })}

  return (
      <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="mb-3"
      >
        {/*<Tab eventKey="home" title="Home">*/}
        {/*  <Sample />*/}
        {/*</Tab>*/}
        {/*<Tab eventKey="profile" title="Profile">*/}
        {/*  aaaaaaa*/}
        {/*</Tab>*/}
        {/*<Tab eventKey="contact" title="Contact">*/}
        {/*  aaaaaaa*/}
        {/*</Tab>*/}

        {rows}

      </Tabs>
  );
}

export default TopTab