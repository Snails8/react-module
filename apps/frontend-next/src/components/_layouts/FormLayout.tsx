import {useEffect, useState} from "react";
import Head from "next/head";
import Router from "next/router";
import Header from "./Header";
import Footer from "./Footer";
import {Col, Container} from "react-bootstrap";
import Sidebar from "../_partials/Sidebar";

const Layout = ({ children, title = 'title' }) => {

  const [isLoginPage, setIsLoginPage] = useState(false);

  useEffect( () => {
    setIsLoginPage(Router.pathname === '/login');
  }, []);

  return (
      <>
        <Head>
          <title>{title}</title>
          <meta charSet="utf-8"/>
          <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
          <meta name="robots" content="noindex" />
          <meta name="csrf-token" content="{{ csrf_token() }}" />
          {/*<link rel="icon" type="image/x-icon" href={process.env.NEXT_PUBLIC__URL +'//hogehoge'} />*/}
        </Head>

        <Header/>

        <Container className="container-box">
            {children}
        </Container>
        <Footer/>

      </>
  )
}

export default Layout;