import './App.css';
import Materials from './Materials';
import Upload from './Upload'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';


function App() {
  return (
     <Router>
        <Routes>
            <Route path="/" element={<Materials />} />
            <Route path="/upload" element={<Upload />} />
            </Routes>
    </Router>
  );
}

export default App;
