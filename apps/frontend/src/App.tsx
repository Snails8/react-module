import React, { Suspense } from 'react';
import './App.css';
import { RouterConfig } from './RouterConfig';
import { LoadingSpinner } from './components/atoms/ui/LoadingSpinner/LoadingSpinner';

function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <RouterConfig />
    </Suspense>
  );
};

export default App;
