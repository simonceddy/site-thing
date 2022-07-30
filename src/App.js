import React from 'react';
import AppContainer from './components/AppContainer';
// import AppTitle from './components/AppTitle';
// import Navbar from './components/Navbar';
// import AppRoutes from './containers/AppRoutes';
// import MusicSystem from './containers/MusicSystem';
// import MixingDesk from './features/mixingDesk/MixingDesk';
import GuitarExplorer from './features/guitarExplorer/GuitarExplorer';

// function ContentDiv({ children }) {
//   return (
//     <div
//   className="flex w-full flex-1 flex-col justify-center items-start md:flex-row md:justify-start"
//     >
//       {children}
//     </div>
//   );
// }

function App() {
  return (
    <AppContainer>
      {/* <AppTitle />
      <ContentDiv>
        <Navbar />
        <AppRoutes />
      </ContentDiv> */}
      {/* <MusicSystem /> */}
      {/* <MixingDesk /> */}
      <GuitarExplorer />
    </AppContainer>
  );
}

export default App;
