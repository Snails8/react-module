import React, { useMemo, useState } from "react";
import { BasePage } from "../../components/templates/BasePage/BasePage";

export const UseMemoPage = ({

}) => {
    const [value, setValue] = useState(0);
    const [count, setCount] = useState(0);

    // Usage
    const memorizedValue = useMemo(() => {
        return highCostProcessing(value)
    },[value]);

    return (
        <>
            <BasePage>
                <h3>useMemo 検証</h3>
                <ul>
                    <li>入力値が変わるたびに highCostProcessing が呼ばれる</li>
                    <li>useMemoを使用しているので、、条件を満たさない限り動作しなくなる</li>
                    <li>よってレンダリング後はvalueが変更された時のみ再計算される</li>
                    <p>内部では、countが変化してもコールバック関数内部で呼ばれているhighCostProcessingは呼ばれず、キャッシュされた値を返してる</p>
                <p>⚠︎あまりコストのかからない計算をメモ化すると値を再計算するか判定する処理の方がコストがかかる場合がある</p>
                </ul>

                <div>{memorizedValue}</div>
                <input type="text" onChange={(e:React.ChangeEvent<HTMLInputElement>) => {
                    const targetValue: number = Number(e.target.value);
                    setValue(targetValue);
                }} />
                <button onClick={() => setCount(count + 1)}>更新する</button>
            </BasePage>
        </>
    )
}


const highCostProcessing = (inputValue: number) => {
    let calculateValue = Number(inputValue);
    for (let i = 0; i < 1000; i++) {
        calculateValue += 1;
    }
    console.log("Finished");
    return calculateValue;
};