import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Releases from './components/Releases/Releases';
import Blogs from './components/Blogs/Blogs';
import ContactPage from './components/ContactPage/ContactPage';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/releases" element={<Releases />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
    <Footer/>
      {/* <header className="App-header">
        Welcome to dipanjanguchait.com
      </header> */}
    </div>
  );
}

export default App;
