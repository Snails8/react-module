import { useEffect, useRef } from 'react'

// ※ React Router v6
import { Location, useLocation } from 'react-router-dom'

const useLocationChange = (callback: (location: Location) => void) => {
  const refCallback = useRef<undefined | ((location: Location) => void)>()
  const location = useLocation()

  useEffect(() => {
    refCallback.current = callback
  }, [callback])

  // ロケーションに変更があったときに処理実行
  useEffect(() => {
    if (refCallback.current) {
      refCallback.current(location)
    }
  }, [location])
}

export default useLocationChange

/**
    // 思った挙動ではない
    // useLocationChange((location) => {
    //     localStorage.clear();
    //     console.log("ページ遷移")
    //     console.log(location.pathname)
    // })
 */