import React, { useState, useEffect } from "react";
import { BasePage } from "../../components/templates/BasePage/BasePage";

export const ChildTabPage:React.FC =() => {
    const [message, setMessage] = useState(JSON.parse(localStorage.getItem('key') as string))
    const [childString, setChildString] = useState('')

    useEffect(() => {
        window.addEventListener('storage', storageChange)
    })

    const storageChange = (e:any) => {
        setMessage(JSON.parse(localStorage.getItem('key') as string))
    }


    useEffect(() => {
        if (window.opener == null) {
            return window.close()
        } else {
            window.opener.document.getElementById("childString").value = childString
        }
    },[childString])
    
    return (
        <>
        <BasePage>
            <h3>子タブ</h3>
            <h4>localStorageで親 → 子 を同期する</h4>
            <p>受け取ったメッセージ：「{message}」</p>
            <button onClick={() => window.open("page3")}>別タブで開く</button>

            <h4>window.openerで親windowに値を送信する</h4>
            <label>text</label>
            <input type="text" name="childString" defaultValue={childString}
                onChange={(e) => setChildString(e.target.value)}
            />

            <h5>window.openerで親windowを初期化する</h5>
            <button onClick={(e) =>  window.opener.location.reload()}>親側で再度API通信</button>
        </BasePage>
        </>
    )
}