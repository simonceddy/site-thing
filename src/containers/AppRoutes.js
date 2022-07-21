import { Route, Routes } from 'react-router-dom';
import ContentContainer from '../components/ContentContainer';
import HomePage from '../pages/Home';
import DevPage from '../pages/Dev';
import AudioPage from '../pages/Audio';

function AppRoutes() {
  return (
    <ContentContainer>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dev" element={<DevPage />} />
        <Route path="/audio" element={<AudioPage />} />
        <Route path="/settings" element={<AudioPage />} />
      </Routes>
    </ContentContainer>
  );
}

export default AppRoutes;
