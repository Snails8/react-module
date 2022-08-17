import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import { SamplePage2 } from "./pages/pageB";
import { Dashboard } from "./pages/dashboard/Dashboard";
import { Training } from "./pages/Training/Training";
import { NotFound } from "./pages/NotFound/notFound";
import { SamplePage3 } from "./pages/pageC";
import { SamplePage4, SamplePage4Child1, SamplePage4Child2, SamplePage4Child3 } from "./pages/pageD";
import { Users } from "./pages/Users/Users";
import { ChildTabPage } from "./pages/Tabs/ChildTab";
import { ParentTabPage } from "./pages/Tabs/ParentTab";
import { UserCreate } from "./pages/UserCreate/UserCreate";
import { StatePage } from "./pages/StatePage/StatePage";
import { FormPage } from "./pages/FormPage/FormPage";
import { Fishes } from "./pages/Fishes/FishesPage";


export const RouterConfig:React.VFC =() => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Dashboard />} />
          <Route path="training" element={<Training />} />
          <Route path="fishes" element={<Fishes />} />
          <Route path="page2" element={<SamplePage2 />} />
          <Route path="page3" element={<SamplePage3 Message="Hello Router" />} />
          <Route path="page4" element={<SamplePage4 />} >
            <Route index />
            <Route path="child1" element={<SamplePage4Child1 />} />
            <Route path="child2" element={<SamplePage4Child2 />} />
            <Route path=":cildid" element={<SamplePage4Child3 />} />
          </Route>
          <Route path="*" element={<NotFound />} />
          <Route path="users" element={<Users />} />
          <Route path="users/create" element={<UserCreate />} />
          <Route path="form" element={<FormPage />} />
          <Route path="states" element={<StatePage />} />
          <Route path="parent-tab" element={<ParentTabPage />} />
          <Route path="child-tab" element={<ChildTabPage />} />  
        </Routes>
      </BrowserRouter>
    </>
  );
}