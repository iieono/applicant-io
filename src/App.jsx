import { Routes, Route, useLocation} from 'react-router-dom'
import Layout from "./pages/Layout";
import Page404 from "./pages/Page404";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import Signin from './pages/auth/Signin';
import NewApp from './pages/NewApp';
import ApplicationsAdmin from './pages/ApplicationsAdmin'
import Faculties from './pages/Faculties'
import Types from './pages/TypePages/Types'
import NewTypes from './pages/TypePages/NewTypes'
import TestPage from './pages/TestPage';

function App() {
  const location = useLocation();
  console.log('Current Path:', location.pathname + location.search + location.hash);
  return (
    <div className="body-container">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={ <Home />} /> 
          <Route path='profile' element={ <Profile />} />
          <Route path='newapp' element={ <NewApp />} />
          <Route path='test' element={ <TestPage />} />
        </Route>
        <Route path="/admin" element={<Layout />}>
          <Route index element={ <Home />} />
          <Route path='applications' element={ <ApplicationsAdmin />} />
          <Route path='faculties' element={ <Faculties />} />
          <Route path='types' element={ <Types />} />
          <Route path='types/new' element={ <NewTypes />} />
        </Route>
        <Route path="/signin" element={<Signin />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default App;
