import Header from "./components/Header";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Header />

    <Routes>
      <Route exact path='/' exact element={<Home />} />
    </Routes>

    </Router>
  );
}

export default App;
