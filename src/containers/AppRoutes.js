import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import ContentContainer from '../components/ContentContainer';
import HomePage from '../pages/Home';
import DevPage from '../pages/Dev';
import AudioPage from '../pages/Audio';
// import MiscStuff from './MiscStuff';
import SuspenseWrapper from '../components/SuspenseWrapper';
import Songs from '../features/songs/Songs';
// import SynthBasics from '../features/synthBasics/SynthBasics';
// import MusicSystem from './MusicSystem';

const MusicSystem = lazy(() => import('./MusicSystem'));
const GuitarThing = lazy(() => import('../features/guitarExplorer/GuitarExplorer'));

function AsyncMusicSystem() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MusicSystem />
    </Suspense>
  );
}

function AsyncGuitarThing() {
  return (
    <SuspenseWrapper>
      <GuitarThing />
    </SuspenseWrapper>
  );
}

function AppRoutes() {
  return (
    <ContentContainer>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dev" element={<DevPage />} />
        <Route path="/audio" element={<AudioPage />} />
        <Route path="/songs" element={<Songs />} />
        <Route path="/music-system" element={<AsyncMusicSystem />} />
        <Route path="/settings" element={<AudioPage />} />
        {/* <Route path="/misc" element={<MiscStuff />} /> */}
        <Route path="/guitar" element={<AsyncGuitarThing />} />
      </Routes>
    </ContentContainer>
  );
}

export default AppRoutes;
