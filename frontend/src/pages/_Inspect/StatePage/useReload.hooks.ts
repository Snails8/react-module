import { useEffect, useState } from 'react';

export const useReload = (): string => {
  const [reloadText, setReloadText] = useState<string>('');

  // reload時値を復元する
  useEffect(() => {
    if (localStorage.getItem('reload') === 'reloaded') {
      setReloadText(localStorage.getItem('reload') as string);
    }

    localStorage.setItem('reload', '');
  }, []);

  // reload 直前に実行される
  window.addEventListener('beforeunload', (e) => {
    // console.log("reloadりろーど時に実行される")
    localStorage.setItem('reload', 'reloaded');
  });

  return reloadText;
};
