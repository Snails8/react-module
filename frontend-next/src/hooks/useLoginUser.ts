import { useRecoilValue } from 'recoil';
import { loginUserState } from '../states/loginUser';

/**
 * @returns {{loginUser: unknown, isAuthChecking: boolean}}
 */
export function useLoginUser() {
  const loginUser      = useRecoilValue(loginUserState);
  const isAuthChecking = (loginUser === undefined);

  return {
    loginUser,
    isAuthChecking
  };
}