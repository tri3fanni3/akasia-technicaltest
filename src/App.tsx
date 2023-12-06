import { Routes, Route, Navigate } from 'react-router-dom';

// Pages
import Home from './pages/Home';

// Hooks
import ScrollToTop from './hooks/ScrollToTop';

function App() {
  return (
    <ScrollToTop>
      <Routes>
        <Route path='/' element={<Navigate to='/home' />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </ScrollToTop>
  );
}

export default App;
