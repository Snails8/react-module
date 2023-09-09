import React, { Suspense } from 'react';
import './App.css';
import { RouterConfig } from './RouterConfig';
import { LoadingSpinner } from '@module/ui-component';

function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <RouterConfig />
    </Suspense>
  );
};

export default App;
