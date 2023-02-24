import fetch from "isomorphic-unfetch";

/**
 * User情報を取得する
 * @returns {Promise<null>}
 */
export function fetchLoginUser() {

  return (async function() {

    let loginUser = null;

    try {
      const res  = await fetch('/api/hr_admin/user');
      loginUser  = await res.json();
    } catch {
      loginUser  = null;
    }

    return loginUser;
  })();

}