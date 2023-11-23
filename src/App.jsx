import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HashRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import myImg from './hollywood.jpeg';
import Home from './pages/Home';
import Show from './pages/Show';
import Starred from './pages/Starred';
import { GlobalTheme } from './theme';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalTheme>
        <img
          src={myImg}
          style={{
            position: 'absolute',
            opacity: 0.2,
            width: '100%',
            height: '100%',
            left: 0,
            top: 0,
            zIndex: -10,
          }}
        />
        <HashRouter>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/starred" element={<Starred />} />
            </Route>

            <Route path="/show/:showId" element={<Show />} />

            <Route path="*" element={<div>Not found</div>} />
          </Routes>
        </HashRouter>
      </GlobalTheme>
    </QueryClientProvider>
  );
}

export default App;
