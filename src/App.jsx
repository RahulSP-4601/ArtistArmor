// src/App.jsx
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Global layout/reset + variables import
import './styles/app.css';

// App shell
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';

export default function App() {
  return (
    // Use Vite's BASE_URL so dev = "/" and Pages = "/ArtistArmor/"
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* optional: catch-all to home to avoid stray 404s */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
