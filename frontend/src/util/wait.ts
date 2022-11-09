
/**
 * 処理をNs止める時に使用
 * ex) await wait(1)
 * @param sec 
 * @returns 
 */
export const wait = (sec: number) => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, sec*1000);
    //setTimeout(() => {reject(new Error("エラー！"))}, sec*1000);
  });
};