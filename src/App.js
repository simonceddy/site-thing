/* eslint-disable no-unused-vars */
import React from 'react';
import AppContainer from './components/AppContainer';
import AppTitle from './components/AppTitle';
import Navbar from './components/Navbar';
// import Navbar from './components/Navbar';
import TopControlBar from './components/TopControlBar';
import AppRoutes from './containers/AppRoutes';
import SCE from './sce';

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
    // <AppContainer>
    //   <ContentDiv>
    //     <Navbar>
    //       <TopControlBar />
    //       <AppTitle />
    //     </Navbar>
    //     <AppRoutes />
    //   </ContentDiv>
    // </AppContainer>
    <SCE />
  );
}

export default App;
