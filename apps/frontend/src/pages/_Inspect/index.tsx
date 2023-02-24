import { Link } from 'react-router-dom';

/**
 * 検証ページのindex
 * @returns
 */
export const Inspect = () => {
  return (
    <>
      route管理が二重になるのはめんどい。sidebar うまいこと利用したい
      <ul>
        <li>
          <Link to={'/redux'}>Redux検証</Link>
        </li>
        <li>aa</li>
        <li>aa</li>
      </ul>
    </>
  );
};
