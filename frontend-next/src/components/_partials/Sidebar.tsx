import React from "react";
import {Offcanvas, Button} from 'react-bootstrap'
import {useState} from "react";

/**
 * Sidebar のコンポーネント
 * @constructor
 */
const Sidebar = () => {

  return (
      <>
        <nav className="sidebar">
          <ul className="nav flex-column accordion" id="nav_accordion">
            <li className="nav-item">
              <a className="nav-link" href="#">メニュー1</a>
            </li>
            <li className="nav-item">
              <a className="nav-link collapsed" data-bs-toggle="collapse" data-bs-target="#menu_item1"
                 aria-controls="menu_item2" aria-expanded="true" href="#">
                メニュー2(icon)
              </a>
              <ul id="menu_item1" className="submenu collapse accordion-collapse" data-bs-parent="#nav_accordion">
                <li><a className="nav-link" href="#">(i)サブメニュー1</a></li>
                <li><a className="nav-link" href="#">(i)サブメニュー2</a></li>
                <li><a className="nav-link" href="#">(i)サブメニュー3</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="collapse" data-bs-target="#menu_item2" aria-controls="menu_item2"
                 aria-expanded="true" href="#">
                メニュー3(icon)
              </a>
              <ul id="menu_item2" className="submenu collapse accordion-collapse show" data-bs-parent="#nav_accordion">
                <li><a className="nav-link" href="#">(i)サブメニュー1</a></li>
                <li><a className="nav-link" href="#">(i)サブメニュー2</a></li>
                <li><a className="nav-link" href="#">(i)サブメニュー3</a></li>
              </ul>
            </li>
          </ul>

          <p className="fw-bold px-3 mt-3 mb-0">自社情報マスタ</p>
          <ul className="nav flex-column mb-2">
            <li className="nav-item ps-2">
              <a className="nav-link" href="">
                (i)自社情報管理
              </a>
            </li>
            <li className="nav-item ps-2">
              <a className="nav-link" href="">
                (i)店舗管理
              </a>
            </li>
            <li className="nav-item ps-2">
              <a className="nav-link" href="">
                (i)ユーザー管理
              </a>
            </li>
          </ul>
        </nav>

        {/*<Offcanvas show={show} onHide={handleClose}>*/}
        {/*  <Offcanvas.Header closeButton>*/}
        {/*    <Offcanvas.Title>Offcanvas</Offcanvas.Title>*/}
        {/*  </Offcanvas.Header>*/}
        {/*  <Offcanvas.Body>*/}
        {/*    Some text as placeholder. In real life you can have the elements you*/}
        {/*    have chosen. Like, text, images, lists, etc.*/}
        {/*  </Offcanvas.Body>*/}
        {/*</Offcanvas>*/}
      </>
  )

}

export default Sidebar