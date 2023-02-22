import React from "react";
import { Row, Col, Nav, NavDropdown, Navbar, Container} from "react-bootstrap";
import Link from "next/link";
import Router from "next/router";
import {useLoginUser} from "../../hooks/useLoginUser";

const Header = () => {
    const { loginUser } = useLoginUser()

    /**
     * @returns {Promise<void>}
     */
    async function handleLogout() {
        const res = await fetch('/api/hm_admin/auth/logout')

        if (res.status === 200) {
            await Router.push('/login')
        } else {
            throw new Error(await res.text())
        }
    }

    return (
        <>
            <header className="py-1">
                <Navbar variant="dark">
                    <Navbar.Brand href="#home">
                        <p className="site-title h5 m-0 pl-3">Sample HR</p> </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">More deets</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Dank memes
                        </Nav.Link>
                        {loginUser ?
                            <NavDropdown title={loginUser.name} id="nav-dropdown">
                                <NavDropdown.Item><span onClick={handleLogout}>Logout</span></NavDropdown.Item>
                            </NavDropdown>
                            :
                            <Nav.Item>
                                <div className="nav-item nav-link">
                                    <Link href="/login">Login</Link>
                                </div>
                            </Nav.Item>
                        }
                    </Nav>
                </Navbar>


            </header>
        </>
    )
}

export default Header

