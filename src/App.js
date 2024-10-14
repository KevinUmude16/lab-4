// Import routing and custom components
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './Components/NavigationBar';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Content from './Components/Content';
import Read from './Components/read';
import Create from './Components/create';
import Movies from './Components/movies';
import MovieItem from './Components/movieitem';


function App() {
  return (
    <Router>
      <NavigationBar></NavigationBar>
      <Header></Header>
      <Routes>
        <Route path="/home" element={<Content />} /> {/* Home route */}
        <Route path="/read" element={<Read/>} /> {/* Read route */}
        <Route path="/create" element={<Create/>} /> {/* Create route */}
      </Routes>
      <Footer /> {/* Footer */}
    </Router>
  );
}

export default App; // Export App component
