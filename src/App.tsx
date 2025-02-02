import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import CategoryPage from './pages/CategoryPage';
import SuccessPage from './pages/SuccessPage';
import OnboardingPage from './pages/OnboardingPage';

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 dark:text-white transition-colors duration-200">
        <Navbar />
        <Routes>
          <Route path="" element={<LandingPage />} />
          <Route path="/onboarding" element={<OnboardingPage />} />
          <Route path="/category/:id" element={<CategoryPage />} />
          <Route path="/success" element={<SuccessPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;