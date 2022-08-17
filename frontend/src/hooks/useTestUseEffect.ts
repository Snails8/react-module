import React, { useEffect } from "react";

export const useTestUseEffect = (
    count: number
) => {
        // useEffect 検証 (初期render -> アンマウント -> 第二引数指定)
        useEffect(() => {
            console.log("第二引数[]: 初回時に発火する");
        },[])
    
        useEffect(() => {
            console.log("第二引数指定: 初回・値変更時に発火する");
        },[count])
    
        useEffect(() => {
            return () => {
                console.log("クリーンアップ: 値変更時・アンマウント時に発火する");
            }
        },[count])
    
        useEffect(() => {
            return () => {
                console.log("クリーンアップ: アンマウント時に発火する");
            }
        },[])
    
        // 副作用 -> クリーンアップ -> 副作用
        useEffect(() => {
            console.log('副作用', count)
            return () => {
                console.log('クリーンアップ', count);
            };
        }, [count]);
    return    
}