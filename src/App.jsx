// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Global layout/reset + variables import
import './styles/app.css';

// App shell
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
