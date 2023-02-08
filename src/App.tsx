import { Route, Routes } from 'react-router-dom';
import { Discover } from './components/Discover';
import { Join } from './components/JoinButton';
import FeelMusic from './components/FeelMusic';
import { Layout } from './components/Layout';
import 



function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />} >
          <Route path='/soundwave' element={<FeelMusic />} />,
          <Route path='/discover' element={<Discover />} />,
          <Route path='/join' element={<Join />} />,
        </Route>
      </Routes>
    </>
  );
}

export default App;
