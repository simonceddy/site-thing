import { Suspense } from 'react';

function SuspenseWrapper({ children }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      {children}
    </Suspense>
  );
}

export default SuspenseWrapper;
