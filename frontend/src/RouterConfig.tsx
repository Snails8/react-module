import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { SamplePage2 } from "./pages/_Inspect/Router/pageB";

import { Training } from "./pages/Training/Training";
import { NotFound } from "./pages/NotFound/notFound";
import { SamplePage3 } from "./pages/_Inspect/Router/pageC";
import { SamplePage4, SamplePage4Child1, SamplePage4Child2, SamplePage4Child3 } from "./pages/_Inspect/Router/pageD";
import { Users } from "./pages/Users/Users";
import { ChildTabPage } from "./pages/_Sample/Tabs/ChildTab";
import { ParentTabPage } from "./pages/_Sample/Tabs/ParentTab";
import { UserCreate } from "./pages/UserCreate/UserCreate";
import { StatePage } from "./pages/_Inspect/StatePage/StatePage";
import { FormPage } from "./pages/_Sample/FormPage/FormPage";
import { Fishes } from "./pages/Fishes/FishesPage";
import { UseMemoPage } from "./pages/_Inspect/UseMemoPage/UseMemoPage";
import { Atoms } from "./pages/_Sample/Atoms/Atoms";
import { DownloadCSVExcel } from "./pages/_Sample/DownloadCSVExcel/DownloadCSVExcel";
import { UseCallBackPage } from "./pages/_Inspect/UseCallBackPage/UseCallBackPage";
import { MemoPage } from "./pages/_Inspect/MemoPage/MemoPage";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { Inspect } from "./pages/_Inspect/Inspect";
import { Sample } from "./pages/_Sample/Sample";


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
          <Route path="memo" element={<MemoPage />} />
          <Route path="useMemo" element={<UseMemoPage />} />
          <Route path="useCallback" element={<UseCallBackPage />} />
          <Route path="parent-tab" element={<ParentTabPage />} />
          <Route path="child-tab" element={<ChildTabPage />} />  
          <Route path="atoms" element={<Atoms />} />
          <Route path="download-file" element={<DownloadCSVExcel />} />
          <Route path="inspects" element={<Inspect />} />
          <Route path="samples" element={<Sample />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};