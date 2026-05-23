import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/homepage/Navbar';
import RouteRow from './components/homepage/routerow';
import Footer from './components/homepage/footer';
import Homepage from './pages/homepage';
import AboutPage from './pages/about';
import ServicesPage from './pages/services';
import ResourcesPage from './pages/resources';
import TeamPage from './pages/team';
import ContactPage from './pages/contact';
import ArticlePage from './pages/resources/article';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-white">
        {/* Navbar and RouteRow rendered globally at the top */}
        <Navbar />
        <RouteRow />
        
        {/* Main page content area that stretches to fill empty space */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/resources/article/:id" element={<ArticlePage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        
        {/* Footer rendered globally at the bottom */}
        <Footer />
      </div>
    </Router>
  );
}