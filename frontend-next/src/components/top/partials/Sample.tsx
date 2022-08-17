import React, {FC} from 'react'

const Sample:FC<{title: string}> = ({title}) => (
    <>
      <p><b>{title}</b></p>
      <button type="button">Sample</button>
      <p>タブ機能していますか？</p>
    </>
)

export default Sample