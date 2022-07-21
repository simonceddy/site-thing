import React from 'react';
import AppContainer from './components/AppContainer';
import AppTitle from './components/AppTitle';
import Navbar from './components/Navbar';
import AppRoutes from './containers/AppRoutes';

function App() {
  return (
    <AppContainer>
      <AppTitle />
      <div className="flex w-full flex-1 flex-col justify-center items-start md:flex-row md:justify-start">
        <Navbar />
        <AppRoutes />
      </div>
    </AppContainer>
  );
}

export default App;
