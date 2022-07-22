import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import ContentContainer from '../components/ContentContainer';
import HomePage from '../pages/Home';
import DevPage from '../pages/Dev';
import AudioPage from '../pages/Audio';
// import MusicSystem from './MusicSystem';

const MusicSystem = lazy(() => import('./MusicSystem'));

function AsyncMusicSystem() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MusicSystem />
    </Suspense>
  );
}

function AppRoutes() {
  return (
    <ContentContainer>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dev" element={<DevPage />} />
        <Route path="/audio" element={<AudioPage />} />
        <Route path="/audio-system" element={<AsyncMusicSystem />} />
        <Route path="/settings" element={<AudioPage />} />
      </Routes>
    </ContentContainer>
  );
}

export default AppRoutes;
