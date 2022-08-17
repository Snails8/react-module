/**
 * ブラウザ側の処理かサーバー側の処理かどうか調べる
 * @returns {boolean}
 */
export function isBrowser() {
  return typeof window !== 'undefined';
}
