import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListEmployeeComponent from './components/ListEmployeeComponent';

function App() {
  return (
    <div>
      <Router>
      <HeaderComponent/>
      <div className='container'>
        <Routes>
          <Route path="/" element={<ListEmployeeComponent />} />
          <Route path="/employees" element={<ListEmployeeComponent />} />
        </Routes>
      {/* <ListEmployeeComponent/> */}
      </div>
     <FooterComponent/>
      </Router>
    </div>
  );
}

export default App;
