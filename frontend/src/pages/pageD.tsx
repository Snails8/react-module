import React, { FC } from "react";
import { Outlet, Link, useNavigate, useParams, NavLink} from "react-router-dom";
import { BasePage } from "../components/templates/BasePage/BasePage";

export const SamplePage4:FC = () => {
    const active = {
        fontWeight: "bold",
        color: "#d57276"
    }

    const inactive = {
        fontWeight: "normal",
        color: "#65b2c6"       
    }

    const navigate = useNavigate();

    const linkStyle = (isActive:boolean) => {
        return isActive ? active : inactive;
    }

    return (
    <>
      <BasePage>
        <h3>Sample Page 4</h3>
        <ul>
          <li><NavLink to="child1" style={({isActive}) => linkStyle(isActive)}>Show Child1</NavLink></li>
          <li><NavLink to="child2" style={({isActive}) => linkStyle(isActive)}>Show Child2</NavLink></li>
          <li><NavLink to="123" style={({isActive}) => linkStyle(isActive)}>Show Child3</NavLink></li>
        </ul>
        <button onClick={()=> navigate("") }>clear</button>
        <Outlet  />
      </BasePage>
    </>
  );
}

export const SamplePage4Child1:FC = () => {
  return <h3>Sample Page 4 Child1</h3>;
}
export const SamplePage4Child2:FC = () => {
  return <h3>Sample Page 4 Child2</h3>;
}

export const SamplePage4Child3:FC = () => {
    type Param = {
      cildid?: string
    }
  
    const params:Param = useParams<Param>();
    return (
      <>
        <h3>Sample Page 4 Child3</h3>
        <p>{`cildid=${params?.cildid}`}</p>
      </>
    );
  }