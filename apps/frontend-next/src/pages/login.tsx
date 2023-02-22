import Layout from "../components/_layouts/Layout";
import * as loginUser from "../lib/loginUser";
import {Main} from "../components/login/Main";


const LoginPage = () => {


  return (
      <>
        <Layout title="Login">
          <Main />
        </Layout>
      </>
  )
}

export default LoginPage;
