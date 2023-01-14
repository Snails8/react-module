import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { SamplePage2 } from './pages/_Inspect/Router/pageB';

import { Training } from './pages/Training';
import { NotFound } from './pages/NotFound';
import { SamplePage3 } from './pages/_Inspect/Router/pageC';
import {
  SamplePage4,
  SamplePage4Child1,
  SamplePage4Child2,
  SamplePage4Child3,
} from './pages/_Inspect/Router/pageD';
import { Users } from './pages/Users';
import { ChildTabPage } from './pages/_Sample/Tabs/ChildTab';
import { ParentTabPage } from './pages/_Sample/Tabs/ParentTab';
import { UserCreate } from './pages/UserCreatePage';
import { StatePage } from './pages/_Inspect/StatePage';
import { FormPage } from './pages/_Sample/FormPage';
import { Fishes } from './pages/Fishes';
import { UseMemoPage } from './pages/_Inspect/UseMemoPage';
import { DownloadCSVExcel } from './pages/_Sample/DownloadCSVExcel';
import { UseCallBackPage } from './pages/_Inspect/UseCallBackPage';
import { MemoPage } from './pages/_Inspect/MemoPage';
import { Dashboard } from './pages/Dashboard';
import { Inspect } from './pages/_Inspect';
import { Sample } from './pages/_Sample';
import { ReduxPage } from './pages/_Inspect/ReduxPage';
import { ReduxTestPage } from './pages/_Inspect/ReduxPage/ReduxTestPage';
import { UploadFilePage } from './pages/_Sample/UploadFilePage';
import { TabPage } from './pages/_Sample/TabPage';
import { CalenderPage } from './pages/_Sample/CalenderPage';
import { ControlFormPage } from './pages/_Sample/ControlFormPage/ControlFormPage';

export const RouterConfig: React.VFC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Dashboard />} />
          <Route path="training" element={<Training />} />
          <Route path="fishes" element={<Fishes />} />
          <Route path="page2" element={<SamplePage2 />} />
          <Route
            path="page3"
            element={<SamplePage3 Message="Hello Router" />}
          />
          <Route path="page4" element={<SamplePage4 />}>
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
          <Route path="download-file" element={<DownloadCSVExcel />} />
          <Route path="inspects" element={<Inspect />} />
          <Route path="redux" element={<ReduxPage />} />
          <Route path="redux/test" element={<ReduxTestPage />} />
          <Route path="samples" element={<Sample />} />
          <Route path="samples/upload-file" element={<UploadFilePage />} />
          <Route path="samples/tabs" element={<TabPage />} />
          <Route path="samples/calenders" element={<CalenderPage />} />
          <Route path="samples/control-form" element={<ControlFormPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
