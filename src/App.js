import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { publicRoutes } from './routes/routeList'
import Layout from './components/Layout';
import './App.scss';

function App() {
  return (
      <Router>
        <Layout>
            <Routes>
            {publicRoutes.map(
              ({ path, component: Component, exact }, idx) => {
                return <Route
                key={idx}
                path={path}
                exact={exact}
                element={<Component />}
                />
              })
            }
            </Routes>
        </Layout>
      </Router>
  );
}

export default App;