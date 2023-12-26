import { BrowserRouter,Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/layout';
import Home from './pages/home'
import GalleryPage from './pages/gallery';
import FacebookReviews from './pages/reviews';
import ContactForm from './pages/contact';
import NoPage from './pages/nopage';
import SuccessPage from './pages/success';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="reviews" element={<FacebookReviews />} />
          <Route path="contact" element={<ContactForm />} />
          <Route path="success" element={<SuccessPage />} />

          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
