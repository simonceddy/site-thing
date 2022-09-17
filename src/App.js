import React from 'react';
import AppContainer from './components/AppContainer';
import AppTitle from './components/AppTitle';
// import Navbar from './components/Navbar';
import TopControlBar from './components/TopControlBar';
import AppRoutes from './containers/AppRoutes';

function ContentDiv({ children }) {
  return (
    <div
      className="flex w-full flex-1 flex-col justify-center items-center overflow-y-auto"
    >
      {children}
    </div>
  );
}

function App() {
  return (
    <AppContainer>
      <AppTitle />
      <ContentDiv>
        <TopControlBar />
        <AppRoutes />
      </ContentDiv>
    </AppContainer>
  );
}

export default App;
