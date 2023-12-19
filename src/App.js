import { BrowserRouter,Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/layout';
import Home from './pages/home'
import GalleryPage from './pages/gallery';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="gallery" element={<GalleryPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
