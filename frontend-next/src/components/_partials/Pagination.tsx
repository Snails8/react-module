import React, {useEffect, useState} from "react";
import {Pagination as BootstrapPagination} from "react-bootstrap";
import {useRouter} from 'next/router'


type Props = {
    // links:
    // currentPage:
    // lastPage:
}


/**
 * ペジネーションコンポーネント
 * @param links
 * @param currentPage
 * @param lastPage
 * @returns {JSX.Element}
 * @constructor
 */
const Pagination = ({links, currentPage, lastPage}) => {

    const router = useRouter();
    const [isDisabled, setIsDisabled] = useState(false);
    const [query, useQuery] = useState([]);

    // 次のページへ が最終ページに到達した際に機能をとめるため
    useEffect(() => {
        if (router.query.id > lastPage) {
            setIsDisabled(true)
        }
        // これがないと送信用のクエリを保持できない
        let query = router.query
        useQuery(query)

    }, [])

    // 値をidとして受け取る
    // ボタンをクリックするとパラメータを付与しrouter.push
    const handleClick = (id) => {
        if (!id) {
            return;
        }
        // クエリ末尾に&id=idを付与するため
        query.id = id

        // 以後これをもとに検索処理に入る（クエリを使ってfetch)
        router.push({
            pathname:"/estates",
            query: query
        });
    }

    let items = [];

    // 山盛りペジネーションがある場合、勝手に...が追加される
    for (let i in links) {
        // 前のページへ
        if (links[i].label === '&laquo; Previous') {
            items.push(
                <BootstrapPagination.Prev
                    key={i}
                    onClick={handleClick.bind(handleClick, currentPage - 1)}
                />
            )
            // 次のページへ
        } else if (links[i].label === 'Next &raquo;') {
            items.push(
                <BootstrapPagination.Next
                    key={i}
                    disabled={isDisabled}
                    onClick={handleClick.bind(handleClick, currentPage + 1)}
                />
            )
            // ... の処理(...は前のlabel+1に贈りたいので Numberをつけないと '10' +1 =101のようになる
        } else if (links[i].label === '...' ) {
            items.push(
                <BootstrapPagination.Ellipsis
                    key={i}
                    disabled={isDisabled}
                    onClick={handleClick.bind(handleClick, Number(links[i -1].label) + 1)}
                />
            )
        }
        // 残ったページの出力(activeがtrueのときに強調表示
        else  {
            items.push(
                <BootstrapPagination.Item
                    key={i}
                    active={links[i].active}
                    onClick={handleClick.bind(handleClick, links[i].label)}
                >
                    {links[i].label}
                </BootstrapPagination.Item>
            )
        }
    }

    return (
        <>
            <BootstrapPagination className="justify-content-center pagination">
                {items}
            </BootstrapPagination>
        </>
    )
}

export default Pagination