import { Routes, Route, useLocation} from 'react-router-dom'
import Layout from "./pages/Layout";
import Page404 from "./pages/Page404";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import Signin from './pages/auth/Signin';
import NewApp from './pages/NewApp';

function App() {
  const location = useLocation();
  console.log('Current Path:', location.pathname + location.search + location.hash);
  return (
    <div className="body-container">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={ <Home />} /> 
          <Route path='/profile' element={ <Profile />} />
          <Route path='/newapp' element={ <NewApp />} />
        </Route>
        <Route path="/admin" element={<Layout />}>
          <Route index element={ <Home />} /> 
        </Route>
        <Route path="/signin" element={<Signin />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default App;
